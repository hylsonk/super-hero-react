import React from 'react';
import { Cell, HeadCell } from '../../atoms';
import types from './config';

export const TableRow = ({columns, id, type = types.BODY_ROW}) => {

    if([types.HEAH_ROW, types.FOOT_ROW].includes(type)) {
       return (
            <tr>
                {columns.map((col, index) => (
                    <HeadCell
                        key={index}
                        value={col}
                    />
                ))}
            </tr>
        ) 
    } else {
        return (
            <tr id= {id}>
                {columns.map((col, index) => (
                    <Cell
                        key={index}
                        value={col}
                    />
                ))}
            </tr>
        )
    }

}

export default TableRow;