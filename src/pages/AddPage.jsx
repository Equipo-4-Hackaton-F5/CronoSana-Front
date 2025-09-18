import React from "react";
import Form from "../components/FormMedi/Form.jsx";
import "../components/FormMedi/Form.css"


const AddPage = () => {
  return (
    <div>
      <h1>Añadir Nuevo Medicamento</h1>
      <div className="appContainer">
        <Form />
      </div>
    </div>
  );
};

export default AddPage;
