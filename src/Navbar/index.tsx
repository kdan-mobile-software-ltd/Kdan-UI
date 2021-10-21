import React, { useState, useEffect } from 'react';
import MenuBtn from '../component/MenuBtn';

import { Container, Wrapper, Menu, MenuWrapper, MenuBtnWrapper } from './styled';

export type NavbarProps = {
  isFixed?: boolean;
  brand?: React.ReactNode;
  children?: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ isFixed = false, brand, children }: NavbarProps) => {
  const [isCollapse, setCollapse] = useState(true);
  const [positionY, setPosition] = useState(0);

  const handleScroll = () => {
    setPosition(window.scrollY);
  };

  const handleClick = () => {
    setCollapse((current) => !current);
  };

  useEffect(() => {
    if (isFixed) {
      document.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (isFixed) {
        document.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCollapse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isCollapse]);

  return (
    <Container isFixed={positionY >= 70}>
      <Wrapper>
        {brand}
        <Menu isCollapse={isCollapse} isFixed={positionY >= 70}>
          <MenuWrapper>{children}</MenuWrapper>
        </Menu>
        {children && (
          <MenuBtnWrapper>
            <MenuBtn onClick={handleClick} isActive={!isCollapse} />
          </MenuBtnWrapper>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
