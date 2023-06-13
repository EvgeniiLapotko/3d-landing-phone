import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--dark);
  color: var(--white);
`;

const moveUp = keyframes`
100%{
    transform: translateY(0);
}
`;

const Text = styled.p<any>`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: content-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .author {
    width: 100%;
    text-align: end;
    background-image: linear-gradient(-180deg, var(--gradient));
    font-family: var(--fontR);
  }

  @media screen and (max-width: 70em) {
    width: 70%;
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontmd);
    height: var(--fontsm);
  }
  @media screen and (max-width: 40em) {
    width: 90%;
  }
  @media screen and (max-width: 30em) {
    font-size: var(--fontxs);
  }
`;

export const Quote = () => {
  gsap.registerPlugin(ScrollTrigger);
  const section = useRef(null);

  useLayoutEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: section.current,
      start: 'top top',
      pin: true,
      pinSpacing: false,
    });
    return () => {
      if (trigger) trigger.kill();
    };
  }, []);
  return (
    <Section ref={section}>
      <TextContainer>
        <Text delay='0s'>
          <span>&#8220; Вы не можете соединить точки, глядя вперед</span>
        </Text>
        <Text delay='0.4s'>
          <span>&nbsp;&nbsp;&nbsp;вы можете соединить их только оглядываясь назад.</span>
        </Text>
        <Text delay='0.8s'>
          <span>&nbsp;&nbsp;&nbsp;поэтому вы должны верить, что точки</span>
        </Text>
        <Text delay='1.2s'>
          <span>&nbsp;&nbsp;&nbsp;каким-то образом свяжутся в вашем будущем. &#8221;</span>
        </Text>
        <Text delay='1.6s'>
          <span className='author'>- Стив Джобс</span>
        </Text>
      </TextContainer>
    </Section>
  );
};