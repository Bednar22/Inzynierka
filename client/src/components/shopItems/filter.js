import React, {useState, useEffect} from 'react'
import {Grid, List} from '@material-ui/core'
import axios from 'axios'
import FilterCategory from './filterCategory'

const Filter = () => {

    const [categories, setCategories] = useState([])
   

    const getCategories = async () => {
      
      try {
           await axios.get('/categories').then(res=>{
              setCategories(res.data)
              console.log(res.data)
        })
      } catch (error) {
        console.error(error)
      } 
    }

    useEffect(()=>{
        getCategories();
    },[])

    return (
        <Grid container xs={4}>
          <Grid item>
            <List fullWidth>
              {categories.map((item)=>{
                return(<FilterCategory key={item._id}  categoryName={item.mainCategory} subCategories={item.subCategories}></FilterCategory>)
              })}
            </List>
          </Grid>
        </Grid>
    )
}

export default Filter