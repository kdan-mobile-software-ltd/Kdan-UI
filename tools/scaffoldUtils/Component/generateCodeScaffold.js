const fs = require('fs');
const path = require('path');

const componentTemplate = require('./Templates/componentTemplate');
const indexTemplate = require('./Templates/indexTemplate');
const styleTemplate = require('./Templates/styleTemplate');
const storiesTemplate = require('./Templates/storiesTemplate');

module.exports = (name, startPath) => {
  const componentPath = path.join(startPath, `${name}.js`);
  const indexPath = path.join(startPath, 'index.js');
  const stylePath = path.join(startPath, 'styled.js');

  const storiesFolder = path.join(startPath, 'stories');
  const storiesName = name.substring(0, 1).toLowerCase() + name.substring(1);
  const storiesPath = path.join(storiesFolder, `${storiesName}.stories.js`);

  fs.mkdirSync(startPath);
  fs.mkdirSync(storiesFolder);

  fs.writeFileSync(componentPath, componentTemplate(name), 'utf8');
  fs.writeFileSync(indexPath, indexTemplate(name), 'utf8');
  fs.writeFileSync(stylePath, styleTemplate(name), 'utf8');
  fs.writeFileSync(storiesPath, storiesTemplate(name), 'utf8');
};
