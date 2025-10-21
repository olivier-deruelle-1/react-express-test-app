import type { Book } from '../types'
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

type Props = {
  books: Book[]
}

const BooksList = ({ books }: Props) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        px: 2,
      }}
    >
            <Box
                sx={{
                  width: '100%',
                  maxWidth: 600,
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  boxShadow: 1,
                  p: 2,
              }}
            >
                <div style={{ textAlign: 'center', marginBottom: 12 }}>
                  <h1 style={{ color: 'green', margin: 0 }}>Arthur C. Clarke books</h1>
                </div>
                <nav>
                  <List>
                    {books.map(book => (
                      <ListItem key={book.id}><ListItemButton><ListItemText primary={book.title} /></ListItemButton> </ListItem>
                    ))}
                  </List>
                </nav>
            </Box>
    </Box>
  )
}

export default BooksList
