import React from 'react'
import { makeStyles } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Index() {

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
        },
        leftSide: {
            width: '30%',
            display: 'flex',
            justifyContent: 'space-between',
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
            alignItems: 'center'
            // background: 'yellow'
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
            <div className={classes.rightSide}>
                <p className={classes.navItem}>Account</p>
                <div className={classes.cart}>
                    <p className={classes.cartNum}>0</p>
                    <ShoppingCartOutlinedIcon style={{fontSize: 25}}/>
                </div>
            </div>
        </header>
    )
}

export default Index
