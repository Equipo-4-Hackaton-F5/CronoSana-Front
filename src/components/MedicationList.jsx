import React, { useState, useEffect } from 'react';
import MedicationCard from './MedicationCard';
// import { getAllMedications, updateMedicationStatus } from '../../services/medicationService'; // Descomentar al integrar la API

// DATOS FALSOS de prueba
const mockMedications = [
  { id: 1, name: 'Paracetamol 500mg', dose: '1 comprimido', scheduledTime: '08:00', isTaken: true },
  { id: 2, name: 'Ibuprofeno 600mg', dose: '1 sobre', scheduledTime: '09:00', isTaken: false }, // Para probar la alerta
  { id: 3, name: 'Vitamina C', dose: '1 pastilla', scheduledTime: '21:00', isTaken: false }, // Para probar pendiente
];

const MedicationList = () => {
  const [medications, setMedications] = useState(mockMedications);

  // IMPORTANTE: Cuando se conecte la API, hay que cambiar esto par alas peticiones.
  // useEffect(() => {
  //   getAllMedications().then(data => setMedications(data));
  // }, []);


  const handleMarkAsTaken = (id) => {
    // Lógica para la API:
    // updateMedicationStatus(id).then(() => {
    //   // Volver a pedir los medicamentos o actualizar el estado localmente
    // });

    // Lógica para los datos de prueba:
    setMedications(medications.map(med =>
      med.id === id ? { ...med, isTaken: true } : med
    ));
  };

  return (
    <div className="medication-list-container">
      <h2>Tu medicación para hoy</h2>
      {medications.map(medication => (
        <MedicationCard
          key={medication.id}
          medication={medication}
          onMarkAsTaken={handleMarkAsTaken}
        />
      ))}
    </div>
  );
};

export default MedicationList;