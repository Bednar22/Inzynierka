import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core'
import ImageUpload from './imageUpload'
import { Button, TextareaAutosize} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios'

const AddProduct = () =>{

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState()
    const [discountPrice, setDiscountPrice] = useState()
    const [description, setDescription] = useState('')
    const [photoId, setPhotoId] = useState('')
    const [subCategory, setSubCategory] = useState('')
    
    //To input photo
    const [fileInput, setFileInput] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const [previewSource,setPreviewSource] = useState()
    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setPreviewSource(reader.result)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!previewSource) return;
        uploadImage(previewSource);
    }

    const uploadImage = async (base64EncodedImage) => {
        
    //   await axios({
    //     method: 'post',
    //     headers:{
    //         'accept': 'application/json'
    //     },
    //     url: '/itemupload/uploadimage',
    //     data: base64EncodedImage
        
    //     })
        
    //     await axios.post('/upload', base64EncodedImage )
      
      
    //   try {
    //        await fetch('/productupload/uploadimage',{
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 data: base64EncodedImage
    //             }),
    //             headers: {'Content-type': 'application/json'}
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }

        fetch('/productupload/uploadimage',{
            method: 'POST',
            body: JSON.stringify({
                data: base64EncodedImage
            }),
            headers: {'Content-type': 'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data.url)
        })
    
    }
    const handleProductAdd = async() => {

        const product = {
            name: name,
            price:price,
            discountPrice: discountPrice,
            description:description,
            category: category,
            subCategory: subCategory,
            photoId:photoId
        };
        try {
            await axios.post('/productupload/addproduct', product)
        } catch (error) {
            console.log(error)
        }
        

    }

    const handleSelect = (e) => {
        setCategory(e.target.value);
      };


    return(
        <Grid container direction="column" spacing={2} style={{marginLeft:'50px'}, {border:'2px solid green'}}>
        <Grid item xs={6} sm={6}>
                <TextField 
                    variant='outlined' 
                    placeholder='Nazwa produktu'
                    type='text'
                    onChange={(e)=>setName(e.target.value)}>
                </TextField>
            </Grid>          
            <Grid container spacing={3}>
            <Grid item>
            <InputLabel style={{minWidth:'100px'}} id="demo-simple-select-label">Kategoria</InputLabel>
            <Select
             style={{minWidth:'100px'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleSelect}
                >
                <MenuItem value={10}>Akcesoria</MenuItem>
                <MenuItem value={20}>Odzież</MenuItem>
                <MenuItem value={30}>Częśći</MenuItem>
            </Select>

            </Grid>
            <Grid item >
                <TextField 
                    variant='outlined' 
                    placeholder='Cena'
                    type='number'
                    onChange={(e)=>setPrice(e.target.value)}>
                </TextField>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    //style={{minWidth:'400px'}} 
                    variant='outlined' 
                    placeholder='Opis'
                    type='text'
                    multiline
                    onChange={(e)=>setDescription(e.target.value)}>
                </TextField>
            </Grid>
            <Grid>
            <TextField value="Wybierz zdjęcie produktu" disabled variant='standard'></TextField>
            </Grid>
            <input name="image" onChange={(e) => handleFileInputChange(e)} value={fileInput}
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                style={{display:'none'}}
            />
            
            <Grid item>
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">Wybierz plik</Button>
                </label>
            </Grid>
            <Grid item xs={6} sm={6}>
            <Button variant="contained" color="primary"  onClick={handleSubmit}>Dodaj zdjęcie</Button>
            </Grid>
            <Grid item xs={6} sm={6} xl={6}>
            {previewSource ? (
                <img src={previewSource} alt="Wybrane zdjecie" style={{height:'100px'}} />
            ) : (<h2>Brak wybranego</h2>)}
            </Grid>
          
            <Grid item xs={6} sm={6}>
            <Button variant="contained" color="primary"  onClick={handleProductAdd}>Dodaj produkt</Button>
            </Grid>

        </Grid>
    )
}

export default AddProduct;