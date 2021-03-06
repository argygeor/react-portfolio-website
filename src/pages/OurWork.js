import React from 'react';

// Images
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theracer-small.png';
import goodTimes from '../img/goodtimes-small.png';

// Styled Components
import styled from 'styled-components';

// Router
import { Link } from 'react-router-dom';

// Framer Motion
import { motion } from 'framer-motion';

// Animations
import { pageAnimation, photoAnimation, fadeAnimation, lineAnimation, slider, sliderContainer, scrollReveal } from '../animations';

// useScroll
import { useScroll } from '../components/useScroll';

const OurWork = () => {

    const [elementM, controlsM] = useScroll();
    const [elementM2, controlsM2] = useScroll();

    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: '#fff' }}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider} />
                <Frame2 variants={slider} />
                <Frame3 variants={slider} />
                <Frame4 variants={slider} />
            </motion.div>
            <Movie variants={scrollReveal} initial="show">
                <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnimation} src={athlete} alt="The Athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie variants={scrollReveal} animate={controlsM} ref={elementM}>
                <h2>The Racer</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theRacer} alt="The Racer" />
                </Link>
            </Movie>
            <Movie variants={scrollReveal} animate={controlsM2} ref={elementM2}>
                <h2>Good Times</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodTimes} alt="Good Times" />
                </Link>
            </Movie>
        </Work>
    );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  
  h2 {
    padding: 1rem 0;
  }

  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default OurWork;