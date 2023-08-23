import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi'


function Header() {
    const cartItems = useSelector((state) => state.carts)

    return (
        <Navbar   className='Header' sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/react-project">
                    <img src={require('../assets/image/c1d8d13820f14ba2ab02f944133a23d7-removebg-preview.png')} width="80px" alt="" />
                    
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/cart">
                        <HiShoppingCart size={25} /> <Badge bg="danger">{cartItems.length}</Badge>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}



export default Header
