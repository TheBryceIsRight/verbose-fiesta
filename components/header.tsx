import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PaletteIcon from '@mui/icons-material/Palette';
import { InsertDriveFile } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { DarkMode } from '@mui/icons-material';
import { useContext } from 'react';
import { ColorModeContext } from '../pages/_app';

const Header = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} color="primary" enableColorOnDark>
        <Toolbar>
          <Link href="/">
            <Tooltip title="Home" arrow>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="secondary">
            Portfolio
          </Typography>
          <Tooltip title="Dark Mode" arrow>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={colorMode.toggleColorMode}
            >
              <DarkMode />
            </IconButton>
          </Tooltip>
          <Link href="https://docs.google.com/document/d/1C055L0uhJOlNPqIaOaA1ZBP4XYTQJNPCDOkXfJzlEFo/edit?usp=share_link" target="_blank">
            <Tooltip title="Resume" arrow>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <InsertDriveFile />
              </IconButton>
            </Tooltip>
          </Link>
          <Link href="https://www.linkedin.com/in/sandrabenito/" target="_blank">
            <Tooltip title="LinkedIn" arrow>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Link href="https://www.behance.net/sbenito" target="_blank">
            <Tooltip title="Behance" arrow>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <PaletteIcon/>
              </IconButton>
            </Tooltip>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
