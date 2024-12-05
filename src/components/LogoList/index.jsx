import React from 'react';
import Div from '../Div';
import './logolist.scss';
const partnerLogos = [
  {
    src: '/images/clients_logos/Nestle-Logo-Background-PNG.png',
    alt: 'Partner',
  },
  {
    src: '/images/clients_logos/Next Level Solutions PNG LOGO (1).png',
    alt: 'Partner',
  },
  {
    src: '/images/clients_logos/Sysco-White-Logo-NO-TAG.png',
    alt: 'Partner',
  },
  {
    src: '/images/clients_logos/WWF-WHITE PNG LOGO.png',
    alt: 'Partner',
  },
  {
    src: '/images/clients_logos/ZBRA_BIG.D-33801285.png',
    alt: 'Partner',
  },
  {
    src: '/images/clients_logos/5elabs.png',
    alt: 'Partner',
  },

];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} width={150} />
        </div>
      ))}
    </Div>
  );
}
