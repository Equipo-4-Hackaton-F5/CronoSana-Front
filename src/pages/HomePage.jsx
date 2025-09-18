import MedicationList from "../components/MedicationList";

const HomePage = () => {
  return (
    <div>
      {/* Aquí Navbar */}
      <main className="main-container">
        <h1>Bienvenida a CronoSana</h1>
        <h2>Tu medicación para hoy</h2>
        <MedicationList />
      </main>
    </div>
  );
};

export default HomePage;
import React from 'react';
import AddMedicationButton from '../components/AddMedicationButton';

const HomePage = () => {
    return (
        <div>
            <AddMedicationButton />
        </div>
    );
};

export default HomePage;