import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 400px;
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 400px;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact Me!</h2>
      <ContactForm>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Message"></Textarea>
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
