import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TransactionsTable = ({ transactions }) => {
    return (
        <TableContainer component={Paper} style={{ marginTop: 20 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Título</b></TableCell>
                        <TableCell><b>Categoria</b></TableCell>
                        <TableCell><b>Quantia</b></TableCell>
                        <TableCell><b>Data</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                            <TableCell>{transaction.title}</TableCell>
                            <TableCell>{transaction.category}</TableCell>
                            <TableCell>R$ {transaction.amount}</TableCell>
                            <TableCell>{transaction.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TransactionsTable;

