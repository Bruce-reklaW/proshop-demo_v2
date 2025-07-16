import { Row,Col } from "react-bootstrap"  
import Products from "../components/product"
import products from "../products"

const HomeScreen = () => {
  return (
    <>
        <Row className="align-items-center">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product}/>
          </Col>
        ))}
        </Row>
    </>
  )
}

export default HomeScreen
