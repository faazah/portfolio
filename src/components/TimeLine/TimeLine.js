import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id = "about">
      <br /><br />
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      Hello my name is Faizan, I'm an aspiring Full Stack Web Developer specializing in building exceptional digital experiences. <br />
      I am a technology enthusiast who is always eager to learn new things, and looking for an organization that will help me enhance my skill set, knowledge and to work for the best interest of the organization. I am an ardent learner and possess good communication skills with a passion to be a part of a dynamic team that works towards the achievement of organization goal.
      </SectionText>
      <CarouselContainer ref = {carouselRef} onScroll = {handleScroll}>
        <>
          {TimeLineData.map((item, index) => {
            <CarouselMobileScrollNode key = {index} final = {index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index = {index}
                id={`carousel__item-${index}`}
                active = {activeItem}
                onClick = {(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          })}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key = {index}
            index = {index}
            active = {activeItem}
            onClick = {(e) => handleClick(e, index)}
          >
            <CarouselButtonDot active = {activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
