import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
//material-ui
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
//components
import Navbar from './components/layout/navbar.component';
import Homepage from './components/homepage/homepage';
import LoginForm from './components/signing/loginForm';
import Register from './components/signing/register';
import Footer from './components/layout/footer';
import ShoppingCart from './components/shoppingCart/shoppingCartMain';
import Shop from './components/shopItems/shop';
import AddProduct from './components/managmentPanel/storagePanel/addNewProduct';
import AddCategory from './components/managmentPanel/addCategory';
import Order from './components/order/order';
import { CartContextProvider } from './components/shoppingCart/cartContext';
import ShopItem from './components/shopItems/shopItem';
import Dashboard from './components/userDashboard/dashboard';
import OrderDataForm from './components/shoppingCart/orderDataForm';
import OrderConfirmation from './components/shoppingCart/confirmation';
import PrivateRoute from './components/utils/privateRoute';
import AdminRoute from './components/utils/adminRoute';
import EditUser from './components/userDashboard/editUser';
import Panel from './components/managmentPanel/panel';
import SingleItemManage from './components/managmentPanel/storagePanel/singleItemManage';
//Themes, used to set color of application
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fafafa',
        },
        secondary: {
            light: '#90a4ae',
            main: '#37474f',
        },
    },
});

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <CartContextProvider>
                        <Navbar></Navbar>
                        <Container maxWidth='lg' className={'main-container'}>
                            <Switch>
                                {/* <Route path='panel/table/:id' component={SingleItemManage}></Route> */}
                                {/* <Route path='/panel/:menuName'></Route> */}
                                <Route path='/order' component={Order} />
                                <PrivateRoute exact path='/panel' component={Panel}></PrivateRoute>
                                <Route path='/register' component={Register} />
                                <Route path='/login' component={LoginForm} />
                                <Route path='/cart' component={ShoppingCart} />
                                <Route path='/productupload' component={AddProduct} />
                                <Route path='/category' component={AddCategory} />

                                <Route path='/shop/item/:id' component={ShopItem} />
                                <Route path='/shop/:category/:subcategory' component={Shop} />
                                <Route path='/shop/:category' component={Shop} />
                                <Route path='/shop' component={Shop} />
                                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                                <Route path='/checkout/confirmation/:id' component={OrderConfirmation} />
                                <PrivateRoute path='/dashboard/edit' component={EditUser} />
                                <Route path='/checkout' component={OrderDataForm} />
                                <Route exact path='/' component={Homepage} />
                            </Switch>
                        </Container>
                    </CartContextProvider>
                    <Footer></Footer>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
