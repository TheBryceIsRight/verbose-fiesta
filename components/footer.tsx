import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { Button, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

const Footer = () => {
  return (
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <Typography variant="h4">Sandra&#39;s Portfolio</Typography>
          <br/>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          </div>
          <br/>
          <div>
          <Typography variant="caption">© {new Date().getFullYear()} · Sandra Benito Junyent · All Rights Reserved </Typography>
          </div>
        </div>
      </Container>
  )
}

export default Footer
