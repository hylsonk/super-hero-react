import React from 'react';
import { TableRow } from '../../molecules/';
import RowTypes from '../../molecules/TableRow/config';

export const TableBody = ({rows}) => {

    return (
        <tbody>
            {rows.map(row => (
                <TableRow
                    type={RowTypes.BODY_ROW}
                    columns={row}
                />
            ))}
        </tbody>
    )

}

export default TableBody;