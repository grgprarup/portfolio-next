import styled from 'styled-components';

const PortfolioContainer = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const Project = styled.div`
  margin: 20px;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <h2>Latest Project</h2>
      <Project>
        <img src="/project1.jpg" alt="Project 1" />
        <p>Project Description</p>
      </Project>
      <Project>
        <img src="/project2.jpg" alt="Project 2" />
        <p>Project Description</p>
      </Project>
      {/* Add more projects as needed */}
    </PortfolioContainer>
  );
};

export default Portfolio;
