import React, { useState, useEffect } from 'react'
import { makeStyles, Backdrop, CircularProgress } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Header from '../components/header/index'
import Product from '../components/product/index'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../Graphql/queries'
import addItemToCart from '../utils/addItem'
import removeItemsFromCart from '../utils/removeItem'

function Shop() {
    // state for selecting a currency
    const [currency, setCurrency] = useState('NGN');

    const { error, loading, data } = useQuery(GET_PRODUCTS(currency));

    // state for storing fetched product data
    const [products, setProducts] = useState([]);

    // state for storing fetched currency data
    const [currencies, setCurrencies] = useState([]);

    // state for storing cart items 
    const [cart, setCart] = useState([]);

    // state for opening and closing cart
    const [open, setOpen] = useState(true);

    

    // const changePrice = () => {
    //     setCart(cartItems => {
    //         products.map(item => {
    //             const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);
    //         if (existingCartItem) {
    //                     return cartItems.map(cartItem => 
    //                         cartItem.id === item.id ?
    //                         {...cartItem, price: item.price} 
    //                         :
    //                         cartItem
    //                     )
    //                 };
    //         return [...cartItems];
    //         }) 
    //     })
    // }


    useEffect(() => {
        if(data) {
            setProducts(data.products);
            setCurrencies(data.currency);  
        }    
    }, [data, currency, cart]);

    const selectCurrency = (e) => {
        e.preventDefault();
        setCurrency(e.target.value);
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden'
        },
        top: {
            padding: '0 40px',
            display: 'flex',
            justifyContent: 'space-between',
            '@media (max-width: 768px)': {
                padding: '20px'
            }
        },
        topText: {
            width: '400px',
            margin: '50px 0',
            '@media (max-width: 768px)': {
                width: '40%'
            }
        },
        h3: {
            fontSize: '40px',
            fontWeight: 500,
            marginBottom: '30px',
            fontFamily: 'Noto Serif JP, serif',
            '@media (max-width: 768px)': {
                fontSize: '23px',
                marginBottom: '20px',
            }
        },
        paragraph: {
            fontWeight: 600,
            '@media (max-width: 768px)': {
                fontSize: '0.8rem'
            }
        },
        topRight: {
            width: '400px',
            '@media (max-width: 768px)': {
                width: '10rem'
            }
        },
        topInput: {
            width: '400px',
            height: '60px',
            marginTop: '90px',
            padding: '5px',
            fontFamily: 'Montserrat, sans-serif',
            '@media (max-width: 768px)': {
                width: '9rem',
                height: '40px',
                marginTop: '70px',
            }
        },
        bottom: {
            background: '#e3e6e3',
            height: 'auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '50px 50px',
            padding: '50px 20px',
            '@media (max-width: 768px)': {
                gridTemplateColumns: '1fr 1fr',
                gap: '20px 20px',
            }
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        cart: {
            width: '500px',
            height: '100%',
            position: 'fixed',
            top: '0',
            right: '-100%',
            transition: '850ms',
            display: 'flex',
            '@media (max-width: 425px)': {
                width: '100%'
            },
        },
        cartSlide: {
            width: '600px',
            height: '100%',
            position: 'fixed',
            right: '0',
            top: '0',
            transition: '850ms',
            display: 'flex',
            flexDirection: 'column',
            zIndex: '5',
            background: '#f2f2ef',
            padding: '20px',
            overflowY: 'scroll',
            '@media (max-width: 425px)': {
                width: '100%'
            },
        },
        cartTop: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
        },
        cartClose: {
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            border: '1px solid #d8dbd7',
            
        },
        cartTopText: {
            fontSize: '0.8rem',
            fontWeight: 600,
            margin: '0 auto'
        },
        cartInput: {
            width: '80px',
            height: '40px',
            border: 'none',
            marginBottom: '10px'
        },
        cartItem: {
            height: '150px',
            background: '#fff',
            padding: '20px',
            marginBottom: '10px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '20px'

        },
        cartItemLeft: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        cartAction: {
            height: '50px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            border: '1px solid #d8dbd7',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        cartActionBtn: {
            textAlign: 'center',
            cursor: 'pointer'
        },
        cartItemTitle: {
            fontSize: '12px',
            fontWeight: 600,
        },
        cartImage: {
            width: '100px',
            height: '100px'
        },
        cartItemPrice: {
            textAlign: 'center',
            marginTop: '50px'
        }

    }));

    const classes = useStyles();

    if(error) {
        return alert(error.message)
    }

    return (
        <div className={classes.root}>
            <Header 
                CartItemNum={cart && cart.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)} 
                openCart={() => setOpen(true)}
            />
            <div className={classes.top}>
                <div className={classes.topText}>
                    <h3 className={classes.h3}>All Products</h3>
                    <p className={classes.paragraph}>A 360&deg; look at Lumin</p>
                </div>
                <div >
                    <select className={classes.topInput} onChange={selectCurrency}>
                        <option value='' disabled selected hidden>Filter by</option>
                        {
                            currencies && currencies.map((item, idx) => (
                                <option key={idx} value={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className={classes.bottom}>
                {
                    products.map(item => (
                        <Product 
                            key={item.id}
                            imageUrl={item.image_url}
                            title={item.title}
                            price={item.price}
                            currency={currency}
                            addToCart={() => setCart(cartItems => addItemToCart(cartItems, item))}
                        />
                    ))
                }
                
            </div>
            <div className={open? classes.cartSlide : classes.cart}>
                <div className={classes.cartTop}>
                    <div className={classes.cartClose} onClick={() => setOpen(false)}>
                        <ArrowForwardIosIcon style={{fontSize: '15px'}}/>
                    </div>
                    <p className={classes.cartTopText}>Your Cart</p>
                </div>
                <select className={classes.cartInput} onChange={selectCurrency}>
                    <option value='' disabled selected hidden>{currency}</option>
                    {
                        currencies.map((item, idx) => (
                            <option key={idx} value={item}>{item}</option>
                        ))
                    }
                </select>
                {
                    cart.map((item, idx) => (
                        <div key={idx} className={classes.cartItem}>
                            <div className={classes.cartItemLeft}>
                                <p className={classes.cartItemTitle}>{item.title}</p>
                                <div className={classes.cartAction}>
                                    <p onClick={() => setCart(cartItems => removeItemsFromCart(cartItems, item))} className={classes.cartActionBtn}>-</p>
                                    <p className={classes.cartActionBtn}>{item.quantity}</p>
                                    <p onClick={() => setCart(cartItems => addItemToCart(cartItems, item))} className={classes.cartActionBtn}>+</p>
                                </div>
                            </div>
                            <p className={classes.cartItemPrice}>{currency}&nbsp;{item.price}</p>
                            <img className={classes.cartImage} src={item.image_url} alt='product'/>
                        </div>
                    ))
                }
            </div>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default Shop
