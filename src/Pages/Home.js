import { lazy } from 'react'
import styled from "styled-components"

const HeroSection = lazy(()=> import('../Sections/Hero'))
const About = lazy(()=> import('../Sections/About'))
const Services = lazy(()=> import('../Sections/Services'))
const Testimonials = lazy(()=> import('../Sections/Testimonials'))
const Contact = lazy(()=> import('../Sections/Contact'))

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </Container>
  )
};

export default Home;
