import React, { useEffect, useState } from 'react';

const MedicationList = () => {
    const [medicamentos, setMedicamentos] = useState([]);

    useEffect(() => {
        // Más adelante aquí irá la llamada a la API
        setMedicamentos([
            { id: 1, nombre: 'Paracetamol', dosis: '500mg', hora: '08:00' },
            { id: 2, nombre: 'Ibuprofeno', dosis: '200mg', hora: '14:00' },
        ]);
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <h3>Mis Medicamentos</h3>
            <ul>
                {medicamentos.map((med) => (
                    <li key={med.id} style={{ marginBottom: '1rem' }}>
                        <strong>{med.nombre}</strong> - {med.dosis} a las {med.hora}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicationList;