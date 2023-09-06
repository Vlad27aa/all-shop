import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { name: 'Home', link: '.' },
  { name: 'About', link: 'about' },
  { name: 'Contacts', link: 'contacts' },
]

const Title = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="mb-4">
        <Toolbar>
          <Link to="." className="text-2xl font-semibold">
            All-Shop
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <NavLink to="new-product">
            <div className="bg-white rounded mr-4">
              <Button variant="outlined">Add new product</Button>
            </div>
          </NavLink>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: '#fff' }}>
                <NavLink to={item.link}>{item.name}</NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Title
