import {Navbar, Container} from 'react-bootstrap'

export default function NavBarMenu() {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  href="#!">
                        Dynamic <b>Form</b>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            Signed in as :{" "}
                            <a href='https://jarriagada.cl' target="_blank" rel="noreferrer">jarriagada.cl</a>

                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};