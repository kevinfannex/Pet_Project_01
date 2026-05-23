import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Locations from '../components/Locations';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services limit={3} />
      <Testimonials />
      <Locations />
    </>
  );
};

export default Home;
