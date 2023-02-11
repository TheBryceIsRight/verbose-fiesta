import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  const role = props.role
  const company = props.company
  const timeframe = props.timeframe
  const teamstyle = props.teamstyle
  const tools = props.tools

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          Role
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {role}
        </Typography>
        <br/>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          Company
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {company}
        </Typography>
        <br/>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          Time Frame
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {timeframe}
        </Typography>
        <br/>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          Team Style
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {teamstyle}
        </Typography>
        <br/>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          Tools
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {tools}
        </Typography>
      </CardContent>
    </Card>
  );
}