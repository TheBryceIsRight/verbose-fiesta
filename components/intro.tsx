import { CMS_NAME } from '../lib/constants'
import Link from 'next/link';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const Intro = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:"30px", marginBottom:"30px"}}>
     <AppBar position="static" elevation={0} color="transparent">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Bryce's Portfolio
            </Typography>
            <Link href="https://www.linkedin.com/in/bryce-watson-gatech/" target="_blank">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
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
                color="inherit"
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

export default Intro
