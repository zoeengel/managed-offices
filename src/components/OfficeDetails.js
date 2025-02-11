import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const OfficeDetails = ({ offices, updateOffice }) => {
  const { id } = useParams();
  const office = offices.find((office) => office.id === parseInt(id));
  const [search, setSearch] = useState("");

  if (!office) {
    return (
      <Typography variant="h6" color="error">
        Office not found
      </Typography>
    );
  }

  const filteredOccupants = office.occupants.filter((occupant) =>
    occupant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h4" gutterBottom>
        {office.name}
      </Typography>
      <Typography variant="subtitle1">Location: {office.location}</Typography>

      <TextField
        label="Search Employees"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearch(e.target.value)}
      />

      <List>
        {filteredOccupants.map((occupant) => (
          <ListItem key={occupant.id}>
            <ListItemText primary={occupant.name} secondary={occupant.role} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default OfficeDetails;
