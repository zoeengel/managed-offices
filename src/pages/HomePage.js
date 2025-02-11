import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Fab,
  Grid,
} from "@mui/material";
import { Edit, People, Add } from "@mui/icons-material";

const HomePage = ({ offices }) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ position: "relative", pb: 8 }}>
      <Typography variant="h4" gutterBottom>
        All Offices
      </Typography>

      <Grid container spacing={3}>
        {offices.map((office, index) => (
          <Grid item xs={12} key={office.id}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                borderLeft: `8px solid ${
                  ["#4285F4", "#FBBC05", "#EA4335", "#34A853"][index % 4]
                }`, // Rotating colors
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {office.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", mt: 1 }}
                >
                  <People sx={{ fontSize: 20, mr: 1 }} />
                  <strong>{office.occupants.length}</strong> Staff Members in
                  Office
                </Typography>
              </CardContent>

              <IconButton onClick={() => navigate(`/office/${office.id}`)}>
                <Edit color="primary" />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Floating Add Office Button */}
      <Fab
        color="primary"
        sx={{ position: "fixed", bottom: 24, right: 24 }}
        onClick={() => navigate("/add-office")}
      >
        <Add />
      </Fab>
    </Container>
  );
};

export default HomePage;
