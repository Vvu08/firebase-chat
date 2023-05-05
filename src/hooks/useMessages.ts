import React from 'react'
import { getMessages } from '../services/api'

function useMessages(roomId: string) {
  const [messages, setMessages] = React.useState<unknown[]>([])

  React.useEffect(() => {
    const unsubscribe = getMessages(roomId, setMessages)
    return unsubscribe
  }, [roomId])

  return messages
}

export { useMessages }
