const { version } = require('react');
const pkg=require('./package.json');

console.log({
    name:pkg.name,
    version:pkg.version,
    description:pkg.description
})