import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useTranslation from '../intl/useTranslation';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {

  const { t } = useTranslation();

  const role = props.role
  const company = props.company
  const timeframe = props.timeframe
  const teamstyle = props.teamstyle
  const tools = props.tools

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          {t("role")}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {t(role)}
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          {t("company")}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {company}
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          {t("time_frame")}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {timeframe}
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          {t("team_style")}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {t(teamstyle)}
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          {t("tools")}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {tools}
        </Typography>
      </CardContent>
    </Card>
  );
}