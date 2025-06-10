import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  background-color: #0a0b10;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  color: white;  /* White text color */
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 3rem;

  span {
    color: white;  /* Set the span text color to white */
    background: none;  /* Remove any background effect */
    -webkit-background-clip: none;
    -webkit-text-fill-color: white;  /* Ensure it's all white */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 0 1.5rem;
`;

const StatBox = styled.div`
  text-align: center;
  flex: 1;
  min-width: 200px;
  max-width: 300px;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    color: #803bec;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #e5a1f8;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (orientation: landscape) and (max-height: 500px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const useIsInViewport = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

const Counter = ({ to }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const isVisible = useIsInViewport(ref);

  useEffect(() => {
    if (!isVisible || count >= to) return;

    let start = count;  // Start from the current count value
    const duration = 1500;
    const step = Math.ceil(duration / to);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === to) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [isVisible, to, count]);  // Added 'count' to the dependency array

  return <span ref={ref}>{count}+</span>;
};

const ImpactPage = () => {
  return (
    <Section>
      <Heading><span>What We’ve Achieved</span></Heading>
      <Wrapper>
        <StatBox>
          <h2><Counter to={30} /></h2>
          <p>Creators</p>
        </StatBox>
        <StatBox>
          <h2><Counter to={500} /></h2>
          <p>Videos made</p>
        </StatBox>
        <StatBox>
          <h2><Counter to={50} /></h2>
          <p>MILLION VIEWS</p>
        </StatBox>
      </Wrapper>
    </Section>
  );
};

export default ImpactPage;
