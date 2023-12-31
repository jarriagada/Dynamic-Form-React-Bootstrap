import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";

export default function Introduction() {
  return (
    <div className="introduction p-3 p-lg-5 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1 className="pl-2 text-center">
              Formulario Dinamico{" "}
              <span className="pt-2 pb-4">
                that you will do everything that you want
              </span>
            </h1>
            <h4 className="text-center pt-3">
              Hola, estoy estudiando react con el Profe Rafa Tarraga.
              Desarrollando sus proyectos ...Loren ipsum Lorem Ipsum, Loren Loren Ipsum. 
            </h4>
            <div className="d-flex container-actions mt-5">
              <div className="container-buttons">
                <Button
                  className="p-3"
                  onClick={() => console.log("Click button")}
                >
                  Click Me!!
                </Button>
                <Button className="p-3">Get in click</Button>
              </div>
              <div className="btn-start-create">
                <a href="#dynamic-form"> Comienza a Crear...llevame al formulario Dinamico ➡️</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}