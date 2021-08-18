import { Button, Card, CardContent, CardMedia, Grid, Slide } from '@material-ui/core';
import React, { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const SlidingCard = () => {
    const ImagesArray = [
        'https://res.cloudinary.com/dgcwg76qy/image/upload/v1629286506/BikeShop/carousel_jeom48.jpg',
        'https://res.cloudinary.com/dgcwg76qy/image/upload/v1629286512/BikeShop/carousel2_n39fih.jpg',
    ];
    const [index, setIndex] = useState(0);
    const [checked, setChecked] = useState(false);
    const [dir1, setDir1] = useState('right');
    const [dir2, setDir2] = useState('left');
    const nextImage = () => {
        if (dir1 == 'right') setDir2('left');
        if (dir1 == 'left') setDir2('right');
        setChecked((prev) => !prev);
    };

    const prevImage = () => {
        if (dir1 == 'right') setDir2('left');
        if (dir1 == 'left') setDir2('right');
        setChecked((prev) => !prev);
    };

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (
        <>
            <Grid container xs={12} sm={12}  alignItems='center' justify='center'>
                <Grid item>
                    <Button onClick={() => prevImage()}>
                        <ArrowBackIosIcon></ArrowBackIosIcon>
                    </Button>
                </Grid>
                <Grid item>
                    <Card>
                        <Slide direction={dir1} in={checked} mountOnEnter unmountOnExit>
                            <CardMedia component='img' alt='Pies' image={ImagesArray[1]} title='Pies'></CardMedia>
                        </Slide>
                        <Slide direction={dir2} in={!checked} mountOnEnter unmountOnExit>
                            <CardMedia component='img' alt='Pies' image={ImagesArray[0]} title='Pies'></CardMedia>
                        </Slide>
                    </Card>
                </Grid>
                <Grid item>
                    <Button onClick={() => nextImage()}>
                        <ArrowForwardIosIcon></ArrowForwardIosIcon>
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default SlidingCard;
