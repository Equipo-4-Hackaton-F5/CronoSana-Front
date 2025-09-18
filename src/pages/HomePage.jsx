import React from 'react';
import AddMedicationButton from '../components/AddMedicationButton';
import Historial from '../components/Historial';
import MedicationList from "../components/MedicationList";

const HomePage = () => {
    return (
        <div>
            <main className="main-container">
                <h1>Bienvenida a CronoSana</h1>
                <h2 className="title">Tu medicación para hoy</h2>
                <MedicationList />
                <AddMedicationButton />
                <Historial />
            </main>
        </div>
    );
};

export default HomePage;
