import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const ShopItemCard = (props) => {
    const handleClick = () => {};

    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        alt='Contemplative Reptile'
                        height='140'
                        image='https://ipla.pluscdn.pl/dituel/cp/d3/d37xo712edjjpmgi3hm3w51m9zb5e3pa.jpg'
                        title='Pies'
                    />
                    <CardContent>
                        <Link
                            to={{ pathname: `/shop/item/${props._id}` }}
                            style={{ textDecoration: 'none' }}
                            color='primary'
                        >
                            <Typography gutterBottom variant='h5' component='h2'>
                                {props.name}
                            </Typography>
                        </Link>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
                            all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export default ShopItemCard;
