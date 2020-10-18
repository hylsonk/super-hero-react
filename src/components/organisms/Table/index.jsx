import React from 'react';
import {
    TableHead,
    TableBody,
    TableFooter
} from '../';

export const Table = ({
    head,
    body,
    footer
}) => {
    return (
        <table class="table">
            <TableHead
                columns={head}
            />
            <TableBody
                rows={body}
            />
            <TableFooter
                columns={footer}
            />
        </table>
    )
}

export default Table;