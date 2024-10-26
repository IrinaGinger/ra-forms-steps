import { useState } from 'react';

import { InputForm } from '../InputForm/InputForm.tsx';
import { OutputTable } from '../OutputTable/OutputTable.tsx';

import randomString from '../../utils/randomstring.tsx';
import getTime from '../../utils/gettime.tsx';

import { IForm, ISteps } from '../../interfaces.ts';

import './Steps.css';

export const Steps = () => {
    const [form, setForm] = useState<IForm>({
        date: "",
        distance: 0,
    });

    const [data, setData] = useState<ISteps[]>([]);
    
    function handleFormSubmit(form: IForm) {
        const actualStepsData: ISteps[] = data;

        const index = data.findIndex(
            (item) => getTime(item.date) <= getTime(form.date)
        );

        if (index === -1) {
            actualStepsData.push( 
                {
                    id: randomString(10),
                    date: form.date,
                    distance: form.distance,
                },
            );
        } else if (getTime(data[index].date) === getTime(form.date)) {
            actualStepsData.splice(index, 1, 
                {
                    id: data[index].id,
                    date: data[index].date,
                    distance: +data[index].distance + +form.distance,
                }
            )
        } else {
            actualStepsData.splice(index, 0, 
                {
                    id: randomString(10),
                    date: form.date,
                    distance: form.distance,
                },
            );
        }

        setData(actualStepsData);

        setForm({ date: '', distance: 0 });
    }

    function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const id = (e.target as Element).id;
        const index = data.findIndex((item) => item.id === id);
        
        const actualStepsData: ISteps[] = data;
        actualStepsData.splice(index, 1);

        console.log(actualStepsData);

        setData(actualStepsData);
    }

    return (
        <div className="steps-wrapper">
            <InputForm
                onSubmit={handleFormSubmit}
                onChange={handleFormChange}
                form={form}
            />
            <OutputTable
                data={data}
                onDeleteClick={handleDelete}
            />
        </div>
    );
}