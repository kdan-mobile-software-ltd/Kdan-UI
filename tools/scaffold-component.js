const fs = require('fs');
const path = require('path');
const camelMessages = require('./scaffoldUtils/camelMessages');
const generateCodeScaffold = require('./scaffoldUtils/Component/generateCodeScaffold');

// Grab the name if it was passed and validate
const componentName = process.argv[2];
if (!componentName) {
  camelMessages.error('Component name was not passed.');
  process.exit();
} else if (!/^[A-Z][A-Za-z]+$/.test(componentName)) {
  camelMessages.error(
    'Component names start with an uppercase letter and contain only letters.'
  );
  process.exit();
}
// Once validated, confirm the component doesn't already exist
const componentPath = path.join('src/components', componentName);
if (fs.existsSync(componentPath)) {
  camelMessages.error(`Component already exists, at '${componentPath}'.`);
  process.exit();
}
// Now lets generate!
(async () => {
  try {
    generateCodeScaffold(componentName, componentPath);
    camelMessages.success(`The ${componentName} component has been created!`);
  } catch (e) {
    camelMessages.error(e);
    process.exit();
  }
})();
