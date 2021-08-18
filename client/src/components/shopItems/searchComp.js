import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const SearchComp = (props) => {
    return (
        <>
            <Paper style={{ paddingLeft: '10px' }}>
                <TextField placeholder='Szukaj...' onChange={(e) => props.setQuery(e.target.value)}></TextField>
                <Button onClick={() => props.getSearched()}>
                    <SearchIcon></SearchIcon>
                </Button>
            </Paper>
        </>
    );
};

export default SearchComp;
