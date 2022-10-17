import React from 'react'
import { useParams } from 'react-router-dom';
import LoginPage from './LoginPage';

export default function MainPage() {
  const {username} = useParams();
  console.log(username);
  return (
    <div>
      <h1>Movies - subscription Website</h1>
      <LoginPage/>
    </div>
    
  )
}
