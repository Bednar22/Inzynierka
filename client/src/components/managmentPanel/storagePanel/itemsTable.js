import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import SingleItemManage from './singleItemManage';
const columns = [
    { field: 'id', headerName: 'ID', width: 160 },
    {
        field: 'name',
        headerName: 'Nazwa',
        width: 200,
        editable: false,
    },

    {
        field: 'quantity',
        headerName: 'Ilość',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'storage_location',
        headerName: 'Lokacja',
        type: 'string',
        sortable: false,
        editable: true,
        width: 160,
    },
];

const ItemsTable = () => {
    const [ordersAmmount, setOrdersAmmount] = useState(0);
    const [tableOrders, setTableOrders] = useState([]);
    const [singleOrderInfo, setSingleOrderInfo] = useState({});
    const [open, setOpen] = useState(false);
    const [orders, setOrders] = useState([]);

    const changeOrders = (storage) => {
        let newStorage = {
            id: storage.product_id,
            name: storage.name,
            quantity: storage.quantity,
            storage_location: storage.storage_location,
        };
        return newStorage;
    };

    const handleAddCategory = async () => {
        // e.preventDefault();

        const storage = {
            name: 'Piesek',
            quantity: 20,
            product_id: '13131',
            storage_location: 'W dupie',
            graphNode: 1,
        };

        try {
            await axios.post('/storage/add', storage);
        } catch (error) {
            console.error(error);
        }
    };

    const getOrders = async () => {
        await axios
            .get(`/storage/getAll`)
            .then((res) => {
                console.log(res.data);
                setTableOrders(res.data.map(changeOrders)); //to DataGrid format
                setOrders(res.data); //normal info about orders from Storage Schema
                setOrdersAmmount(res.data.length);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        //handleAddCategory();
        getOrders();
    }, []);

    const handleClickOpen = (id) => {
        console.log(id);
        const singleOrder = orders.find((item) => item.product_id == id);
        setSingleOrderInfo(singleOrder);
        console.log(' to jest singleOrder');
        console.log(singleOrder);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const fullWidth = true;
    const maxWidth = 'md';

    return (
        <>
            <div style={{ height: 600, width: '80%' }}>
                <DataGrid
                    rows={tableOrders}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    //checkboxSelection
                    onCellClick={(e) => handleClickOpen(e.id)}
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
                <SingleItemManage productInfo={singleOrderInfo}></SingleItemManage>
            </Dialog>
        </>
    );
};

export default ItemsTable;
