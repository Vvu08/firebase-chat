import { Link } from 'react-router-dom'
import { chatRooms } from '../../data/chatRooms'
import './styles.css'
import { getAuth, signOut } from 'firebase/auth'
import { app } from '../../services/firebase'

function Landing() {
  const exit = () => {
    signOut(getAuth(app))
    window.location.reload()
  }
  return (
    <>
      <h2>Choose a Chat Room</h2>
      <ul className='chat-room-list'>
        {chatRooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={exit}>Sign Out 👋</button>
    </>
  )
}

export { Landing }
