import React from 'react';

const medicamentos = [
    { nombre: 'Nolotil', fecha: '01-05-2025' },
    { nombre: 'Enantyum', fecha: '02-05-2025' },
    { nombre: 'Ventolin', fecha: '03-05-2025' },
    { nombre: 'Lexatin', fecha: '04-05-2025' },
    { nombre: 'Nolotil', fecha: '05-05-2025' },
    { nombre: 'Enantyum', fecha: '06-05-2025' },
    { nombre: 'Ventolin', fecha: '07-05-2025' },
];

const Historial = () => {
    return (
        <div style={styles.container}>
            <h3 style={styles.titulo}>Historial de medicamentos</h3>
            <ul style={styles.lista}>
                {medicamentos.map((med, idx) => (
                    <li key={idx} style={styles.item}>
                        <span style={styles.nombre}>{med.nombre}</span>
                        <span style={styles.fecha}>{med.fecha}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem 1rem',
        maxWidth: '600px',
        margin: '0 auto',
    },
    titulo: {
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#0047A8',
    },
    lista: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.75rem 1rem',
        marginBottom: '0.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    nombre: {
        fontWeight: 600,
    },
    fecha: {
        color: '#6c757d',
        fontSize: '0.9rem',
    },
};

export default Historial;