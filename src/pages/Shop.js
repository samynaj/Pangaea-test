import React from 'react'
import { makeStyles } from '@material-ui/core'
import Header from '../components/header/index'

function Shop() {

    const useStyles = makeStyles(() => ({
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        top: {
            padding: '0 40px',
            display: 'flex',
            justifyContent: 'space-between'
        },
        topText: {
            width: '400px',
            margin: '50px 0'
        },
        h3: {
            fontSize: '40px',
            fontWeight: 500,
            marginBottom: '30px',
            fontFamily: 'Noto Serif JP, serif'
        },
        paragraph: {
            fontWeight: 600,
        },
        topRight: {
            width: '400px',
        },
        topInput: {
            width: '400px',
            height: '60px',
            marginTop: '90px',
            padding: '5px',
            fontFamily: 'Montserrat, sans-serif',
        },
        bottom: {
            background: '#e3e6e3',
            height: 'auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '50px 50px',
            padding: '50px 40px'
        },
        productItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
        },
        price: {
            display: 'flex',
            margin: '15px 0px 10px 0px',
        },
        button: {
            width: '70%',
            height: '50px',
            border: '1px solid #4b5548',
            color: '#f5f5f5',
            background: '#4b5548',
        },
        title: {
            fontSize: '14px'
        }
    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.top}>
                <div className={classes.topText}>
                    <h3 className={classes.h3}>All Products</h3>
                    <p className={classes.paragraph}>A 360&deg; look at Lumin</p>
                </div>
                <div >
                    <select className={classes.topInput}>
                        <option>Filter by</option>
                        <option>NGN</option>
                        <option>USD</option>
                        <option>GBP</option>
                        <option>EUR</option>
                    </select>
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.productItem}>
                    <img 
                        src='https://cdn.shopify.com/s/files/1/2960/5204/products/Up_Top_Management_2_Month_1_97bf84a7-3e4d-456e-933b-d87e01028583_300x200.png?v=1602789443' 
                        alt='productimage' 
                        // classsName={classes.image}
                    />
                    <p className={classes.title}>Age Management Set</p>
                    <div className={classes.price}>
                        <p>NGN</p>
                        &nbsp;
                        <p>25,000.00</p>
                    </div>
                    <button className={classes.button}>Add to Cart</button>
                </div>
                <div className={classes.productItem}>
                    <img 
                        src='https://cdn.shopify.com/s/files/1/2960/5204/products/Up_Top_Management_2_Month_1_97bf84a7-3e4d-456e-933b-d87e01028583_200x300.png?v=1602789443' 
                        alt='productimage' 
                        // classsName={classes.image}
                    />
                    <p className={classes.title}>Age Management Set</p>
                    <div className={classes.price}>
                        <p>NGN</p>
                        &nbsp;
                        <p>25,000.00</p>
                    </div>
                    <button className={classes.button}>Add to Cart</button>
                </div>
                <div className={classes.productItem}>
                    <img 
                        src='https://cdn.shopify.com/s/files/1/2960/5204/products/Up_Top_Management_2_Month_1_97bf84a7-3e4d-456e-933b-d87e01028583_200x300.png?v=1602789443' 
                        alt='productimage' 
                        // classsName={classes.image}
                    />
                    <p className={classes.title}>Age Management Set</p>
                    <div className={classes.price}>
                        <p>NGN</p>
                        &nbsp;
                        <p>25,000.00</p>
                    </div>
                    <button className={classes.button}>Add to Cart</button>
                </div>
                <div className={classes.productItem}>
                    <img 
                        src='https://cdn.shopify.com/s/files/1/2960/5204/products/Up_Top_Management_2_Month_1_97bf84a7-3e4d-456e-933b-d87e01028583_200x300.png?v=1602789443' 
                        alt='productimage' 
                        // classsName={classes.image}
                    />
                    <p className={classes.title}>Age Management Set</p>
                    <div className={classes.price}>
                        <p>NGN</p>
                        &nbsp;
                        <p>25,000.00</p>
                    </div>
                    <button className={classes.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Shop
