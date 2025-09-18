import React from 'react';
import '../styles/MedicationCard.css';
import iconClock from '../assets/img/icon_clock.png';
import iconAlert from '../assets/img/icon_alert.png';

// Recibe como props los datos de un medicamento y la función para marcarlo como tomado
const MedicationCard = ({ medication, markAsTaken }) => {
  const { id, name, dose, scheduledTime, isTaken } = medication;

  // Lógica para el estilo de la tarjeta
  const getStatusClass = () => {
    if (isTaken) {
      return 'tomado'; 
    }

    // Comparamos la hora actual con la hora de la toma
    const now = new Date();
    const [hours, minutes] = scheduledTime.split(':');
    const medicationTime = new Date();
    medicationTime.setHours(hours, minutes, 0, 0);

    if (now > medicationTime) {
      return 'alerta'; // amarillo y Rojo en negrita (la hora ya pasó)
    }

    return 'pendiente'; // Rojo pendiente
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