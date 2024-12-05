import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Button from '../Button';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

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

export default function PortfolioDetailsPage() {
  const { portfolioDetailsId } = useParams(); // Get the ID from the URL
  const portfolioItem = portfolioData.find(
    (item) => item.id === parseInt(portfolioDetailsId) // Match by ID
  );

  pageTitle('Portfolio Details');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!portfolioItem) {
    return <p>Portfolio item not found!</p>; // Handle invalid ID
  }

  return (
    <>
      <PageHeading
        title={portfolioItem.title}
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText={portfolioItem.title}
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <img
          src={portfolioItem.src}
          alt={portfolioItem.title}
          className="cs-radius_15 w-100"
        />
        <Spacing lg="90" md="40" />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title={portfolioItem.title}
              subtitle="Creative"
            >
              <Spacing lg="40" md="20" />
              <p>{portfolioItem.details.description}</p>
            </SectionHeading>
          </Div>
          
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
