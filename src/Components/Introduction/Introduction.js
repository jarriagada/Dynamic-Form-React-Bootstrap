import {Col, Container, Row, Button } from 'react-bootstrap'
import './Introduction.css'


export default function Introduction() {

   

    return (
        <div className='introduction p-3 p-lg-5 mt-5'>
            <Container fluid>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={8}>
                        <h1 className='pl-2 text-center'>
                            Welcome to Dynamic-Form 
                            <span className='pt-2 pb-4'>Organizalo todo!!</span>
                        </h1>
                        <h4 className="text-center pt-3">
                            Hi!....Erase una vez...Loren ipsum Loren 
                            ipsum Loren ipsum Loren Loren ipsum  ...fin
                        </h4>
                        <div className='d-flex container-actions mt-5'>
                            <div className='container-buttons'>
                                <Button className='p-3' onClick={() => console.log("Click Button")}>Click me!!</Button>
                                <Button className='p-3'>Click me!!</Button>
                            </div>
                            <div className='btn-start-create'>
                                <a href='#dynamic-form'>Comienza a crear ➡️ </a>
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>

        </div>
    )

};
