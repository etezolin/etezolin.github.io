/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
/* eslint-enable @typescript-eslint/no-var-requires */

const filePath = path.resolve('./package.json');

const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
packageJson.buildDate = new Date().getTime();

fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2));

const jsonData = {
  buildDate: packageJson.buildDate,
};

const jsonContent = JSON.stringify(jsonData, null, 2);

fs.writeFile(
  path.resolve('./public/meta.json'),
  jsonContent,
  'utf8',
  (error) => {
    if (error) {
      console.log(
        'An error occurred while saving build date and time to meta.json'
      );
      return console.log(error);
    }

    console.log('Latest build date and time updated in meta.json file');
  }
);
