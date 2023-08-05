import * as React from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';

import classes from './EventForm.scss';

export type FormData = {
  title: string;
  city: string;
  date: Date;
};

type PropsType = {
  onSubmit(formData: FormData): void;
};

export const EventForm: React.FC<PropsType> = ({ onSubmit }) => {
  const [title, setTitle] = React.useState<string>('');
  const [city, setCity] = React.useState<string>('');
  const [date, setDate] = React.useState<Date>(new Date());

  const onFormSubmit = () => {
    onSubmit({ title, city, date });
  };

  const isEnabled = !!title && !!city && !!date;

  return (
    <div className={classes.container}>
      <TextField
        id="title-input"
        inputProps={{ 'aria-label': 'title-input' }}
        label="Title"
        value={title}
        variant="standard"
        margin="normal"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        id="city-input"
        inputProps={{ 'aria-label': 'city-input' }}
        label="City"
        value={city}
        variant="standard"
        margin="normal"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <DatePicker value={date} onAccept={(value) => value && setDate(value)} />
      <Button
        className={classes.submitButton}
        onClick={onFormSubmit}
        disabled={!isEnabled}
        variant="outlined"
      >
        Submit
      </Button>
    </div>
  );
};
