import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

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
        aspectRatio: '1/1',
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
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)',
        }}
      />

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
          {hasDetails && (
            <Icon
              icon="bi:arrow-right"
              style={{
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'translateX(4px)' : 'translateX(0px)',
              }}
            />
          )}
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

const baseURL = 'https://raw.githubusercontent.com/Iamabdulquddus/arkidu-images/main/';

// Portfolio Data
const portfolioData = [
  {
    id: 1,
    title: 'Syeen ',
    subtitle: 'See Details',
    src: baseURL + 'WEBSITE%20PORTFOLIO/1.png',
    category: 'website_development',
    details: {
      description: 'Beautifully designed recipe collection with stunning visuals.'
    },
  },
  {
    id: 2,
    title: 'Syeen ',
    subtitle: 'See Details',
    src: baseURL + 'WEBSITE%20PORTFOLIO/2.png',
    category: 'website_development',
    details: {
      description: 'Beautifully designed recipe collection with stunning visuals.'
    },
  },
  {
    id: 3,
    title: 'Syeen ',
    subtitle: 'See Details',
    src: baseURL + 'WEBSITE%20PORTFOLIO/3.png',
    category: 'website_development',
    details: {
      description: 'Beautifully designed recipe collection with stunning visuals.'
    },
  },
  {
    id: 4,
    title: 'Syeen ',
    subtitle: 'See Details',
    src: baseURL + 'WEBSITE%20PORTFOLIO/4.png',
    category: 'website_development',
    details: {
      description: 'Beautifully designed recipe collection with stunning visuals.'
    },
  },
  {
    id: 5,
    title: 'Syeen ',
    subtitle: 'See Details',
    src: baseURL + 'WEBSITE%20PORTFOLIO/5.png',
    category: 'website_development',
    details: {
      description: 'Beautifully designed recipe collection with stunning visuals.'
    },
  },
  {
    id: 6,
    title: '',
    subtitle: '',
    src: baseURL + 'POWERPOINT%20PRESENTATION%20PORTFOLIO/1.png',
    category: 'presentation_designs',
  },
];

const categoryMenu = [
  { title: 'Website Development', category: 'website_development' },
  { title: 'Mobile App Designs', category: 'mobile_app_designs' },
  { title: 'Presentation Designs', category: 'presentation_designs' },
  { title: 'E-Book Designs', category: 'ebook_designs' },
  { title: 'Flyers Designs', category: 'flyers_designs' },
  { title: 'Logo Designs', category: 'logo_designs' },
  { title: 'Business Card Designs', category: 'business_card_designs' },
  { title: 'Youtube Thumbnails', category: 'youtube_thumbnails' },
  { title: 'UIUX Design', category: 'uiux_design' },
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
      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '60px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'white',
          marginBottom: '16px',
    
        }}>
          Our Portfolio
        </h2>
        <p style={{ color: '#888', fontSize: '1.1rem' }}>Some recent work</p>
      </div>

      {/* Category Filter */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          gap: '2px',
          padding: '8px',
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '50px',
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          {categoryMenu.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item.category)}
              style={{
                padding: '12px 24px',
                borderRadius: '25px',
                border: 'none',
                
                color: active === item.category ? 'white' : '#888',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
            backgroundColor: active === item.category
  ? 'linear-gradient(135deg, #ff3b3b 0%, #ff6b6b 100%)'
  : 'transparent',
background: active === item.category
  ? 'linear-gradient(135deg, #ff3b3b 0%, #ff6b6b 100%)'
  : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (active !== item.category) {
                  e.target.style.color = 'white';
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.category) {
                  e.target.style.color = '#888';
                  e.target.style.backgroundColor = 'transparent';
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
          maxWidth: '1200px',
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

      {/* CSS for responsive design */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .portfolio-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 20px !important;
            }
          }
          @media (max-width: 480px) {
            .portfolio-grid {
              grid-template-columns: 1fr !important;
              gap: 15px !important;
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