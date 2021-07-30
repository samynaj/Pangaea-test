import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Index({CartItemNum, openCart}) {
    const [menu, setMenu] = useState(false);

    const useStyles = makeStyles(() => ({
        root: {
            position: 'sticky',
            width: '100%',
            padding: '0 40px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0px 2px 3px -3px rgb(128, 128, 128)',
            lineHeight: 3,
            '@media (max-width: 768px)': {
                padding: '20px'
            }
        },
        leftSide: {
            width: '30%',
            display: 'flex',
            justifyContent: 'space-between',
            '@media (max-width: 768px)': {
                display: 'none'
            }
        },
        logo: {
            width: 'auto',
            fontSize: '30px',
            fontWeight: 500,
            letterSpacing: '15px'
        },
        nav: {
            width: '30%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        navItem: {
            fontSize: '14px',
            fontWeight: 600,
        },
        rightSide: {
            position: 'relative',
            width: '10%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '@media (max-width: 768px)': {
                width: '20%'
            },
            '@media (max-width: 425px)': {
                width: '25%'
            }
        },
        cart: {
            marginTop: '17px',
            alignItems: 'center'
        },
        cartNum: {
            position: 'absolute',
            top: '0px',
            right: '-8px',
            fontWeight: 600,
            fontSize: '1rem'
        },
        menu: {
            display: 'none',
            '@media (max-width: 768px)': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        },
        sidebar: {
            display: 'none',
            '@media (max-width: 768px)': {
                width: '500px',
                height: '100%',
                position: 'fixed',
                marginLeft: '-100%',
                transition: '850ms',
                display: 'flex',
            },
            '@media (max-width: 425px)': {
                width: '100%'
            },
        },
        slide: {
            display: 'none',
            '@media (max-width: 768px)': {
                width: '600px',
                height: '100%',
                position: 'fixed',
                left: '0',
                top: '0',
                transition: '850ms',
                display: 'flex',
                flexDirection: 'column',
                zIndex: '7',
                background: '#fff',
                padding: '40px'
            },
            '@media (max-width: 425px)': {
                width: '100%'
            },
        },
        menuTop: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        menuTopNav: {
            width: '30%',
            display: 'flex',
            justifyContent: 'space-between',
        },
        menuTopNavItem: {
            fontWeight: 600,
        },
        menuTopNavBack: {
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            border: '1px solid #d8dbd7'
        },
        menuList: {
            marginTop: '30px'
        },
        menuItem: {
            fontSize: '20px',
            fontWeight: 800,
        }
    }));

    const classes = useStyles();
    return (
        <header className={classes.root}>
            <div className={classes.leftSide}>
                <p className={classes.logo}>LUMIN</p>
                <nav className={classes.nav}>
                    <p className={classes.navItem}>Shop</p>
                    <p className={classes.navItem}>Learn</p>
                </nav>
            </div>
            <div className={menu? classes.slide : classes.sidebar}>
                <div className={classes.menuTop}>
                    <nav className={classes.menuTopNav}>
                        <p className={classes.menuTopNavItem}>Shop</p>
                        <p className={classes.menuTopNavItem}>Learn</p>
                    </nav>
                    <div className={classes.menuTopNavBack} onClick={() => setMenu(false)}>
                        <ArrowBackIosIcon style={{fontSize: '15px'}}/>
                    </div>
                </div>
                <div className={classes.menuList}>
                    <p className={classes.menuItem}>Skin</p>
                    <p className={classes.menuItem}>Hair & Body</p>
                    <p className={classes.menuItem}>Sets</p>
                    <p className={classes.menuItem}>Accessories</p>
                    <p className={classes.menuItem}>Shop All</p>
                </div>
            </div>
            <div className={classes.menu} onClick={() => setMenu(true)} >
                <MenuIcon fontSize='medium'/>
            </div>
            <div className={classes.rightSide}>
                <p className={classes.navItem}>Account</p>
                <div className={classes.cart} onClick={openCart}>
                    <p className={classes.cartNum}>{CartItemNum}</p>
                    <ShoppingCartOutlinedIcon style={{fontSize: 25}}/>
                </div>
            </div>
        </header>
    )
}

export default Index
