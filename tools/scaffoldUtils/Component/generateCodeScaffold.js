const fs = require('fs');
const path = require('path');

const componentTemplate = require('./Templates/componentTemplate');
const indexTemplate = require('./Templates/indexTemplate');
const styleTemplate = require('./Templates/styleTemplate');
const storiesTemplate = require('./Templates/storiesTemplate');
const testTemplate = require('./Templates/testTemplate');

module.exports = (name, startPath) => {
  const componentPath = path.join(startPath.componentPath, `${name}.js`);
  const indexPath = path.join(startPath.componentPath, 'index.js');
  const stylePath = path.join(startPath.componentPath, 'styled.js');
  const storiesPath = path.join(startPath.componentPath, 'index.stories.js');

  const testName = name.substring(0, 1).toLowerCase() + name.substring(1);
  const testPath = path.join(startPath.testPath, `${testName}.test.js`);

  fs.mkdirSync(startPath.componentPath);

  fs.writeFileSync(componentPath, componentTemplate(name), 'utf8');
  fs.writeFileSync(indexPath, indexTemplate(name), 'utf8');
  fs.writeFileSync(stylePath, styleTemplate(name), 'utf8');
  fs.writeFileSync(storiesPath, storiesTemplate(name), 'utf8');
  fs.writeFileSync(testPath, testTemplate(name), 'utf8');
};
