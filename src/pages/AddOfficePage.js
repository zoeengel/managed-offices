import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddOfficePage = ({ addOffice }) => {
  const [office, setOffice] = useState({
    name: "",
    location: "",
    occupants: [],
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (office.name && office.location) {
      addOffice(office);
      navigate("/");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add New Office
      </Typography>
      <TextField
        fullWidth
        label="Office Name"
        value={office.name}
        onChange={(e) => setOffice({ ...office, name: e.target.value })}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Location"
        value={office.location}
        onChange={(e) => setOffice({ ...office, location: e.target.value })}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Add Office
      </Button>
    </Container>
  );
};

export default AddOfficePage;
