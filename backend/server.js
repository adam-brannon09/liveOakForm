const express = require('express');
const XLSX = require('xlsx');
const URL = 'https://1drv.ms/x/s!AqGR4L1Eqh3IgRJngs1cWsWuFmUL?e=wH9ntB';
const app = express();
const port = 8000;

app.use(express.json());

app.post('/save-to-excel', async (req, res) => {
    try {
        const formData = req.body;

        // Load existing Excel workbook or create a new one
        const workbook = XLSX.readFile(URL) || XLSX.utils.book_new();

        // Append new data to the last worksheet
        const worksheet = XLSX.utils.json_to_sheet([formData]);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Form Data');

        // Save the updated workbook
        XLSX.writeFile(workbook, 'SideProject.xlsx');

        res.status(200).send('Data saved successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving data');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
