import React from 'react';
import { TableRow } from '../../molecules/';
import RowTypes from '../../molecules/TableRow/config';

export const TableFooter = ({columns}) => {

    return (
        <tfoot>
            <TableRow
                type={RowTypes.FOOT_ROW}
                columns={columns}
            />
        </tfoot>
    )

}

export default TableFooter;