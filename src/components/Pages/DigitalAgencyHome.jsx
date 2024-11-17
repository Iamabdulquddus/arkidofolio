import React, { useEffect, useState } from 'react';
import Hero4 from '../Hero/Hero4';
import { pageTitle } from '../../helper';
import Div from '../Div';
import FunFact2 from '../FunFact/FunFact2';
import Spacing from '../Spacing';
import SectionHeading from '../SectionHeading';
import MovingText2 from '../MovingText/MovingText2';
import VideoModal from '../VideoModal';
import Portfolio from '../Portfolio';
import { Icon } from '@iconify/react';
import TimelineSlider from '../Slider/TimelineSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Cta from '../Cta';
import LogoList from '../LogoList';
import Accordion from '../Accordion'
import PostList from '../Post/PostList';
const heroSocialLinks = [
  {
    name: 'LinkedIn',
    links: '/',
  },
  {
    name: 'Instagram',
    links: '/',
  },
];
const funfaceData = [
  {
    title: 'Global Happy Clients',
    factNumber: '250',
  },
  {
    title: 'Project Completed',
    factNumber: '400',
  },
  {
    title: 'Team Members',
    factNumber: '10',
  },
  {
    title: 'Digital products',
    factNumber: '15',
  },
];
const serviceData1 = [
  {
    title: 'UI/UX Design',
    href: '/service/ui-ux-design',
  },
  {
    title: 'Graphic Design',
    href: '/service/graphic-design',
  },
  {
    title: 'PowerPoint Presentation Design',
    href: '/service/powerPoint-design',
  },
];
const serviceData2 = [
  {
    title: 'Website Development',
    href: '/service/web-development',
  },
  {
    title: 'Mobile App Development',
    href: '/service/mobile-development',
  },
  {
    title: 'Digital Marketing',
    href: '/service/digital-marketing',
  },
];
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_11.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_12.jpeg',
    category: 'logo_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_13.jpeg',
    category: 'web_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_14.jpeg',
    category: 'mobile_apps',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_15.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_16.jpeg',
    category: 'web_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_11.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_12.jpeg',
    category: 'logo_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_13.jpeg',
    category: 'web_design',
  },
];

export default function DigitalAgencyHome() {
  const [itemShow, setItemShow] = useState(6);
  pageTitle('Digital Agency');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero4
        title="We Are <span>A</span>rkidu <br />Digital Agency"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+923364223371"
        email="info@arkidu.com"
      />
      {/* End Hero Section */}

      {/* Start Funfact Section */}
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-type1"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* End Funfact Section */}

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="What we provide"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="65" md="45" />
      </Div>
      {/* End Services Section */}

      {/* Start Moving Text Section */}
      <MovingText2 data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />
      {/* End Moving Text Section */}

      {/* Start About Section */}
      {/* <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Uk’s best digital agency ever"
                subtitle="Why Choose Us"
                btnText="Learn More"
                btnLink="/about"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <Div className="cs-half_screen">
                <VideoModal
                  videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
                  bgUrl="/images/video_bg.jpeg"
                  variant="cs-style1 cs-size1"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End About Section */}

      {/* Start Projects Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Portfolio to explore"
          subtitle="Latest Projects"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 0 || index === 3 || index === 4
                  ? 'col-lg-8'
                  : 'col-lg-4'
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      {/* End Projects Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="140" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-4">
            <SectionHeading
              title="We get multiple awards"
              subtitle="Our Awards"
              variant="cs-style1"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <Div className="col-xl-7 offset-xl-1">
            <TimelineSlider />
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" /> */}
      {/* End Awards Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      {/* <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <PostList />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" /> */}
      {/* End Blog Section */}

      {/* Start LogoList Section */}
      
      <Spacing lg="100" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our reputed partner"
          subtitle="Top Clients"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
    
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
