import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import axios from 'axios'
import {useRouter} from 'next/router'

const MewMeetupPage = () => {
    const router=useRouter()


    const onAddMeetup = async (newMeetup)=>{
        // 填写完表格后，向后端请求数据
        const response = await axios.post('/api/new-meetup', newMeetup)
        if(response.status === 200){
            // 如果请求成功了，跳转页面到homepage
            router.push('/')
        }
    }

    return (
        <div>
            <NewMeetupForm onAddMeetup={onAddMeetup} />
        </div>
    );
};

export default MewMeetupPage;
