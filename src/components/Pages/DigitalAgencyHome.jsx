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
    id: 1,
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_4.jpeg',
    category: 'ui_ux_design',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
     
    },
  },
  {
    id: 2,
    title: 'Vound',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/9.png',
    category: 'presentation_design',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
      
    },
  },
  {
    id: 3,
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_6.jpeg',
    category: 'web_dev',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
      
    },
  },
  {
    id: 4,
    title: 'Wibulu',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/wibulu.png',
    category: 'mobile_apps',
    details: {
      description: "Are you passionate about stories? Do you love getting lost in worlds created by words? We're excited to introduce you to our new app in early access, where you can discover, read and share short stories in a dynamic and accessible way. Join us in this initial stage and be part of the evolution of our platform.",
     
    },
  },

  {
    id: 5,
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_8.jpeg',
    category: 'ui_ux_design',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
     
    },
  },
  {
    id: 6,
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_9.jpeg',
    category: 'web_dev',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
      
    },
  },
  {
    id: 7,
    title: 'Barista Portfolio',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/1.png',
    category: 'presentation_design',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
      
    },
  },
  {
    id: 8,
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_4.jpeg',
    category: 'ui_ux_design',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
      
    },
  },
  {
    id: 9,
    title: 'DFW Hair Care',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/4.png',
    category: 'presentation_design',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
      
    },
  },
  {
    id: 10,
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_6.jpeg',
    category: 'web_dev',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
      
    },
  },
  {
    id: 11,
    title: 'Social Media Posts',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/21.png',
    category: 'graphic_design',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
      
    },
  },
  {
    id: 12,
    title: 'Logo Desing',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/27.png',
    category: 'graphic_design',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
      
    },
  },
  {
    id: 13,
    title: 'Youtube Thumbnail Desing',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/19.png',
    category: 'graphic_design',
    details: {
      description: 'A beautiful colorful artwork for a modern UI project.',
      
    },
  },
  {
    id: 14,
    title: 'Buzzwerl',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/buzzerl.png',
    category: 'mobile_apps',
    details: {
      description: "Buzzwerl is the ultimate event creation and booking platform that simplifies your social and professional gatherings. With Buzzwerl, you can transform any occasion into an unforgettable experience.\nWhether you're looking to host a small intimate gathering, a large-scale corporate conference, or anything in between, Buzzwerl offers a comprehensive set of tools to help you plan, manage, and execute your event seamlessly. Our easy-to-use interface allows you to create an event, send out personalized invitations, manage RSVPs, and even book venues, caterers, and event planners in a few simple steps.\nFor event-goers, Buzzwerl provides a curated list of exciting events happening around you. Discover new experiences, book tickets instantly, and stay updated with real-time notifications. With our user-friendly calendar integration, you'll never miss an event again.",
      
    },
  },
  {
    id: 15,
    title: 'Tik Commerces',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/tiktok.png',
    category: 'mobile_apps',
    details: {
      description: "This innovative mobile application combines the excitement of short-form video content with the convenience of integrated e-commerce. Users can create, share, and interact with viral videos showcasing products, while seamlessly purchasing items directly within the app. With features like product tagging, personalized recommendations, live shopping events, and social sharing, the platform offers a unique experience for both shoppers and content creators. By merging social engagement with a streamlined shopping experience, this app aims to revolutionize the way people discover and buy products online.",
    },
  },
  {
    id: 16,
    title: 'OrderMate',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/tab.png',
    category: 'mobile_apps',
    details: {
      description: "This mobile application is a comprehensive Point of Sale (POS) solution designed specifically for restaurants. It allows customers to place orders, customize their meals by adding or removing modifiers, and split the payment into multiple amounts for easier transactions. The app also features integrated cash and card payment options, providing flexibility for various payment methods. For restaurant staff, the app includes a Kitchen Display System (KDS) where all orders are displayed in real time, ensuring smooth communication between the front and back of the house. This efficient, user-friendly solution streamlines the ordering and payment process, enhancing both customer experience and operational efficiency.",
    },
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
