import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import portfolioData from './portfolioData.jsx';

// Tilt Shine Card Component
const TiltShineCard = ({ title, subtitle, src, href, hasDetails, onClick }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    // Calculate tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  const handleClick = () => {
    if (hasDetails && onClick) {
      onClick();
    }
  };

  return (
    <div
      ref={cardRef}
      className="portfolio-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: 'auto',
        minHeight: '340px',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: hasDetails ? 'pointer' : 'default',
        transition: 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
        '--mouse-x': '0px',
        '--mouse-y': '0px',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: isHovered ? 'brightness(0.8)' : 'brightness(0.9)',
          transition: 'filter 0.3s ease',
        }}
      />

      {/* Shine Effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isHovered
            ? `radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.3) 0%, transparent 50%)`
            : 'transparent',
          transition: 'background 0.3s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Gradient Overlay */}
      {/* <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)',
        }}
      /> */}

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px',
          color: 'white',
          transform: 'translateZ(50px)',
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '8px',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          {title}
        </h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.875rem',
            opacity: 0.9,
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          <span>{subtitle}</span>

        </div>
      </div>

      {/* Border Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: isHovered
            ? '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
            : '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.3s ease',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

// const baseURL = 'https://raw.githubusercontent.com/Iamabdulquddus/arkidu-images/main/';

// // Portfolio Data
// const portfolioData = [
//   {
//     title: 'Syeen ',
//     src: baseURL + 'WEBSITE%20PORTFOLIO/1.png',
//     category: 'website_development',
//     // details: {
//     //   description: 'Beautifully designed recipe collection with stunning visuals.'
//     // },
//   },
//   {
//     title: 'Syeen ',
//     src: baseURL + 'WEBSITE%20PORTFOLIO/2.png',
//     category: 'website_development',
    
//   },
//   {
//     title: 'Syeen ',
//     src: baseURL + 'WEBSITE%20PORTFOLIO/3.png',
//     category: 'website_development',
    
//   },
//   {
//     id: 4,
//     title: 'Syeen ',

//     src: baseURL + 'WEBSITE%20PORTFOLIO/4.png',
//     category: 'website_development',
    
//   },
//   {
//     title: 'Syeen ',
//     src: baseURL + 'WEBSITE%20PORTFOLIO/5.png',
//     category: 'website_development',
    
//   },
//    {
//     title: 'Syeen ',
//     src: baseURL + 'WEBSITE%20PORTFOLIO/6.jpg',
//     category: 'website_development',
    
//   },
//    {
//     title: 'Syeen ',
//     src: baseURL + 'WEBSITE%20PORTFOLIO/7.jpg',
//     category: 'website_development',
    
//   },
//    {
//     title: 'Syeen ',
//     src: baseURL + 'WEBSITE%20PORTFOLIO/8.jpg',
//     category: 'website_development',
    
//   },
//    {
//     title: 'Syeen ',
//     src: baseURL + 'WEBSITE%20PORTFOLIO/9.jpg',
//     category: 'website_development',
    
//   },
//    {
//     title: 'Syeen ',
//     src: baseURL + 'WEBSITE%20PORTFOLIO/10.jpg',
//     category: 'website_development',
    
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/1.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/2.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/3.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/4.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/5.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/6.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/7.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/8.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/9.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/10.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/12.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Ebook',
//     src: baseURL + 'E-Book%20PORTFOLIO%20/11.png',
//     category: 'ebook_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/1.png',
//     category: 'flyers_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/2.png',
//     category: 'flyers_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/3.png',
//     category: 'flyers_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/4.png',
//     category: 'flyers_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/5.png',
//     category: 'flyers_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/6.png',
//     category: 'flyers_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/7.png',
//     category: 'flyers_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/8.png',
//     category: 'flyers_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/9.png',
//     category: 'flyers_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/10.png',
//     category: 'flyers_designs',
//   },
//    {
//     title: 'Flyer',
//     src: baseURL + 'FLYERS%20PORTFOLIO/11.png',
//     category: 'flyers_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/1.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/2.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/3.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/4.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/5.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/6.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/7.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/8.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/9.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/10.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/11.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/12.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/13.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/14.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/15.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/16.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/17.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/18.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/19.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/20.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/21.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/22.png',
//     category: 'presentation_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'YOUTUBE%20THUMBNAILS/1.png',
//     category: 'youtube_thumbnails',
//   },
//    {
//     title: '',
//     src: baseURL + 'YOUTUBE%20THUMBNAILS/2.png',
//     category: 'youtube_thumbnails',
//   },
//    {
//     title: '',
//     src: baseURL + 'YOUTUBE%20THUMBNAILS/3.png',
//     category: 'youtube_thumbnails',
//   },
//    {
//     title: '',
//     src: baseURL + 'YOUTUBE%20THUMBNAILS/4.png',
//     category: 'youtube_thumbnails',
//   },
//    {
//     title: '',
//     src: baseURL + 'YOUTUBE%20THUMBNAILS/5.png',
//     category: 'youtube_thumbnails',
//   },
//    {
//     title: '',
//     src: baseURL + 'YOUTUBE%20THUMBNAILS/6.png',
//     category: 'youtube_thumbnails',
//   },
//   {
//     title: '',
//     src: baseURL + 'mobile/1.jpg',
//     category: 'mobile_app_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'mobile/2.jpg',
//     category: 'mobile_app_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'mobile/3.jpg',
//     category: 'mobile_app_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'mobile/4.jpg',
//     category: 'mobile_app_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'mobile/5.jpg',
//     category: 'mobile_app_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'mobile/6.jpg',
//     category: 'mobile_app_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'mobile/7.jpg',
//     category: 'mobile_app_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'mobile/8.jpg',
//     category: 'mobile_app_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'mobile/9.jpg',
//     category: 'mobile_app_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/1.jpg',
//     category: 'logo_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/2.jpg',
//     category: 'logo_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/3.jpg',
//     category: 'logo_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/4.jpg',
//     category: 'logo_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/5.jpg',
//     category: 'logo_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/6.jpg',
//     category: 'logo_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/7.jpg',
//     category: 'logo_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/8.jpg',
//     category: 'logo_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/9.jpg',
//     category: 'logo_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/10.png',
//     category: 'logo_designs',
//   },
//   {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/11.png',
//     category: 'logo_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/12.png',
//     category: 'logo_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/13.png',
//     category: 'logo_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/14.jpg',
//     category: 'logo_designs',
//   },
//    {
//     title: '',
//     src: baseURL + 'LOGO%20PORTFOLIO/15.png',
//     category: 'logo_designs',
//   },

// ];

const categoryMenu = [
  { title: 'Website Development', category: 'website_development' },
  { title: 'Mobile App Designs', category: 'mobile_app_designs' },
  { title: 'Presentation Designs', category: 'presentation_designs' },
  { title: 'E-Book Designs', category: 'ebook_designs' },
  { title: 'Flyers Designs', category: 'flyers_designs' },
  { title: 'Logo Designs', category: 'logo_designs' },
  // { title: 'Business Card Designs', category: 'business_card_designs' },
  { title: 'Youtube Thumbnails', category: 'youtube_thumbnails' },
  // { title: 'UIUX Design', category: 'uiux_design' },
];

// Main Portfolio Component
export default function TiltShinePortfolio() {
  const [active, setActive] = useState('website_development');
  const [itemShow, setItemShow] = useState(9);

  const handleCardClick = (item) => {
    if (item.details) {
      // Navigate to details page
      window.location.href = `/portfolio/${item.id}`;
    }
  };

  const filteredItems = portfolioData.filter(item => item.category === active);

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '60px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'white',
          marginBottom: '16px',

        }}>
          Our Portfolio
        </h2>
        {/* <p style={{ color: '#888', fontSize: '1.1rem' }}>Some recent work</p> */}
      </div>

      {/* Category Filter */}
       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="filter-buttons" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          
          margin: '0 auto',
        }}>
          {categoryMenu.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item.category)}
              className={`filter-btn ${active === item.category ? 'active' : ''}`}
              style={{
                padding: '0',
                border: 'none',
                backgroundColor: 'transparent',
                color: active === item.category ? '#ff4444' : '#888',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: active === item.category ? '600' : '500',
                transition: 'all 0.3s ease',
                position: 'relative',
                whiteSpace: 'nowrap',
                borderBottom: active === item.category ? '2px solid #ff4444' : 'none',
                paddingBottom: '8px',
              }}
              onMouseEnter={(e) => {
                if (active !== item.category) {
                  e.target.style.color = '#ccc';
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.category) {
                  e.target.style.color = '#888';
                }
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div
        className="portfolio-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '60px',
        }}
      >
        {filteredItems.slice(0, itemShow).map((item, index) => (
          <TiltShineCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            src={item.src}
            href={`/portfolio/${item.id}`}
            hasDetails={!!item.details}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>

     {/* Add this CSS to your existing style block */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .portfolio-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 20px !important;
            }
            .filter-buttons {
              gap: 20px !important;
            }
            .filter-btn {
              font-size: 0.85rem !important;
            }
          }
          @media (max-width: 600px) {
            .portfolio-grid {
              grid-template-columns: 1fr !important;
              gap: 15px !important;
            }
            .filter-buttons {
              gap: 15px !important;
            }
            .filter-btn {
              font-size: 0.8rem !important;
            }
          }
          @media (max-width: 480px) {
            .filter-buttons {
              gap: 12px !important;
            }
            .filter-btn {
              font-size: 0.75rem !important;
            }
          }
        `
      }} />

      {/* Load More Button */}
      {filteredItems.length > itemShow && (
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setItemShow(itemShow + 3)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              backgroundColor: 'transparent',
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.target.style.borderColor = 'rgba(255,255,255,0.4)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(0px)';
            }}
          >
            <span>Load More</span>
            <Icon icon="bi:arrow-right" />
          </button>
        </div>
      )}
    </div>
  );
}