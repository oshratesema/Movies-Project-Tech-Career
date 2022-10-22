import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function SubsPropsMembers({memberID}) {

    const [data, setData] = useState({data:''})
    const [name, setName] = useState({fullName:''})

    const dataSubs = async () => {
        const {data} = await axios.get('http://localhost:7000/subscription');
        const filteredSubs = data.find(subs => subs.memberID == memberID)
        if (filteredSubs != undefined){
            setData(filteredSubs);
            const {data: movies} = await axios.get('http://localhost:7000/movies')
            const movie = movies.find(movie => movie._id == filteredSubs.movieID)
            setName(movie)
        }
    }

    useEffect(() => {
        dataSubs()
    },[])

  return (
    <div>
        <p>{data.date} {name?.name}</p>
    </div>
  )
}
