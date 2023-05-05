import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { sendMessage } from '../../services/api'
import './styles.css'

function MessageInput({ roomId }: { roomId: string }): JSX.Element {
  const { user } = useAuth()
  const [value, setValue] = React.useState('')

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (user) {
      sendMessage(roomId, user, value)
      setValue('')
    } else {
      console.error('User not found')
    }
  }

  if (!roomId) return <></>

  return (
    <form onSubmit={handleSubmit} className='message-input-container'>
      <input
        type='text'
        placeholder='Enter a message'
        value={value}
        onChange={handleChange}
        className='message-input'
        required
        minLength={1}
      />
      <button
        type='submit'
        disabled={value.length < 1}
        className='send-message'
      >
        Send
      </button>
    </form>
  )
}
export { MessageInput }
