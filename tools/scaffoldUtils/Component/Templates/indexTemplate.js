module.exports = (name) => {
  return `export { ${name} } from './${name}';
`;
};
