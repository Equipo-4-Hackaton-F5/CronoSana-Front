import React from 'react';

const Footer = () => {
    return (
        <>
            <footer style={styles.footer}>
                <div style={styles.text}>
                    CronoSana©&nbsp;&nbsp;|&nbsp;&nbsp;
                    Consulta con tu médico cualquier duda respecto a tu medicación.
                </div>
            </footer>

            {/* espaciador para que el contenido no quede debajo del footer fijo */}
            <div style={{ height: '60px' }} />
        </>
    );
};

const styles = {
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100vw',
        backgroundColor: '#0047A8',
        color: '#ffff',
        textAlign: 'center',
        padding: '0.75rem 0.5rem',
        fontSize: '0.8rem',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.08)',
        zIndex: 999,
    },
    text: {
        maxWidth: '90vw',
        margin: '0 auto',
        lineHeight: '1.3',
    },
};

export default Footer;