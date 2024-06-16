import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0;
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <h2>Hello, It's Me</h2>
      <h1>John Kendric</h1>
      <h3>And I'm a Frontend Developer</h3>
      <p>Lorem ipsum dolor sit amet...</p>
      <button>Download CV</button>
    </HeroContainer>
  );
};

export default Hero;
