import React, { useState } from "react";
import "./Form.css";


export default function Form() {
    const [form, setForm] = useState({
        nombre: "",
        dosis: "",
        Descripcion: "",
        hora: ["09:00"],
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((f) => ({ ...f, [id]: value }));
    };

    //const handleSubmit = (e) => {
        //e.preventDefault();
    // aquí luego conectarás con el backend (POST /medicamentos)
        //console.log("Guardar:", form);
    //};

    //const handleCancel = () => {
        //setForm({ nombre: "", dosis: "", descripcion: "", hora: "09:00" });
    //};

    return (
        <div className="formCard">
        <form className="formBody">
            <div className="field">
                <label className="label" htmlFor="nombre">Nombre de Medicamento*</label>
                <input
                    id="nombre"
                    className="input"
                    type="text"
                    placeholder="Paracetamol"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="field">
                <label className="label" htmlFor="dosis">Dosis*</label>
                <input
                    id="dosis"
                    className="input"
                    type="number"
                    min="0"
                    step="0.5"
                    placeholder="500"
                    value={form.dosis}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="field">
                <label className="label" htmlFor="descripcion">Descripción*</label>
                <input
                    id="descripcion"
                    className="input"
                    type="text"
                    placeholder="Antes de comer, 1 comprimido..."
                    value={form.descripcion}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="field">
                <label className="label" htmlFor="hora">Hora programada*</label>
                <input
                    id="hora"
                    className="input"
                    type="time"
                    value={form.hora}
                    onChange={handleChange}
                    required
                />
            </div>

            
        </form>
        </div>
    );
}
