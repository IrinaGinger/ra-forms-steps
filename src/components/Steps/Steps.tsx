import { useState } from 'react';

import { InputForm } from '../InputForm/InputForm.tsx';
import { OutputTable } from '../OutputTable/OutputTable.tsx';

import getTime from '../../utils/gettime.tsx';

import { IForm, ISteps } from '../../interfaces.ts';

import './Steps.css';

export const Steps = () => {
    const [data, setData] = useState<ISteps[]>([]);
        
    function handleSubmit(form: IForm) {
        let actualStepsData: ISteps[];        

        const index = data.findIndex(
            (item) => getTime(item.date) <= getTime(form.date)
        );

        if (index === -1) {
            actualStepsData = [
                ...data,
                {
                    id: String(Date.now()),
                    date: form.date,
                    distance: form.distance,
                }
            ];
        } else if (getTime(data[index].date) === getTime(form.date)) {
            actualStepsData = [
                ...data.slice(0, index),
                {
                    id: data[index].id,
                    date: data[index].date,
                    distance: String(+data[index].distance + +form.distance),
                },
                ...data.slice(index + 1),
            ];
        } else {
            actualStepsData = [
                ...data.slice(0, index),
                {
                    id: String(Date.now()),
                    date: form.date,
                    distance: form.distance,
                },
                ...data.slice(index),
            ]
        }
        
        setData(actualStepsData);
    }

    function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const id = (e.target as Element).id;
               
        const actualStepsData: ISteps[] = data.filter(item => item.id !== id);

        setData(actualStepsData);
    }

    return (
        <div className="steps-wrapper">
            <InputForm
                onSubmit={handleSubmit}
            />
            <OutputTable
                data={data}
                onDeleteClick={handleDelete}
            />
        </div>
    );
}