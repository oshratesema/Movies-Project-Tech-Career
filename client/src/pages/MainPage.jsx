import React from 'react'
import { useParams } from 'react-router-dom';

export default function MainPage() {
  
  const {username} = useParams();
  console.log(username);
  return (
    <div>MainPage</div>
  )
}
