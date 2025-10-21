import { useEffect, useState } from 'react'
import List from './components/List'
import type { Book } from './types'

function App() {
  const [books, setBooks] = useState<Book[]>([])

  const apiBase = import.meta.env.VITE_BACKEND_API_URL
  console.log("apiBase:",apiBase)
  const apiBooks = apiBase+"/api/books"

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch(apiBooks)
      const data = await response.json()
      setBooks(data)
    }
    getBooks()
  }, [])

  return <>{books.length === 0 ? <p>Finding books...</p> : <List books={books} />}</>
}

export default App
