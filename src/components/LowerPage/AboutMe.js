import { Row } from 'react-bootstrap';
import image from '../../images/illustration-about-me-2-desktop@2x.png';
import image2 from '../../images/illustration-about-me-desktop.png';

const AboutMe = () => (
  <div className="row justify-content-center mt-4 " id="about">
    <Row className="col-10 d-flex justify-content-center">
      <img src={image} alt="" className="background" />
      <img src={image2} alt="" className="background1" />
      <section className="w-75 text-center aboutMe">
        <h1 className="text-center aboutMeHeading">About Me</h1>
        <p className="w-100 text-center aboutMeText">
          I can help you build a product ,
          feature or website Look through some of my work
          and experience! If you like what you see and have a project you need coded,
          don’t hestiate to contact me.
        </p>
        <section className="mt-2 text-center">
          <a href="https://docs.google.com/document/d/16PGKQZ7WvaYKlDppnTBmM36x5NTuQ0s_tdciHfW9mE0/edit?usp=sharing" target="_blank" rel="noreferrer" className="btn projectButton1 mx-2">Get My Resume</a>
        </section>
      </section>
    </Row>
  </div>
);

export default AboutMe;
