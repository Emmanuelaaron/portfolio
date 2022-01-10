import { Container } from 'react-bootstrap';
import Icons from '../Icons';

const Footer = () => (
  <nav expand="lg" variant="light" className="d-flex flex-row justify-content-center align-items-center">
    <div className="bottomImage" />
    <Container className="text-center d-flex justify-content-center ">
      <Icons />
    </Container>
    <div className="bottomImage1" />
  </nav>
);

export default Footer;
