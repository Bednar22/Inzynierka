import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router';
const PasswordChange = (props) => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const checkPassword = () => {
        axios
            .post(
                '/users/user/passCheck',
                { passwordCheck },
                {
                    headers: {
                        'auth-token': localStorage.getItem('token'),
                    },
                }
            )
            .then((res) => {
                //console.log(res.data);
                setPasswordCheck('');
                setPasswordMatch(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const changePassword = () => {
        if (newPassword === newPasswordConfirm && checked === true) {
            axios
                .put(
                    '/users/user/changePassword',
                    { newPassword },
                    {
                        headers: {
                            'auth-token': localStorage.getItem('token'),
                        },
                    }
                )
                .then((res) => {
                    console.log(res.data);
                    props.chooseComponentToShow('UsersOrders');
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
        }
    };

    return (
        <>
            {passwordMatch ? (
                <Paper style={{ padding: '20px' }}>
                    <Grid container direction='column' spacing={4}>
                        <Grid item>
                            <Typography>Nowe hasło:</Typography>
                        </Grid>
                        <Grid item sm={6} xs={6}>
                            <TextField
                                label='Hasło'
                                color='secondary'
                                type='password'
                                fullWidth
                                onChange={(e) => setNewPassword(e.target.value)}
                                variant='outlined'
                                value={newPassword}
                            ></TextField>
                        </Grid>
                        <Grid item sm={6} xs={6}>
                            <TextField
                                label='Potwierdź hasło'
                                color='secondary'
                                type='password'
                                fullWidth
                                onChange={(e) => setNewPasswordConfirm(e.target.value)}
                                variant='outlined'
                                value={newPasswordConfirm}
                            ></TextField>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Checkbox
                                checked={checked}
                                onChange={() => {
                                    setChecked(!checked);
                                }}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{' '}
                            Potwierdzam zmiane hasła
                        </Grid>
                        <Grid container item sm={6} xs={6} justify='flex-end' alignItems='flex-end'>
                            <Button
                                color='secondary'
                                variant='contained'
                                onClick={() => {
                                    changePassword();
                                }}
                            >
                                Zmieniam hasło
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            ) : (
                //when password isnt checked
                <Paper style={{ padding: '20px' }}>
                    <Grid container direction='column' spacing={3}>
                        <Grid item>
                            <Typography>Podaj stare hasło:</Typography>
                        </Grid>
                        <Grid item sm={6} xs={6}>
                            <TextField
                                color='secondary'
                                type='password'
                                fullWidth
                                onChange={(e) => setPasswordCheck(e.target.value)}
                                variant='outlined'
                            ></TextField>
                        </Grid>
                        <Grid container item sm={6} xs={6} justify='flex-end' alignItems='flex-end'>
                            <Button
                                color='secondary'
                                variant='contained'
                                onClick={() => {
                                    checkPassword();
                                }}
                            >
                                Potwierdź
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </>
    );
};

export default PasswordChange;
