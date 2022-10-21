import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function SubsComponent({movieID}) {

    const [data, setData] = useState({data:''})
    const [name, setName] = useState({fullName:''})

    const dataMembers = async () => {
        const {data} = await axios.get('http://localhost:7000/subscription');
        const filteredSubs = data.find(subs => subs.movieID == movieID)
        if (filteredSubs != undefined){
            setData(filteredSubs);
            const {data: members} = await axios.get('http://localhost:7000/members')
            const member = members.find(member => member.id == filteredSubs.memberID)
            setName(member)
        }
    }

    useEffect(() => {
        dataMembers()
    })

  return (
    <div>
        <p>{data.date} {name?.fullName}</p>
    </div>
  )
}
