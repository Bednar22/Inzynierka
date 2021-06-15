import axios from 'axios';
import React, {useState} from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core';


const ImageUpload = () => {

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
      //  console.log(base64EncodedImage)
        
    //   await axios({
    //     method: 'post',
    //     headers:{
    //         'accept': 'application/json'
    //     },
    //     url: '/itemupload/uploadimage',
    //     data: base64EncodedImage
        
    //     })
        
    //     await axios.post('/upload', base64EncodedImage )
      
      
      try {
            await fetch('/productupload/uploadimage',{
                method: 'POST',
                body: JSON.stringify({
                    data: base64EncodedImage
                }),
                headers: {'Content-type': 'application/json'}
            })
        } catch (error) {
            console.log(error);
        }

    }

    return(
        <>
        <Grid container >  

            <form onSubmit={handleSubmit}>
            <TextField value="Wybierz zdjęcie produktu" disabled variant='standard'></TextField>
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

            <Grid item>
            {previewSource ? (
                <img src={previewSource} alt="Wybrane zdjecie" style={{height:'100px'}} />
            ) : (<h2>Brak wybranego</h2>)}
            </Grid>

            {/* <Grid item>
            <Button type="submit">Dodaj</Button>
            </Grid> */}
            </form>
        </Grid>
        </>
    )
}

export default ImageUpload