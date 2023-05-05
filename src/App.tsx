import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ChatRoom } from './components/ChatRoom'
import { Landing } from './components/Landing'
import { UnauthenticatedApp } from './components/UnauthenticateApp'
import { useAuth } from './hooks/useAuth'

function App() {
  const { user } = useAuth()

  return (
    <div className='container'>
      <h1>💬 Chat Room</h1>
      <BrowserRouter>
        <Routes>
          {user ? (
            <>
              <Route path='/' element={<Landing />} />
              <Route path='/room/:id' element={<ChatRoom />} />
            </>
          ) : (
            <Route path='/' element={<UnauthenticatedApp />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
