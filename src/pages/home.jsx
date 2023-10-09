import React from 'react'
import UserForm from '../components/UserForm'
import { Link, useParams } from 'react-router-dom'

function Home({ setScreen, message }) {
  let id = useParams();
  return (
    <>
      <UserForm setScreen={setScreen} message={message} />
      {console.log(id)}
    </>

  )
}

export default Home