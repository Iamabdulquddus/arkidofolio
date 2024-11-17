import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'

import Button from '../Button'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'


const serviceData = {
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "We provide cutting-edge UI/UX designs that deliver exceptional user experiences.",
    process: [
      { title: "Sketching", description: "Create initial sketches to define the design structure." },
      { title: "Wireframing", description: "Build wireframes to represent the skeleton of the design." },
      { title: "Prototyping", description: "Develop prototypes to test functionality and flow." }
    ],
    image: "/images/service_img_1.jpeg",
    services: [
      "Web page design",
      "eCommerce design",
      "Landing page",
      "Email template",
      "Application design",
      "Illustration"
    ]
  },
  "web-development": {
    title: "Website Development",
    description: "Full-stack website development services for scalable and responsive websites.",
    process: [
      { title: "Requirement Analysis", description: "Understand and gather requirements for development." },
      { title: "Development", description: "Code the website with clean and efficient code practices." },
      { title: "Deployment", description: "Deploy the website to a live environment after rigorous testing." }
    ],
    image: "/images/web-development.jpeg",
    services: [
      "Frontend development",
      "Backend development",
      "Full-stack solutions",
      "Web app development",
      "CMS development"
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Boost your online presence and grow your business with our marketing strategies.",
    process: [
      { title: "Market Research", description: "Analyze the target audience and market trends." },
      { title: "Campaign Planning", description: "Develop customized marketing strategies." },
      { title: "Performance Analysis", description: "Measure campaign success and optimize for ROI." }
    ],
    image: "/images/digital-marketing.jpeg",
    services: [
      "SEO optimization",
      "Content marketing",
      "Social media management",
      "Email marketing",
      "Pay-per-click advertising"
    ]
  },
  "mobile-development": {
    title: "Mobile App Development",
    description: "We provide cutting-edge UI/UX designs that deliver exceptional user experiences.",
    process: [
      { title: "Sketching", description: "Create initial sketches to define the design structure." },
      { title: "Wireframing", description: "Build wireframes to represent the skeleton of the design." },
      { title: "Prototyping", description: "Develop prototypes to test functionality and flow." }
    ],
    image: "/images/service_img_1.jpeg",
    services: [
      "Web page design",
      "eCommerce design",
      "Landing page",
      "Email template",
      "Application design",
      "Illustration"
    ]
  },
  "powerPoint-design": {
    title: "PowerPoint Presentation Designing",
    description: "Full-stack website development services for scalable and responsive websites.",
    process: [
      { title: "Requirement Analysis", description: "Understand and gather requirements for development." },
      { title: "Development", description: "Code the website with clean and efficient code practices." },
      { title: "Deployment", description: "Deploy the website to a live environment after rigorous testing." }
    ],
    image: "/images/web-development.jpeg",
    services: [
      "Frontend development",
      "Backend development",
      "Full-stack solutions",
      "Web app development",
      "CMS development"
    ]
  },
  "graphic-design": {
    title: "Graphic Designing",
    description: "Boost your online presence and grow your business with our marketing strategies.",
    process: [
      { title: "Market Research", description: "Analyze the target audience and market trends." },
      { title: "Campaign Planning", description: "Develop customized marketing strategies." },
      { title: "Performance Analysis", description: "Measure campaign success and optimize for ROI." }
    ],
    image: "/images/digital-marketing.jpeg",
    services: [
      "SEO optimization",
      "Content marketing",
      "Social media management",
      "Email marketing",
      "Pay-per-click advertising"
    ]
  },
  
};


export default function ServiceDetailsPage() {
  pageTitle('Service Details');
  const { serviceDetailsId } = useParams();
  const service = serviceData[serviceDetailsId];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  if (!service) {
    return <h1>Service not found</h1>;
  }
  return (
    <>
      <PageHeading 
        title={service.title}
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={serviceDetailsId}
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
      <SectionHeading 
          title="Design working process" 
          subtitle={service.title} 
          variant="cs-style1 text-center"
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          {service.process.map((step, index) => (
            <Div className="col-lg-4" key={index}>
              <IconBox
                icon={`/images/icons/service_icon_${index + 1}.svg`}
                title={step.title}
                subtitle={step.description}
              />
              <Spacing lg="30" md="30" />
            </Div>
          ))}
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src={service.image} alt={service.title} className="cs-radius_15 w-100" />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">{service.description}</h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              {service.services.map((subService, index) => (
                <Div className="col-lg-6" key={index}>
                  <Button btnLink={`/service/${serviceDetailsId}`} btnText={subService} variant="cs-type2" />
                  <Spacing lg="20" md="10" />
                </Div>
              ))}
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <TestimonialSlider />
      <Spacing lg='145' md='80'/>
      
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
