import React, { useState, useEffect } from 'react';
import { Grid, DialogTitle, DialogContentText, DialogContent } from '@material-ui/core';
const SingleItemManage = () => {
    return (
        <>
            <DialogTitle id='max-width-dialog-title'>Optional sizes</DialogTitle>
            <DialogContent>
                <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
            </DialogContent>
        </>
    );
};

export default SingleItemManage;
