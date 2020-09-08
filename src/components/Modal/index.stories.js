import React, { useState } from 'react';

import { ContentStyle } from '../Decorator';
import Modal from './';

export default {
  component: Modal,
  title: 'Modal',
  parameters: {
    docs: {
      description: {
        component: 'Start description.'
      }
    }
  }
};

export const Base = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal open={isOpen} onClose={() => setOpen(false)}>
        <ContentStyle>
          <h1>Hello, Kdan-ui Modal!</h1>
          <button onClick={() => setOpen(false)}>close Modal</button>
        </ContentStyle>
      </Modal>
    </>
  );
};

export const CustomStyle = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal
        open={isOpen}
        onClose={() => setOpen(false)}
        bg='rgba(39, 174, 96, 0.8)'
        justifyContent='flex-start'
        pl='1rem'
      >
        <ContentStyle>
          <h1>Hello, Kdan-ui Modal!</h1>
          <p>
            使用
            <a
              href='https://styled-system.com/table/'
              target='_blank'
              rel='noreferrer'
            >
              styled-system
            </a>
            客製化 styled，包括 color、flexbox、layout、space。
          </p>
          <button onClick={() => setOpen(false)}>close Modal</button>
        </ContentStyle>
      </Modal>
    </>
  );
};
