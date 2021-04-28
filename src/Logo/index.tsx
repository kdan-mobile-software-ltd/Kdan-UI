import React from 'react';

import { Wrapper } from './styled';
import { ReactComponent as Lockup } from '../assets/images/kdan-logo.svg';
import { ReactComponent as LogoMark } from '../assets/images/kdan-logo-01.svg';
import { ReactComponent as Word } from '../assets/images/kdan-logo-02.svg';
import { ReactComponent as KCLockup } from '../assets/images/kdan-cloud-logo.svg';
import { ReactComponent as KCLogo } from '../assets/images/kdan-cloud-logo-01.svg';
import pdfreader from '../assets/images/logo-pdfreader.png';
import noteledge from '../assets/images/logo-noteledge.png';
import animation from '../assets/images/logo-animation.png';
import wo from '../assets/images/logo-wo.png';
import markup from '../assets/images/logo-markup.png';
import sc from '../assets/images/logo-scanner.png';
import kdancloud from '../assets/images/logo-kdancloud.png';
import dottedsign from '../assets/images/logo-dottedsign.png';

export type LogoProps = {
  variant:
    | 'logomark'
    | 'wordmark'
    | 'combine'
    | 'kc-logomark'
    | 'kc-combine'
    | 'pdf-reader'
    | 'noteledge'
    | 'animation-desk'
    | 'writeon-video'
    | 'markup'
    | 'pocket-scanner'
    | 'kdan-cloud'
    | 'dottedsign';
  href?: string;
  width?: string;
  height?: string;
};

const Logo: React.FC<LogoProps> = ({ variant = 'combine', href, width, height }: LogoProps) => {
  const setComponent = () => {
    if (variant === 'logomark') {
      return <LogoMark />;
    } else if (variant === 'wordmark') {
      return <Word />;
    } else if (variant === 'combine') {
      return <Lockup />;
    } else if (variant === 'kc-logomark') {
      return <KCLogo />;
    } else if (variant === 'kc-combine') {
      return <KCLockup />;
    } else if (variant === 'pdf-reader') {
      return <img src={pdfreader} alt='pdf-reader-logo' />;
    } else if (variant === 'noteledge') {
      return <img src={noteledge} alt='noteledge-logo' />;
    } else if (variant === 'animation-desk') {
      return <img src={animation} alt='animation-desk-logo' />;
    } else if (variant === 'writeon-video') {
      return <img src={wo} alt='writeon-video-logo' />;
    } else if (variant === 'markup') {
      return <img src={markup} alt='markup-logo' />;
    } else if (variant === 'pocket-scanner') {
      return <img src={sc} alt='pocket-scanner-logo' />;
    } else if (variant === 'kdan-cloud') {
      return <img src={kdancloud} alt='kdan-cloud-logo' />;
    } else if (variant === 'dottedsign') {
      return <img src={dottedsign} alt='dottedsign-logo' />;
    }
  };

  const component = href ? 'a' : 'div';
  const props = {
    href,
    style: { width, height },
  };

  return (
    <Wrapper as={component} {...props}>
      {setComponent()}
    </Wrapper>
  );
};

export default Logo;
