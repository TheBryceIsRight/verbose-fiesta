import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Science } from '@mui/icons-material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Link href="/">
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} color="secondary">
            Bryce's Portfolio
          </Typography>
          <Link href="/work/functionize">
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Science />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/bryce-watson-gatech/" target="_blank">
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link href="https://github.com/TheBryceIsRight" target="_blank">
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <GitHubIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
