import React from 'react'
import { useParams } from 'react-router-dom';


export default function SubsPage() {

    const {username} = useParams();

  return (
    <div>SubsPage</div>
  )
}
