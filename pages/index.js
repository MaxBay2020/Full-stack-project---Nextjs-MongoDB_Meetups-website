import React from 'react'
import MeetupList from "../components/meetups/MeetupList"
// 我们一般在后端js文件中对数据库进行操作，这个文件是前端js文件
// 我们之所以能在这个前端js文件中直接操作数据库，是因为next.js会帮助
// 我们分离这些代码到后端js文件中
// 因此我们可以在前端js文件中写操作数据库的代码了
// 这里使用的是原生mongodb，我们也可以使用mongoose来操作数据库
import {MongoClient} from 'mongodb'
// 使用next/head包中的Head，来优化搜索引擎检索
import Head from 'next/head'

const DUMMY_MEETUPS=[
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Ontario_Legislative_Building%2C_Toronto%2C_South_view_20170417_1.jpg',
        address: 'Toronto',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Ontario_Legislative_Building%2C_Toronto%2C_South_view_20170417_1.jpg',
        address: 'Toronto',
        description: 'This is a first meetup'
    },
    {
        id: 'm3',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Ontario_Legislative_Building%2C_Toronto%2C_South_view_20170417_1.jpg',
        address: 'Toronto',
        description: 'This is a first meetup'
    }
]

// 这里的props是getStaticProps()方法中返回的props
const HomePage = (props) => {

    return (
        <>
            <Head>
                <title>Next Meetups</title>
                <meta name='description' content='Browse a huge list of highly active Next meetups' />
            </Head>
            <MeetupList meetups={props.meetups} />

        </>
    );
};

// 从数据库取数据
// 方法一：使用getStaticProps()函数
// next.js会先找这个名字的函数，这个函数会在这个组件挂载前执行
// 这个函数一般是异步的，因为我们要在这里方法里准备此组件需要的数据
// 只有数据回来了，才挂载此组件
// 这个函数中的代码会执行在后端，因此从数据库获取数据的代码写在这里
export const getStaticProps = async ()=>{
    // 从数据库中获取数据的代码
    const client = await MongoClient.connect('mongodb+srv://wangxiaobei:13ULovEi14962464@cluster0.xpnhi.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db()

    const meetupsCollection = db.collection('meetups')
    // 查询所有数据
    const meetups = await meetupsCollection.find().toArray()

    client.close()

    // 最后必须返回一个对象
    return {
        // 里面必须有个叫props的对象，这个就是页面需要的数据了
        props: {
            meetups: meetups.map(meetup => ({
                ...meetup,
                id: meetup._id.toString(),
                _id: meetup._id.toString()
            }))
        },
        // revalidate使用来告诉next.js，多久要重新从数据库获取数据的
        revalidate: 10 // 单位：秒，10秒表示在10秒内请求数据还是旧的数据，超过10秒请求数据next.js就会从数据库读取新数据了
    }
}

// 从数据库取数据
// 方法二：使用getStaticProps()函数，这个函数会在每次向数据库请求的时候都会请求最新数据
// next.js会先找这个名字的函数，这个函数会在这个组件挂载前执行
// 这个函数一般是异步的，因为我们要在这里方法里准备此组件需要的数据
// 只有数据回来了，才挂载此组件
// 这个函数中的代码会执行在后端，因此从数据库获取数据的代码写在这里
// 这个方法接收context作为参数，context身上可以获取req和res对象，我们就可以获取session了
// export const  getServerSideProps = async (context)=>{
//     const req=context.req
//     const res=context.res
//     // 从数据库中获取数据的代码
//
//     // 最后必须返回一个对象
//     return {
//         // 里面必须有个叫props的对象，这个就是页面需要的数据了
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//
//         // 与getStaticProps()方法不同的是：getServerSideProps()方法返回的对象中没有revalidate
//         // 因为getServerSideProps()方法的实行特点是：每发送一次请求，就从数据库中获取最新数据
//
//     }
// }

export default HomePage;
