import React, { useEffect, useState } from 'react'
import { Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, emptyCart } from '../Redux/slices/cartslice';
import { Navigate } from 'react-router-dom';

function Cart() {
  
  const cartArray = useSelector(state => state.cartReducer)

  const dispatch=useDispatch()
  //to hold total price of a cart products
  const [total,setTotal]=useState(0)
  const getTotalPrice=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))

    }
    else{
      setTotal(0)
    }
  }
const handleCartEmpty =()=>{
  dispatch(emptyCart())
  alert("order placed successfully")
  navigate('/')
}

  useEffect(()=>{
    getTotalPrice()
  },[cartArray])
  return (
    <div>
      <Row>
        <Col>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {
                cartArray.length > 0 ? cartArray.map((item,index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td><img src={item.thumbnail} height={'100px'} width={'100px'} /></td>
                    <td>{item.price}</td>
                    <td>
                      <i onClick={()=>dispatch(deleteFromCart(item.id))} className='fa-solid fa-trash'></i>
                    </td>
                  </tr>

                )) : "empty cart"
              } </tbody>
          </table>
        </Col>
        <Col>
        <div className='card shadow mt-5 mx-3' >
          <h3 className='mt-4 text-center'>Cart Summary</h3>
          <h6 className='fw-bolder'>Total Cart Items :{cartArray.length}</h6>
          <h6 className='fw-bolder'>Total Price :
          {total}</h6>
          <div className='text-center'> 
            <button  onClick={handleCartEmpty} className='btn btn-success m-4'>Check Out</button>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default Cart