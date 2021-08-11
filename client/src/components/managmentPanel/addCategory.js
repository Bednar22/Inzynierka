import React, {useState} from 'react'
import {Grid, Button, TextField} from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import axios from 'axios'

const AddCategory = () => {

    const[mainCategory, setMainCategory] = useState('')
    const[subCategory, setSubCategory]= useState('')
    const[subCategoriesArray, setSubCategoriesArray] = useState([])


    const addSubCategory = () => {
        console.log(subCategory)
        if(subCategory&&subCategory !== '') 
        setSubCategoriesArray([...subCategoriesArray, subCategory]) //dodaje element do arraya kopiujac go
        console.log(subCategoriesArray)
    }


    const showSubCategories = () => {
        
        const subArray = subCategoriesArray.map((item)=>{
            return( <ListItem divider>
                 <ListItemText>
                     {item}
                 </ListItemText>
             </ListItem>
             
            )
         })
        
        return(
            
            <List subheader={<ListSubheader>Podkategorie:</ListSubheader>}>
                <Divider/>
                {subArray}
            </List>
        )

    }


    const handleAddCategory = async(e) =>{
        e.preventDefault();
        
        const category = {

            mainCategory: mainCategory,
            subCategories: subCategoriesArray
        }

        try {
            await axios.post('/categories/add', category)
            
        } catch (error) {
            console.error(error)
        }

    }

return(
    <div>
        <Grid container spacing={3} direction="column" >
            <Grid item xs={4} sm={4} >
                <TextField fullWidth placeholder="Kategoria" onChange={(e)=>setMainCategory(e.target.value)}></TextField>
            </Grid>

            <Grid item container spacing={3}>
            <Grid item xs={4} sm={4} >
                <TextField fullWidth placeholder="Podkategoria" onChange={(e)=>setSubCategory(e.target.value)}></TextField>
            </Grid>

            <Grid item xs={1} sm={1} >
                <Button variant="contained" color="primary" fullWidth onClick={addSubCategory}>Dodaj</Button>
            </Grid>

            </Grid> 
            <Grid item xs={4} sm={4}>
            {subCategoriesArray.length===0 ? (<List subheader={<ListSubheader>Podkategorie:</ListSubheader>}><Divider/></List>) : (showSubCategories())  }
            </Grid>
            <Grid item xs={2} sm={2}>
                <Button variant="contained" color="secondary" fullWidth onClick={(e)=>handleAddCategory(e)}>Dodaj kategorie</Button>
            </Grid>
        </Grid>{/* KONIEC GŁOWNEGO KONTENERA */}

    </div>

)

}

export default AddCategory;