import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import useFetch from '../Hooks/useFetch';
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../Redux/slices/Wishlist';
import { Link } from 'react-router-dom'
import { addToCart } from '../Redux/slices/cartslice';


function Home() {

    const data = useFetch('https://dummyjson.com/products');
    console.log(data);
    const dispatch = useDispatch();

    const wishlistArray = useSelector((state) => state.wishlistReducer)

    const handleAddToWishlist = (item) => {
        //check if the item is already in the wishlist
        const isItem = wishlistArray.some((wishlistItem) => wishlistItem.id === item.id)
        if(isItem){
            alert("Item already in wishlist")
        }
        else{
            dispatch(addToWishlist(item))
        }
    }

    return (
        <div>
            <div className='banner'>
                <img src="https://admin.oxygendigitalshop.com/pub/media/cache/1920x0/2023/OCT/GADGETS%20BANN/Web%20banner%203-16_1698300207.webp" width={'100%'} alt="" />
            </div>
            <div className="card">
                <Row>
                    {
                        data?.length > 0 ? data.map(item => (
                            <Col>
                                <MDBCard className='m-3 shadow' style={{ width: '300px' }}>
                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                        <MDBCardImage src={item.thumbnail} style={{ width: '100%', height: '250px' }} fluid alt='...' />
                                        <a>
                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                        </a>
                                    </MDBRipple>
                                    <MDBCardBody>
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>
                                            ${item.price}
                                        </MDBCardText>
                                        <MDBBtn className='bg-danger mx-4' href='#' onClick={() =>handleAddToWishlist(item)}><i className='fa-solid fa-heart'></i></MDBBtn>
                                        <MDBBtn onClick={()=>dispatch(addToCart(item))} className='bg-primary mx-4' href='#'><i className='fa-solid fa-cart-plus'></i></MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </Col>
                        )) : "Not Found"
                    }
                </Row>
            </div>
        </div>
    )
}

export default Home