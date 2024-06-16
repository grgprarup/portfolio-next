import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  );
}
