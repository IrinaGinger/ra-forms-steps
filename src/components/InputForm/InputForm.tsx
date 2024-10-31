import { useState } from 'react'; 
import { IForm, IFormProps } from '../../interfaces.ts';

import './InputForm.css';

export const InputForm = (props: IFormProps) => {
    const { onSubmit: handleSubmit } = props;

    const [form, setForm] = useState<IForm>({
        date: "",
        distance: "0",
    });    
    
    function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    return (
        <form
            className="steps-form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                handleSubmit(form);
                setForm({ date: '', distance: "0" });
            }}
        >
            <div className="steps-form-field">
                <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <input
                    className="steps-form-input date"
                    type="date"
                    id="date"
                    name="date"
                    min="2000-01-01"
                    max="2050-12-31"
                    required
                    value={form.date}
                    onChange={handleFormChange}
                />
            </div>
            <div className="steps-form-field">
                <label htmlFor="distance">Пройдено км</label>
                <input
                    className="steps-form-input distance"
                    type="number"
                    id="distance"
                    name="distance"
                    min="0"
                    max="100"
                    required
                    value={form.distance}
                    onChange={handleFormChange}
                />
            </div>
            <div className="steps-form-field">
                <button className="steps-form-button" type="submit">
                    OK
                </button>
            </div>
        </form>
    );
}