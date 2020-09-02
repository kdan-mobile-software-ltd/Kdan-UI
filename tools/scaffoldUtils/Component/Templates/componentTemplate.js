module.exports = (name) => {
  return `import React from 'react';

const ${name} = () => {
  return (
    <div>Foo</div>
  );
};

export { ${name} };
`;
};
