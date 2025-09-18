import React from "react";
import "../styles/MedicationCard.css";
import iconClock from "../assets/img/icon_clock.png";
import iconAlert from "../assets/img/icon_alert.png";

// Recibe como props los datos de un medicamento y la función para marcarlo como tomado
const MedicationCard = ({ medication, markAsTaken }) => {
  const { id, name, dose, scheduledTime, isTaken } = medication;

  // Lógica para el estilo de la tarjeta
  const getStatusInfo = () => {
    if (isTaken) {
      return {
        className: "tomado",
        text: "Tomado",
        icon: iconClock,
      };
    }

    // Comparamos la hora actual con la hora de la  toma
    const now = new Date();
    const [hours, minutes] = scheduledTime.split(":");
    const medicationTime = new Date();
    medicationTime.setHours(hours, minutes, 0, 0);

    if (now > medicationTime) {
      return {
        className: "alerta",
        text: "Atrasado",
        icon: iconAlert,
      };
    }

    return {
      className: "pendiente",
      text: "Pendiente",
      icon: iconClock,
    };
  };

  const statusInfo = getStatusInfo();

  return (
    <div className={`medication-card ${statusInfo.className}`}>
      <div className="status-bar"></div>
      <div className="info-container">
        <h3>{name}</h3>
        <p>{dose}</p>
        <p className="time">{scheduledTime}h</p>
      </div>
      <div className="status-indicator">
        <span>{statusInfo.text}</span>
        <img
          src={statusInfo.icon}
          alt="Icono de estado"
          className="status-icon"
        />
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
