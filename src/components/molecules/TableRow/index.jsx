import React from 'react';
import { Cell, HeadCell } from '../../atoms';
import types from './config';

export const TableRow = ({columns, type = types.BODY_ROW}) => {

    if([types.HEAH_ROW, types.FOOT_ROW].includes(type)) {
       return (
            <tr>
                {columns.map(col => (
                    <HeadCell 
                        value={col}
                    />
                ))}
            </tr>
        ) 
    } else {
        return (
            <tr>
                {columns.map(col => (
                    <Cell 
                        value={col}
                    />
                ))}
            </tr>
        )
    }

}

export default TableRow;