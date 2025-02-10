// src/pages/HomePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
} from "@mui/material";

function HomePage({ offices, addOffice }) {
  const [newOfficeName, setNewOfficeName] = useState("");
  const [newOfficeLocation, setNewOfficeLocation] = useState("");
  const navigate = useNavigate();

  const handleAddOffice = () => {
    const newOffice = {
      id: offices.length + 1,
      name: newOfficeName,
      location: newOfficeLocation,
      occupants: [],
    };
    addOffice(newOffice);
    setNewOfficeName("");
    setNewOfficeLocation("");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Offices
      </Typography>
      <List>
        {offices.map((office) => (
          <ListItem
            key={office.id}
            button
            onClick={() => navigate(`/office/${office.id}`)}
          >
            <ListItemText
              primary={office.name}
              secondary={`Location: ${office.location}, Occupants: ${office.occupants.length}`}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom>
        Add New Office
      </Typography>
      <TextField
        label="Office Name"
        value={newOfficeName}
        onChange={(e) => setNewOfficeName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Location"
        value={newOfficeLocation}
        onChange={(e) => setNewOfficeLocation(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddOffice}
        disabled={!newOfficeName || !newOfficeLocation}
      >
        Add Office
      </Button>
    </Container>
  );
}

export default HomePage;
