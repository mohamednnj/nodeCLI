import fs from 'fs';
import { filePath } from './var.js';

function writeData(data) {
    // Ensure filePath is valid
    const currentPath = process.cwd();
    const fullPath = filePath.startsWith('/')
        ? filePath
        : `${currentPath}/${filePath}`;

    if (!fs.existsSync(fullPath)) {
        // File doesn't exist, create it with initial data
        try {
            fs.writeFileSync(fullPath, JSON.stringify([data], null, 2));
            console.log('File created and data saved successfully!');
        } catch (err) {
            console.error('Error creating file:', err);
        }
    } else {
        try {
            const existingData = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
            existingData.push(data); // Append new data to the array
            fs.writeFileSync(fullPath, JSON.stringify(existingData, null, 2));
            console.log('Data appended successfully!');
        } catch (err) {
            console.error('Error writing to file:', err);
        }
    }
}

export { writeData };
