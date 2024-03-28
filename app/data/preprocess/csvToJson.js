const CSVToJSON = require('csvtojson');
const fs = require('fs');
const path = require('path');

const folderName = 'preprocess';
const fileName = 'police';

const csvFilePath = path.join(__dirname, '..', '..', 'data', folderName, `${fileName}.csv`);
const jsonFilePath = path.join(__dirname, '..', '..', 'data', folderName, `${fileName}.json`);

CSVToJSON()
    .fromFile(csvFilePath)
    .then((data) => {
        // Save JSON file
        fs.writeFile(jsonFilePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
            if (err) {
                throw err;
            }
            console.log('JSON data is saved.');
        });
    })
    .catch((err) => {
        console.error(err);
    });
