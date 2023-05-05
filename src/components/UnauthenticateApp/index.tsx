import { useAuth } from '../../hooks/useAuth'
import './styles.css'

function UnauthenticatedApp() {
  const { login } = useAuth()

  return (
    <>
      <h2>Log in to join a chat room!</h2>
      <div>
        <button onClick={() => login('google')} className='login'>
          Login with Google
        </button>
        <button onClick={() => login('github')} className='login'>
          Login with GitHub
        </button>
      </div>
    </>
  )
}

export { UnauthenticatedApp }
