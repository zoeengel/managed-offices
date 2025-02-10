import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function OccupantForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && role) {
      onSubmit({ name, role });
      setName('');
      setRole('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Role"
        fullWidth
        margin="normal"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Occupant
      </Button>
    </form>
  );
}

export default OccupantForm;
