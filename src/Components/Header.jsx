import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { wishlistReducer } from '../Redux/store'
import { Link } from 'react-router-dom';


function Header() {

    const [openNavSecond, setOpenNavSecond] = useState(false);

    const wishlistArray = useSelector((state) => state.wishlistReducer)

    const cartArray= useSelector((state)=>state.cartReducer)
    return (
        <div>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <i className='fa-solid fa-cart-plus fs-2-ms px-2 '></i>
                    <MDBNavbarBrand href='/'>SHOPPY</MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNavSecond(!openNavSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNavSecond}>
                        <MDBNavbarNav className='me-auto'>
                            <MDBNavbarLink active aria-current='page' href='/'>
                                Home
                            </MDBNavbarLink>
                            <Link to={'/cart'}>
                            <MDBNavbarLink>Cart<Badge pill bg="danger">{cartArray.length}</Badge></MDBNavbarLink>
                          
                            </Link>
                            <Link to={'/wishlist'}>
                            <MDBNavbarLink >Wishlist<Badge pill bg="secondary">{wishlistArray.length}</Badge></MDBNavbarLink>
                            </Link>
                            
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header