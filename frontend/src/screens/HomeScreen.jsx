//import { useEffect, useState } from "react"
//import axios from "axios"
import { Row,Col } from "react-bootstrap"  
import Product from "../components/product"
import {useGetProductsQuery} from '../slices/productsApiSlice.js';   

const HomeScreen = () => {
  const {data: products, isLoading, error} = useGetProductsQuery();

  return (
    <>
        { isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (<div>{error?.data?.message || error?.message}</div>) : (<>
        <h1>Latest Products</h1>
        <Row className="align-items-center">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
        </Row>
        </>) }

        
    </>
  )//return
}//HomeScreen

export default HomeScreen
