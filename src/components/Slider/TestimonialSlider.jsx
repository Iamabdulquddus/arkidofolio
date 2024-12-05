import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
const testimonialData = [
  {
    testimonialThumb: '/images/clients_logos/nestle.png',
    testimonialText:
      'Arkidu has been a valued partner in helping us achieve our strategic objectives. Their team brings a wealth of expertise and creative solutions, consistently delivering high-quality results that meet our business needs. From strategic presentations to comprehensive proposals, their approach is always professional and tailored to our goals. We appreciate their dedication to excellence and look forward to continuing our collaboration.',
    avatarName: 'Nestle',
    avatarDesignation: 'Nestlé',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      'The presentation effectively addressed our programme governance challenges with clear visuals and actionable solutions. The Smartsheet dashboard mockups and meeting frameworks were particularly valuable. Your ability to simplify complex concepts and deliver a polished, engaging presentation exceeded our expectations. We look forward to future collaborations.',
    avatarName: 'Sysco',
    avatarDesignation: 'Sysco Leadership Team',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_3.jpeg',
    testimonialText:
      'ARKIDU has been an exceptional partner to WWF, consistently delivering high-quality work that supports our global conservation efforts. Their team\'s creativity, professionalism, and understanding of our mission have been invaluable in helping us effectively communicate key messages. Whether through design or strategic insights, ARKIDU has proven to be a reliable and impactful collaborator.',
    avatarName: 'Ahon Monsery',
    avatarDesignation: 'World Wildlife Fund',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'Arkidu has been an outstanding partner, delivering innovative solutions and actionable insights that align with our strategic goals. Their professionalism, expertise, and commitment to excellence have greatly supported our projects and enhanced our outcomes.',
      avatarName: ' Zebra Technologies',
      avatarDesignation: ' Zebra Technologies Team',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_3.jpeg',
    testimonialText:
      'Working with Arkidu since 2023 has been a fantastic experience. Their team consistently delivers exceptional work, from designing engaging training session presentations to offering valuable insights on improving our training programs. Their professionalism, attention to detail, and ability to tailor solutions to our needs have made them a trusted partner. We highly recommend their services to any organization looking to elevate their training and development efforts.',
      avatarName: ' Next Level Training Solutions',
    avatarDesignation: ' Next Level Training Solutions Team',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_3.jpeg',
    testimonialText:
      'Partnering with Arkidu has been a highly positive experience. Their team consistently delivers creative, high-quality solutions that align with our goals. Professional, efficient, and reliable, they’ve been instrumental in helping us strengthen our brand. We highly recommend their services.',
      avatarName: 'GTCO',
    avatarDesignation: 'GTCO Leadership Team',
    ratings: '5',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        {/* <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div> */}
        <Div className="container">
          <Div>
            {/* <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div> */}
            <Div >
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
