
import UserForm from '../components/UserForm'

function Home({ message, userId }) {
  return (
    <>
      <UserForm message={message} userId={userId} />
    </>

  )
}

export default Home