import React from 'react';
import { TableRow } from '../../molecules/';
import RowTypes from '../../molecules/TableRow/config';

export const TableHead = ({columns = []}) => {

    return (
        <thead>
            <TableRow
                type={RowTypes.HEAD_ROW}
                columns={columns}
            />
        </thead>
    )

}

export default TableHead;