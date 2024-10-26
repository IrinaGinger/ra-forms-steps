import dateFormat from '../../utils/dateformat.tsx';
import { IStepsProps } from '../../interfaces.ts';

import './OutputTable.css';

export const OutputTable = (props: IStepsProps) => {
    const {
        data,
        onDeleteClick: handleDelete,
    } = props;

    return (
        <table className="table">
            <thead className="table-head">
                <tr>
                    <th>Дата (ДД.ММ.ГГ)</th>
                    <th>Пройдено км</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {data.map((item) => {
                    return (
                        <tr className="table-row" key={item.id} >
                            <td>{dateFormat(item.date)}</td>
                            <td>{item.distance}</td>
                            <td>
                                <button type="submit" id={item.id} className="table-row-button edit-button">&#9998;</button>
                                <button type="submit" id={item.id} className="table-row-button delete-button" onClick={handleDelete}>&#10008;</button>
                                
                            </td>
                        </tr>
                    )                    
                })}
            </tbody>
        </table>
    );
}