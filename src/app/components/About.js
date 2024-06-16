import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h2>About Me</h2>
      <p>Frontend Developer!</p>
      <p>Lorem ipsum dolor sit amet...</p>
      <button>Read More</button>
    </AboutContainer>
  );
};

export default About;
