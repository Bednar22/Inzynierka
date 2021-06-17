import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core'
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
        
    
        try{
        await fetch('/product/uploadimage',{
            method: 'POST',
            body: JSON.stringify({
                data: base64EncodedImage
            }),
            headers: {'Content-type': 'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data)
            setPhotoId(()=>data.public_id)
        })
        }catch(error){
            console.error(error)
        }

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
            await axios.post('/product/add', product)
        } catch (error) {
            console.log(error)
        }
        

    }

    const handleSelectCategory = (e) => {
        setCategory(e.target.value);
      };

      const handleSelectSubCategory = (e) => {
        setSubCategory(e.target.value);
      };


    return(
        <div>
        <Grid container direction="column" spacing={4} alignItems="left"
         style={{marginLeft:'50px'}} > {/* GŁOWNY KONTENER */}
        <Grid item xs={4} sm={4}>
                <TextField 
                fullWidth
                    variant='outlined' 
                    placeholder='Nazwa produktu'
                    type='text'
                    onChange={(e)=>setName(e.target.value)}>
                </TextField>
            </Grid>          

                <Grid container item  spacing={6}> {/* KONTENER NA KATEGORIE */}
                <Grid item xs={2}>
            <InputLabel id="demo-simple-select-label">Kategoria</InputLabel>
            <Select
            fullWidth
             style={{minWidth:'100px'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleSelectCategory}
                >
                <MenuItem value={10}>Akcesoria</MenuItem>
                <MenuItem value={20}>Odzież</MenuItem>
                <MenuItem value={30}>Częśći</MenuItem>
            </Select>

            </Grid>

            <Grid item xs={2} sm={2}>
            <InputLabel style={{minWidth:'100px'}} id="demo-simple-select-label">Podkategoria</InputLabel>
            <Select
             style={{minWidth:'100px'}}
             fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleSelectSubCategory}
                >
                <MenuItem value={10}>Jeden</MenuItem>
                <MenuItem value={20}>Dwa</MenuItem>
                <MenuItem value={30}>Trzy</MenuItem>
            </Select>

            </Grid>
                </Grid>

            <Grid container item spacing={3} > {/* KONTENER NA CENE */}
            <Grid item xs={2} sm={2} >
                <TextField 
                    fullWidth
                    variant='outlined' 
                    placeholder='Cena'
                    type='number'
                    onChange={(e)=>setPrice(e.target.value)}>
                </TextField>
            </Grid>

            <Grid item xs={2} sm={2} >
                <TextField 
                    fullWidth
                    variant='outlined' 
                    placeholder='Cena promocyjna'
                    type='number'
                    onChange={(e)=>setDiscountPrice(e.target.value)}>
                </TextField>
            </Grid>

            </Grid> {/* KONIEC CENY */}
            <Grid item xs={8} sm={8}>
                <TextField
                   fullWidth
                    variant='outlined' 
                    placeholder='Opis'
                    type='text'
                    multiline
                    onChange={(e)=>setDescription(e.target.value)}>
                </TextField>
            </Grid>

            <Grid item xs={4}>
            <TextField value="Wybierz zdjęcie produktu" disabled variant='standard' fullWidth></TextField>
            </Grid>
            
            
            <input name="image" onChange={(e) => handleFileInputChange(e)} value={fileInput}
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                style={{display:'none'}}
            />
            <Grid item container spacing={4}> {/* KONTENER ZE ZDJECIEM */}
           
            <Grid item container direction="column" spacing={3} xs={2} sm={2}> {/* KONTENER NA 2 BUTTONY */}
            <Grid item>
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" fullWidth component="span">Wybierz plik</Button>
                </label>
            </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Dodaj zdjęcie</Button>
                </Grid>
            </Grid> {/* KONIEC 2 BUTTON */}

            <Grid item container alignItems="center" xs={2} sm={2} >
            {previewSource ? (
                <img src={previewSource} alt="Wybrane zdjecie" style={{maxHeight:'100px'}} />
            ) : (<h2>Brak wybranego</h2>)}
            </Grid>
          
                
            </Grid>{/* KONIEC KONTENERA ZE ZDJECIEM */}
            <Grid item xs={6} sm={6}>
                    <Button variant="contained" color="primary"  onClick={handleProductAdd}>Dodaj produkt</Button>
            </Grid> 
        </Grid>
        </div>
    )
}

export default AddProduct;