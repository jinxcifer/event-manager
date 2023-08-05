import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Event } from '@app/types';

type PropsType = {
  event: Event;
  onClick(id: number): void;
};

export const EventItem: React.FC<PropsType> = ({ event, onClick }) => {
  return (
    <Box sx={{ width: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            noWrap
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {event.city}
          </Typography>
          <Typography noWrap variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {event.date.toDateString()}
          </Typography>
          <Link to={`events/${event.id}`}>View Tickets</Link>
        </CardContent>
        <CardActions>
          <Button onClick={() => onClick(event.id)} size="small">
            Buy ticket
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
