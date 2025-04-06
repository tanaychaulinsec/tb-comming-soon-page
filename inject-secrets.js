const fs = require('fs');
const path = require('path');

// Read the environment variable
const scriptURL = process.env.SCRIPT_URL;

// Path to the JavaScript file
const filePath = path.join(__dirname, 'asset/js/form-submit.js');

// Read the file content
let fileContent = fs.readFileSync(filePath, 'utf8');

// Replace the placeholder with the secret value
fileContent = fileContent.replace('YOUR_SCRIPT_URL_PLACEHOLDER', scriptURL);

// Write the updated content back to the file
fs.writeFileSync(filePath, fileContent, 'utf8');

console.log('Script URL has been injected successfully.');
