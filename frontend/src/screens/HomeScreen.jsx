//import { useEffect, useState } from "react"
//import axios from "axios"
import { Row,Col } from "react-bootstrap"  
import Product from "../components/product.jsx"
import {useGetProductsQuery} from '../slices/productsApiSlice.js';   
import Loader from "../components/Loader.jsx"
import Message from "../components/Message.jsx";

const HomeScreen = () => {
  const {data: products, isLoading, error} = useGetProductsQuery();
 
  return (
    <>
        { isLoading ? (
          <Loader/>
        ) : error ? (<Message variant = "danger">{error?.data?.message || error?.message}</Message>) : (<>
        <h1>Latest Products</h1>
        <Row className="align-items-center">
        {products.map((products) => (
          <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={products}/>
          </Col>
        ))}
        </Row>
        </>) }

        
    </>
  )//return
}//HomeScreen

export default HomeScreen
