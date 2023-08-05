import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import classes from './TicketForm.scss';

export type FormData = {
  firstName: string;
  lastName: string;
};

type PropsType = {
  onSubmit(formData: FormData): void;
};

export const TicketForm: React.FC<PropsType> = ({ onSubmit }) => {
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');

  const onFormSubmit = () => {
    onSubmit({ firstName, lastName });
  };

  const isEnabled = !!firstName && !!lastName;

  return (
    <div className={classes.container}>
      <TextField
        id="firstname-input"
        inputProps={{ 'aria-label': 'firstname-input' }}
        label="Firstname"
        value={firstName}
        variant="standard"
        margin="normal"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <TextField
        id="lastname-input"
        inputProps={{ 'aria-label': 'lastname-input' }}
        label="Lastname"
        value={lastName}
        variant="standard"
        margin="normal"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
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
