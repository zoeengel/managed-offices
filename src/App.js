import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import OfficePage from "../src/pages/OfficePage";
import AddOfficePage from "../src/pages/AddOfficePage";
import { initialOffices } from "../src/data";

function App() {
  const [offices, setOffices] = useState(initialOffices);

  const addOffice = (newOffice) => {
    setOffices([...offices, newOffice]);
  };

  const updateOffice = (updatedOffice) => {
    setOffices(
      offices.map((office) =>
        office.id === updatedOffice.id ? updatedOffice : office
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage offices={offices} addOffice={addOffice} />}
        />
        <Route
          path="/office/:id"
          element={<OfficePage offices={offices} updateOffice={updateOffice} />}
        />
        <Route
          path="/add-office"
          element={<AddOfficePage addOffice={addOffice} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
