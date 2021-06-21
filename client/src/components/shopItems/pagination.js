import React, {useState, useEffect} from 'react'
import axios from 'axios'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid'
import "./../../App.css"
import Link from '@material-ui/core/Link'

const Pagination = (props) => {
    
    //const setPagesNumber = () => {
        let pages=[];
        for(let i=1; i <= Math.ceil(props.itemsAmmount/props.itemsPerPage); i++){
            pages.push(i);   
        }
    //     return pages;
    // }

    // useEffect(()=>{
    //     setPagesNumber();
    // }, [props.itemsAmmount, props.itemsPerPage])

    //const pages = setPagesNumber(); // number of pages
    
    return (
        <Grid container direction="row" sm={8} xs={6}  justify='center' spacing={1} style={{marginTop:'30px'}} >
            <Grid item>
            <IconButton size="small">
                <KeyboardArrowLeftIcon />
            </IconButton>
            </Grid>
            {
            pages.map((item)=>{
                return(
                    <Grid item key={item} >
                       <Link
                            color="secondary"
                            component="button"
                            varient="outlined"
                            onClick={() => props.changePage(item)}
                            >
                            {item}
                    </Link>
          
                        {/* <Button className='but-page' varient='text'size="small" style={}>{item}</Button> */}
                    </Grid>
                )
            })}
            

            <Grid item >
                <IconButton  size="small" >
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Grid>
            

        </Grid>
    )
}

export default Pagination;