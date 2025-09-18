import React, { useState } from "react";
import "./Form.css";
import Button from "../Button/Button";


export default function Form() {
    const [form, setForm] = useState({
        nombre: "",
        dosis: "",
        frecuencia: "",
        hora: ["09:00"],
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((f) => ({ ...f, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", form);
        alert(`Medicamento guardado: ${form.nombre}, dosis ${form.dosis}`);
    };

    const handleCancel = () => {
        setForm({ nombre: "", dosis: "", frecuencia: "", hora: "09:00" });
    };

    return (
        <div className="formCard">
            <form className="formBody" onSubmit={handleSubmit} noValidate>
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
                    <label className="label" htmlFor="frecuencia">Frecuencia*</label>
                    <input
                        id="frecuencia"
                        className="input"
                        type="text"
                        placeholder="Antes de comer, 1 comprimido..."
                        value={form.frecuencia}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="field">
                    <label className="label" htmlFor="hora">Hora de inicio de toma*</label>
                    <input
                        id="hora"
                        className="input"
                        type="time"
                        value={form.hora}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="actions" style={{ display:"flex", gap:"10px", justifyContent:"flex-end", marginTop:"8px", flexWrap:"wrap" }}>
                    <Button variant="primary" type="submit">Guardar</Button>
                    <Button variant="secondary" type="button" onClick={handleCancel}>Cancelar</Button>
                </div>
            
            </form>
        </div>
    );
}
