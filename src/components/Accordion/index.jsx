import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'What services does ARKIDU offer?',
    answer:
      'ARKIDU offers graphic design, app development (Flutter, FlutterFlow, React.js), software development, web development (WordPress, Elementor Pro), digital marketing, video creation, and PowerPoint presentation design.',
  },
  {
    question: 'How does ARKIDU ensure the quality of its projects?',
    answer:
      'We follow a rigorous process with detailed planning, regular reviews, and thorough testing. Our team uses the latest tools and works closely with clients to meet and exceed expectations.',
  },
  {
    question: 'Can ARKIDU help with digital marketing strategies?',
    answer:
      'Yes, we offer SEO, social media marketing, PPC advertising, email marketing, and content creation to boost your online presence and drive results.',
  },
  {
    question: 'What is the typical timeline for a web development project?',
    answer:
      'A standard web development project takes 2 to 8 weeks, depending on complexity. We provide a detailed timeline during the initial consultation.',
  },
  {
    question: 'How can I get started with ARKADU for my project?',
    answer:
      'Contact us through our website to schedule an initial consultation. We’ll discuss your requirements and create a customized plan to get started.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
