import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

const ContactForm = () => {
  const [inputText, setinputText] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onChange = (e) => {
    setinputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setinputText({
      first_name: '',
      last_name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: inputText.email,
      to_name: 'emmanuelisabirye9@gmail.com"',
      message: inputText.message,
      from_first_name: inputText.first_name,
      from_last_name: inputText.last_name,
    };

    emailjs.send(
      'service_eez7k8l',
      'template_habs18d',
      templateParams,
      'user_rdaCAz0Dk4KLi7bw6W8Ml',
    );
    resetForm();
  };
  return (
    <div className="row justify-content-center align-items-center mt-5 formMail" id="contact">
      <p className="col-10 col-md-4 text-center formTextMail">
        I&apos;m always interested in hearing
        about new projects, so if you&apos;d like to chat
        please get in touch.
      </p>
      <Form className="col-10 col-md-6" onSubmit={handleSubmit}>
        <Form.Group className="d-flex mb-3">
          <Form.Control
            className="mx-2"
            type="text"
            name="first_name"
            value={inputText.first_name}
            placeholder="First Name"
            onChange={onChange}
          />
          <Form.Control
            className="mx-2"
            type="text"
            name="last_name"
            value={inputText.last_name}
            placeholder="Last Name"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            name="email"
            value={inputText.email}
            placeholder="Email Adress"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            name="message"
            value={inputText.message}
            onChange={onChange}
            rows={3}
            placeholder="Type your message here"
          />
        </Form.Group>
        <Button type="submit" className="projectButton4">
          Get in Touch
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
