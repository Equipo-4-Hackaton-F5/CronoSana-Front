import React from 'react';
import '../styles/MedicationCard.css';

// Recibe como props los datos de un medicamento y la función para marcarlo como tomado
const MedicationCard = ({ medication, markAsTaken }) => {
  const { id, name, dose, scheduledTime, isTaken } = medication;

  // Lógica para el estilo de la tarjeta
  const getStatusClass = () => {
    if (isTaken) {
      return 'tomado'; // Verde/Turquesa
    }

    // Comparamos la hora actual con la hora de la toma
    const now = new Date();
    const [hours, minutes] = scheduledTime.split(':');
    const medicationTime = new Date();
    medicationTime.setHours(hours, minutes, 0, 0);

    if (now > medicationTime) {
      return 'Atrasado'; // Rojo en negrita (la hora ya pasó)
    }

    return 'Pendiente'; // Rojo pendiente
  };

  const statusClass = getStatusClass();

  return (

    <div className={`medication-card ${statusClass}`}>
      <div className="status-bar"></div>
      <div className="info-container">
        <h3>{name}</h3>
        <p>{dose}</p>
        <p className="time">{scheduledTime}h</p>
      </div>
      <div className="action-container">
        <button
          onClick={() => markAsTaken(id)}
          disabled={isTaken}
          className="check-button"
        >
          ✔
        </button>
      </div>
    </div>
  );
};

export default MedicationCard;