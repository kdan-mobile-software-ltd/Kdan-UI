import React from 'react';
import ReactDOM from 'react-dom';

import Modal from '../components/Modal';

describe('Modal', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should append Modal to the document.body', () => {
    const App = () => (
      <Modal open>
        <div>Message</div>
      </Modal>
    );
    ReactDOM.render(<App />, document.getElementById('root'));

    expect(document.body.firstChild.outerHTML).toBe('<div id="root"></div>');
    expect(document.body.lastChild.outerHTML).toMatch(/<div>Message<\/div>/i);
  });
});
