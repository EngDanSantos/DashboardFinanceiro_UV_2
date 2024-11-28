import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import api from '../services/api';

const EmployeeForm = () => {
    const [employeeData, setEmployeeData] = useState({
        name: '',
        age: '',
        cpf: '',
        phone: '',
    });
    const [employees, setEmployees] = useState([]); // Lista de funcionários

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({ ...employeeData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        api.post('employees/', employeeData)
            .then((response) => {
                alert('Funcionário cadastrado com sucesso!');
                setEmployeeData({ name: '', age: '', cpf: '', phone: '' }); // Reseta o formulário
                fetchEmployees(); // Atualiza a lista
            })
            .catch((error) => {
                console.error('Erro ao adicionar funcionário:', error.response?.data || error.message);
                alert('Erro ao cadastrar funcionário. Verifique os dados.');
            });
    };

    const fetchEmployees = () => {
        api.get('employees/')
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar funcionários:', error.response?.data || error.message);
            });
    };

    useEffect(() => {
        fetchEmployees(); // Carrega os funcionários ao montar o componente
    }, []);

    return (
        <Container>
            <Typography variant="h4" style={{ marginTop: 20, textAlign: 'center' }}>
                Cadastro de Funcionário
            </Typography>
            <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Nome"
                            name="name"
                            value={employeeData.name}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Idade"
                            name="age"
                            type="number"
                            value={employeeData.age}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="CPF"
                            name="cpf"
                            value={employeeData.cpf}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Número de Telefone"
                            name="phone"
                            value={employeeData.phone}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                </Grid>
                <div style={{ marginTop: 20, textAlign: 'center' }}>
                    <Button type="submit" variant="contained" color="primary">
                        Salvar Funcionário
                    </Button>
                </div>
            </form>

            {/* Lista de Funcionários */}
            <Typography variant="h5" style={{ marginTop: 40, textAlign: 'center' }}>
                Funcionários Cadastrados
            </Typography>
            <List style={{ marginTop: 20 }}>
                {employees.map((employee) => (
                    <div key={employee.id}>
                        <ListItem>
                            <ListItemText
                                primary={`${employee.name} (Idade: ${employee.age})`}
                                secondary={`CPF: ${employee.cpf} | Telefone: ${employee.phone}`}
                            />
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
        </Container>
    );
};

export default EmployeeForm;