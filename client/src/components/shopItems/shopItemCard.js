import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const ShopItemCard = (props) => {
    const handleClick = () => {
        history.push(`/shop/item/${props._id}`);
    };
    const history = useHistory();
    return (
        <>
            <Card>
                <CardActionArea onClick={() => handleClick()}>
                    <CardMedia
                        //style={{ height: '160px' }}
                        component='img'
                        alt='Contemplative Reptile'
                        //height='200'
                        image={`https://res.cloudinary.com/dgcwg76qy/image/upload/v1573726751/${props.photo_id}`}
                        title='Pies'
                    />
                    <CardContent>
                        {/* <Link
                            to={{ pathname: `/shop/item/${props._id}` }}
                            style={{ textDecoration: 'none' }}
                            color='primary'
                        > */}
                        <Typography gutterBottom variant='h5' component='h2'>
                            {props.name}
                        </Typography>
                        {/* </Link> */}
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
