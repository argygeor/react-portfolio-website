import React, { useState } from 'react';

// Import Styled Components
import styled from 'styled-components';

// Import Framer Motion
import { motion } from 'framer-motion';

const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(true);

    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <Title layout>{title}</Title>
            {toggle ? children : ''}
            <div className="faq-line"></div>
        </motion.div>
    );
}

const Title = styled(motion.h4)`
  cursor: pointer;
`;

export default Toggle;