import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';
import { Portal } from 'react-portal';
import { Container } from './styled';

import './transition.css';

const lockScroll = (state) => {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.style.overflow = state ? 'hidden' : '';
};

const Modal = ({
  open,
  closeOnClick,
  closeOnEsc,
  defaultPortalStyles,
  onAfterOpen,
  onClose,
  onAfterClose,
  children,
  ...otherProps
}) => {
  const defaultPortal = useRef(null);
  const [alreadyOpen, setAlreadyOpen] = useState(false);

  useEffect(() => {
    if (open) {
      lockScroll(true);
      setAlreadyOpen(true);
      onAfterOpen();
    } else {
      lockScroll(false);
    }

    if (!open && alreadyOpen) {
      onAfterClose();
    }
  }, [open, alreadyOpen]);

  if (defaultPortal && defaultPortal.current && !!defaultPortalStyles) {
    Object.keys(defaultPortalStyles).forEach((prop) => {
      defaultPortal.current.defaultNode.style[prop] = defaultPortalStyles[prop];
    });
  }

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape' && closeOnEsc) {
        onClose();
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('keydown', onEsc);
    };
  }, [closeOnEsc]);

  const handleClick = (e) => {
    if (closeOnClick && e.target === e.currentTarget) {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <Portal ref={defaultPortal}>
      <CSSTransition in={open} timeout={200} classNames='modal' unmountOnExit>
        <Container onClick={handleClick} {...otherProps}>
          {children}
        </Container>
      </CSSTransition>
    </Portal>
  );
};

Modal.defaultProps = {
  closeOnClick: true,
  closeOnEsc: true,
  defaultPortalStyles: { position: 'relative', zIndex: 999 },
  onClose: () => null,
  onAfterOpen: () => null,
  onAfterClose: () => null
};

Modal.propTypes = {
  /**
    顯示和關閉 modal
  */
  open: PropTypes.bool.isRequired,
  /**
    是否透過點擊關閉 modal
  */
  closeOnClick: PropTypes.bool,
  /**
    是否透過按 esc 鍵關閉 modal
  */
  closeOnEsc: PropTypes.bool,
  /**
    document 上 portal 的預設樣式
  */
  defaultPortalStyles: PropTypes.object,
  /**
    參數 closeOnClick 和 closeOnEsc 如果為 true，則必須設定此參數來關閉 modal。
  */
  onClose: PropTypes.func,
  /**
    modal 開啟後會觸發此 function
  */
  onAfterOpen: PropTypes.func,
  /**
    modal 關閉後會觸發此 function
  */
  onAfterClose: PropTypes.func
};

export default Modal;
