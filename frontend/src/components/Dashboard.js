import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Para navegação
import TransactionsTable from './TransactionsTable';
import AddTransactionForm from './AddTransactionForm';
import TransactionsChart from './TransactionsChart';
import api from '../services/api';
import { Container, Typography, Grid, Button } from '@mui/material';

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        api.get('transactions/')
            .then((response) => setTransactions(response.data))
            .catch((error) => console.error('Error fetching transactions:', error));
    }, []);

    const handleAddTransaction = (newTransaction) => {
        setTransactions((prev) => [...prev, newTransaction]);
    };

    return (
        <Container>
            <Typography variant="h3" style={{ marginTop: 20, textAlign: 'center'}}>
                Dashboard Financeiro
            </Typography>

            {/* Botão de Cadastro de Funcionário */}
            <div style={{ marginTop: 20, textAlign: 'center' }}>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/employee"
                >
                    Cadastro de Funcionario
                </Button>
            </div>

            <Grid container spacing={2} style={{ marginTop: 20 }}>
                <Grid item xs={12} md={6}>
                    <AddTransactionForm onAdd={handleAddTransaction} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TransactionsChart transactions={transactions} />
                </Grid>
                <Grid item xs={12}>
                    <TransactionsTable transactions={transactions} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;