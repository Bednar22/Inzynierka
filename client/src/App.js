import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//material-ui
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
//components
import Navbar from './components/navbar.component'
import LoginForm from './components/loginForm';

const theme = createMuiTheme({
   palette: {
     primary: {
      main: '#fafafa'
     },
     secondary: {
       light:'#90a4ae',
       main: '#37474f'
     }
   }
})


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar></Navbar>
    <BrowserRouter>
        <Switch>
          <Route path="/users" component={LoginForm} />
        </Switch>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;