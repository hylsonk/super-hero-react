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
    if (body && body.length > 0) {
        return (
            <div className='table-container'>
                <table className="table is-striped is-bordered is-fullwidth">
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
            </div>
        )
    } else {
        return (
            'nada a exibir'
        )
    }
}

export default Table;