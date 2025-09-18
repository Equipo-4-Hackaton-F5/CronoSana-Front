import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddMedicationButton = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={() => navigate('/add')}>
                <span style={styles.text}> + Añadir Medicamento</span>
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh', 
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '180px',
        height: '50px',
        backgroundColor: '#00D7D3',
        color: '#0D1846',
        border: 'none',
        borderRadius: '16px',
        boxShadow: '0 4px 12px #0D1846',
        cursor: 'pointer',
        fontSize: '1rem',
        gap: '8px',
    },
    plus: {
        fontSize: '48px',
        lineHeight: 1,
    },
    text: {
        fontWeight: 600,
    },
};

export default AddMedicationButton;