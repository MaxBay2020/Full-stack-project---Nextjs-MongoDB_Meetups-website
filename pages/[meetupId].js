import React, {Fragment} from 'react'
import {useRouter} from 'next/router'
import MeetupDetail from "../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from 'mongodb'

const MeetupDetails = (props) => {
    const {image, title, address, description}=props.meetupData
    return (
        <>
            <MeetupDetail
                image={image}
                title={title}
                address={address}
                description={description}
            />
        </>

);
};

// 因为这个页面是动态页面，且getStaticProps()函数是在build时生成静态页面的，
// 因此next.js需要知道静态页面的这个meetupId是多少来预渲染
// 因此getStaticPaths()函数就是用来告诉next.js，这个动态参数都有什么
export const getStaticPaths= async ()=>{
    // 从数据库中获取数据的代码
    const client = await MongoClient.connect('mongodb+srv://wangxiaobei:13ULovEi14962464@cluster0.xpnhi.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db()

    const meetupsCollection = db.collection('meetups')
    // 获取所有数据，但只保留_id这个字段，取值1
    const meetups=await meetupsCollection.find({}, {_id: 1}).toArray()

    client.close()
    return {
        // 必须有fallback键，值是布尔值，一般写false
        // false表示：下面的paths写死了，如果url超出了paths范围，会显示错误页面
        // true表示：下面的paths没写死，如果url里面没有paths里的选项，不会报错，会自动生成一个页面
        fallback: false,
        // 必须有paths键，值是一个数组，里面是一个个的对象，每个对象必须有params键，值是一个对象
        // 这里不应该hard code，要从数据库获取数据
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
        // paths:
        //     [{
        //     params: {
        //         meetupId: 'm1' // 这里写可能的动态数据
        //     }
        // }, {
        //     params: {
        //         meetupId: 'm2'
        //     }
        // }]
    }
}

export const getStaticProps = async (context)=>{
    const {meetupId}=context.params

    // 从数据库中获取数据的代码
    const client = await MongoClient.connect('mongodb+srv://wangxiaobei:13ULovEi14962464@cluster0.xpnhi.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db()

    const meetupsCollection = db.collection('meetups')
    // 获取所有数据，但只保留_id这个字段，取值1
    const getMeetupById = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

    client.close()

    return {
        props: {
            meetupData: {
                ...getMeetupById,
                _id:getMeetupById._id.toString()
            }
        }
    }
}

export default MeetupDetails;
