import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread2', 356, 16.0, 49, 3.9),
    createData('Gingerbread3', 356, 16.0, 49, 3.9),
    createData('Gingerbread4', 356, 16.0, 49, 3.9),
    createData('Gingerbread5', 356, 16.0, 49, 3.9),
    createData('Gingerbread6', 356, 16.0, 49, 3.9),
    createData('Gingerbread7', 356, 16.0, 49, 3.9),
    createData('Gingerbread8', 356, 16.0, 49, 3.9),
    createData('Gingerbread9', 356, 16.0, 49, 3.9),
    createData('Gingerbread10', 356, 16.0, 49, 3.9),
    createData('Gingerbread11', 356, 16.0, 49, 3.9),
    createData('Gingerbread12', 356, 16.0, 49, 3.9),
    createData('Gingerbread13', 356, 16.0, 49, 3.9),
];

const OrdersTable = () => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [orders, setOrders] = useState([]);
    const [ordersAmmount, setOrdersAmmount] = useState(0);
    const getOrders = async () => {
        await axios
            .get(`/order/all/status`, {
                params: {
                    status: 'new',
                },
            })
            .then((res) => {
                console.log(res.data);
                setOrders(res.data);
                setOrdersAmmount(res.data.length);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getOrders();
    }, []);

    //Tablepagination functions
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, ordersAmmount - page * rowsPerPage);
    //end of table pagination functions

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Klient</TableCell>
                        <TableCell align='right'>Kwota</TableCell>
                        <TableCell align='right'>Data</TableCell>
                        <TableCell align='right'>Produkty</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, index) => (
                        <TableRow key={order._id}>
                            <TableCell component='th' scope='row'>
                                {order.customer.name + order.customer.surname}
                            </TableCell>
                            <TableCell align='right'>{order.value.productsValue}</TableCell>
                            <TableCell align='right'>{order.date}</TableCell>
                            <TableCell align='right'>{order.products[0].name}</TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component='div'
                count={ordersAmmount}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};

export default OrdersTable;
