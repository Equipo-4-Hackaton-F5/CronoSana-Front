import React from 'react';
import AddMedicationButton from '../components/AddMedicationButton';
import Historial from '../components/Historial';

const HomePage = () => {
    return (
        <div>
            <AddMedicationButton />
            <Historial />
        </div>
    );
};

export default HomePage;