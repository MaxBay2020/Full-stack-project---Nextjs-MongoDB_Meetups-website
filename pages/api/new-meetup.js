// url类似于：localhost:3000/api/new-meetup
// 这个文件中写后端代码

// 这里使用了原生的mongodb连接数据库，我们也可以使用mongoose来连接
import {MongoClient} from 'mongodb'

const handler =  async (req, res)=>{
    // 使用req.method来获取请求类型
    if(req.method==='POST'){
        const newMeetup = req.body
        // 连接数据库，这里使用的是mongodb atlas
        const client = await MongoClient.connect('mongodb+srv://wangxiaobei:13ULovEi14962464@cluster0.xpnhi.mongodb.net/meetups?retryWrites=true&w=majority')
        const db=client.db()

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(newMeetup)
        console.log(result)
        client.close()
        res.status(200).json({message: 'Added successfully.'})
    }
}

export default  handler
