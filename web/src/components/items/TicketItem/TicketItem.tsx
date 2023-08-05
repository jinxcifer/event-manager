import * as React from 'react';
import Barcode from 'react-barcode';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Ticket } from '@app/types';

import classes from './TicketItem.scss';

type PropsType = {
  ticket: Ticket;
};

export const TicketItem: React.FC<PropsType> = ({ ticket }) => {
  const name = `${ticket.firstName} ${ticket.lastName}`;
  return (
    <ListItem>
      <Box sx={{ width: 700 }}>
        <Card variant="outlined">
          <CardContent className={classes.content}>
            <Typography
              className={classes.name}
              noWrap
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Barcode height={50} displayValue={false} value={ticket.barcode} />
          </CardContent>
        </Card>
      </Box>
    </ListItem>
  );
};
