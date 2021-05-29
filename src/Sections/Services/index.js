// This is Services component
import { useRef } from 'react';

import styled from 'styled-components';
import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";
import Tube from "../../assets/3dtube.png"
import Cone from "../../assets/3dtriangle.png"
import Capsule from "../../assets/3dcapsule.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

const ServiceSection = styled.section`
  width: 100vw;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  background-color: var(--black);
  background-size: auto 100vh;
  z-index: -1;
  /* background-repeat: no-repeat; */
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;
const Content = styled.div`
  display: flex;
  margin: 10rem 10rem;
  /* margin: 3rem 10rem; */
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media only Screen and (max-width: 48em){
    display: block;
    &::last-child {
      margin-bottom: 2rem;
    }
  }

  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &::last-child {
      margin-bottom: 1rem;
    }
  }
`
const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only Screen and (max-width: 48em){
    opacity: 0.5;
  }
`
const Services = () => {
  const ref = useRef(null);
  const revealRefs = useRef([])
  revealRefs.current=[]
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const element = ref.current;
    const line = document.getElementById('line')
    const mq = window.matchMedia("(max-width: 40em)")
    const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: document.getElementById("services"),

            start: "top top+=180",

            end: "bottom bottom",

            pin: element,
            pinReparent: true,
          },
    });

    t1.fromTo(
      line,
      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: line,
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      if (mq.matches) {
        t1.from(el.childNodes[0],{
            x: -300,
            opacity: 0,
            duration: 2,
            ease: 'power2',
            
            scrollTrigger: {
              trigger: el,
              id: `section-${index + 1}`,
              start: 'top center+=200',
              end: 'bottom bottom-=100',
              scrub: true,
              snap: true,
              // markers:true
            }
        }).to(el.childNodes[1], {
           transform: "scale(0)",
            duration:2,
            ease: "power2.inOut",

            scrollTrigger: {
              trigger: el.childNodes[1],
              id: `section-${index + 1}`,
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,
              // markers:true
            }
          }).from(el.childNodes[2], {
           y:400,
            duration:2,
            ease: "power2",

            scrollTrigger: {
              trigger: el,
              id: `section-${index + 1}`,
              start: "top center+=100",
              end: "bottom center-=200",
              scrub: true,
              snap: true,
              // markers:true
            }
          }).to(el, {
            opacity: 0,
            ease: "power2",

            scrollTrigger: {
              trigger: el,
              id: `section-${index + 1}`,
              start: "top top+=300",
              end: "center top+=300",
              scrub: true,
              snap: true,
              // markers:true
            }
          })
      } else {
                t1.from(el.childNodes[0],{
            x: -300,
            opacity: 0,
            duration: 2,
            ease: 'power2',
            
            scrollTrigger: {
              trigger: el,
              id: `section-${index + 1}`,
              start: 'top center+=100',
              end: 'bottom bottom-=200',
              scrub: true,
              snap: true,
              // markers:true
            }
        }).to(el.childNodes[1], {
           transform: "scale(0)",
            duration:2,
            ease: "power2.inOut",

            scrollTrigger: {
              trigger: el.childNodes[1],
              id: `section-${index + 1}`,
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,
              // markers:true
            }
          }).from(el.childNodes[2], {
           y:400,
            duration:2,
            ease: "power2",

            scrollTrigger: {
              trigger: el,
              id: `section-${index + 1}`,
              start: "top center+=100",
              end: "bottom center-=200",
              scrub: true,
              snap: true,
              // markers:true
            }
          }).to(el, {
            opacity: 0,
            ease: "power2",

            scrollTrigger: {
              trigger: el,
              id: `section-${index + 1}`,
              start: "top top+=200",
              end: "center top+=300",
              scrub: true,
              snap: true,
              // markers:true
            }
          })
      }
    })
    

  },[])

  return (
    <ServiceSection id="services">
      <Background ref={ref}>
        <Title>What We Do</Title>
        <Line id='line'/>
        <Triangle/>
      </Background>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Design"
          title="We build award winning Designs"
          subText="We help clients to build great design to attract more customers"
        />
        <OBJ>
          <img src={Tube} alt="Tube" width="400" height="400"/>
        </OBJ>
        <SvgBlock svg="Design.svg"/>
      </Content>
      
      <Content ref={addToRefs}>
        <TextBlock
          topic="Develop"
          title="We develop high quality Web & App"
          subText="We build appropriate solution to develop your website & app with best tools available"
        />
        <OBJ>
          <img src={Cone} alt="Cone" width="400" height="400"/>
        </OBJ>
        <SvgBlock svg="Develop.svg"/>
      </Content>
      
      <Content>
        <TextBlock
          topic="Support"
          title="We provide support for your digital presence"
          subText="Once your system is online, we will stay on hand to help you use it and provide technical support and maintenance your business"
        />
        <OBJ>
          <img src={Capsule} alt="Capsule" width="400" height="400"/>
        </OBJ>
        <SvgBlock svg="Support.svg"/>
      </Content>
    </ServiceSection>
  )
};

export default Services;
