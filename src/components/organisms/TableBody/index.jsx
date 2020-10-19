import React from 'react';
import { TableRow } from '../../molecules/';
import RowTypes from '../../molecules/TableRow/config';

export const TableBody = ({rows}) => {

    return (
        <tbody>
            {rows && rows.length > 0 && rows.map((row, index) => (
                <TableRow
                    key={index}
                    id={row[0]}
                    type={RowTypes.BODY_ROW}
                    columns={row}
                />
            ))}
        </tbody>
    )

}

export default TableBody;