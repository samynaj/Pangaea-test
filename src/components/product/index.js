import React from 'react';
import  { makeStyles } from '@material-ui/core'

function Index({title, price, currency, imageUrl, addToCart}) {

    const useStyles = makeStyles(() => ({
        productItem: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        image: {
            width: '150px',
            height: '100px',
            marginBottom: '10px',
            '@media (max-width: 425px)': {
                width: '60%'
            }
        },
        price: {
            margin: '15px 0px 10px 0px',
        },
        button: {
            width: '60%',
            height: '50px',
            border: '1px solid #4b5548',
            color: '#f5f5f5',
            background: '#4b5548',
            '@media (max-width: 425px)': {
                width: '80%'
            }
        },
        title: {
            fontSize: '14px',
            textAlign: 'center',
            '@media (max-width: 425px)': {
                fontSize: '12px'
            }
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.productItem}>
            <img 
                src={imageUrl} 
                alt='productimage'
                className={classes.image} 
            />
            <p className={classes.title}>{title}</p>
            <p className={classes.price}>{currency}&nbsp;{price}</p>
            <button className={classes.button} onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Index
