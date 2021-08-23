import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Klient',
        width: 150,
        editable: false,
    },
    {
        field: 'value',
        headerName: 'Kwota',
        width: 150,
        editable: false,
    },
    {
        field: 'date',
        headerName: 'Data',
        type: 'Date',
        width: 110,
        editable: false,
    },
    {
        field: 'products',
        headerName: 'Przedmioty',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        // valueGetter: (params) =>
        //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
    const [ordersAmmount, setOrdersAmmount] = useState(0);
    const [orders, setOrders] = useState([]);

    const changeOrders = (order) => {
        let ord = {
            id: order._id,
            name: order.customer.surname + ' ' + order.customer.name,
            value: order.value.productsValue,
            date: order.date,
            products: order.products[0].name,
        };
        return ord;
    };
    const getOrders = async () => {
        await axios
            .get(`/order/all/status`, {
                params: {
                    status: 'new',
                },
            })
            .then((res) => {
                console.log(res.data);
                let orderss = res.data.map(changeOrders);
                console.log(orderss);
                setOrders(orderss);
                setOrdersAmmount(res.data.length);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                //rows={rows}
                rows={orders}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
