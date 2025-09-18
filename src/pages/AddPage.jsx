import React from "react";
import Form from "../components/FormMedi/Form.jsx";
import "../components/FormMedi/Form.css";
import "../App.css";

const AddPage = () => {
  return (
    <div>
      <main className="main-container">
        <h1>Añadir Nuevo Medicamento</h1>
        <div className="appContainer">
          <Form />
        </div>
      </main>
    </div>
  );
};

export default AddPage;
