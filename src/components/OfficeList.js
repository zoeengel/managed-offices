import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const OfficeList = ({ offices }) => {
  return (
    <Paper sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h5" gutterBottom>
        Office List
      </Typography>
      <List>
        {offices.map((office) => (
          <ListItem
            key={office.id}
            button
            component={Link}
            to={`/office/${office.id}`}
          >
            <ListItemText
              primary={office.name}
              secondary={`Location: ${office.location}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default OfficeList;
