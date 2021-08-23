import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import SingleItemManage from './singleItemManage';
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
        editable: true,
    },
    {
        field: 'quantity',
        headerName: 'Ilość',
        type: 'number',
        width: 110,
        editable: true,
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

const ItemsTable = () => {
    const [ordersAmmount, setOrdersAmmount] = useState(0);
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const [open, setOpen] = useState(false);
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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const fullWidth = true;
    const maxWidth = 'md';
    const onItemInTableClick = () => {
        console.log('KLIKNIETE');

        return <></>;
    };

    return (
        <>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={orders}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    //checkboxSelection
                    onCellClick={() =>
                        //alert('pies');
                        handleClickOpen()
                    }
                    disableSelectionOnClick
                />
            </div>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby='max-width-dialog-title'
            >
                <SingleItemManage></SingleItemManage>
            </Dialog>
        </>
    );
};

export default ItemsTable;
