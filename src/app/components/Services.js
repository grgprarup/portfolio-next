import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const Service = styled.div`
  margin: 20px;
  padding: 20px;
  background: #333;
  color: #fff;
  border-radius: 10px;
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <h2>Our Services</h2>
      <Service>
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet...</p>
      </Service>
      <Service>
        <h3>Graphic Design</h3>
        <p>Lorem ipsum dolor sit amet...</p>
      </Service>
      <Service>
        <h3>Digital Marketing</h3>
        <p>Lorem ipsum dolor sit amet...</p>
      </Service>
    </ServicesContainer>
  );
};

export default Services;
