import { Row,Col } from "react-bootstrap"   
import products from "../products"

const HomeScreen = () => {
  return (
    <>
        <Row className="align-items-center">
      {products.map((product) => (
        <Col  sm={12} md={6} lg={4} xl={3}>
          <h3>{product.name}</h3>
            <p>{product.description}</p>
      ))}
      </Row>
    </>
  )
}

export default HomeScreen
