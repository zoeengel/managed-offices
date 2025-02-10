import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import OccupantForm from '../components/OccupantForm';
import SearchBar from '../components/SearchBar';

function OfficePage({ offices, updateOffice }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const office = offices.find((office) => office.id === parseInt(id));

  const [searchTerm, setSearchTerm] = useState('');

  if (!office) {
    return <Typography variant="h6">Office not found.</Typography>;
  }

  const handleAddOccupant = (newOccupant) => {
    const updatedOffice = {
      ...office,
      occupants: [...office.occupants, { id: Date.now(), ...newOccupant }],
    };
    updateOffice(updatedOffice);
  };

  const handleUpdateOccupant = (updatedOccupant) => {
    const updatedOffice = {
      ...office,
      occupants: office.occupants.map((occupant) =>
        occupant.id === updatedOccupant.id ? updatedOccupant : occupant
      ),
    };
    updateOffice(updatedOffice);
  };

  const handleDeleteOccupant = (occupantId) => {
    const updatedOffice = {
      ...office,
      occupants: office.occupants.filter((occupant) => occupant.id !== occupantId),
    };
    updateOffice(updatedOffice);
  };

  const filteredOccupants = office.occupants.filter((occupant) =>
    occupant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Button onClick={() => navigate('/')} variant="contained" color="secondary">
        Back to Home
      </Button>
      <Typography variant="h4" gutterBottom>
        {office.name} - {office.location}
      </Typography>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* List of Occupants */}
      <List>
        {filteredOccupants.map((occupant) => (
          <ListItem key={occupant.id}>
            <ListItemText primary={occupant.name} secondary={occupant.role} />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleUpdateOccupant({ ...occupant, name: 'Updated Name' })}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDeleteOccupant(occupant.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Add Occupant Form */}
      <Typography variant="h6">Add New Occupant</Typography>
      <OccupantForm onSubmit={handleAddOccupant} />
    </Container>
  );
}

export default OfficePage;
