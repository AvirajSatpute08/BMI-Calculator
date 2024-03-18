
const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/calculate', (req, res) => {
    const weight = req.body.weight;
    const height = req.body.height;
    const gender = req.b

    const weightVal = parseFloat(req.body.weight);
    const heightVal = parseFloat(req.body.height);

    let weightInKg;
    if (weight === 'lbs') {
        weightInKg = weightVal * 0.4535; 
    }
     else {
        weightInKg = weightVal;
    }

    let heightInMeter;
    if (height === 'feet') {
        heightInMeter = heightVal * 0.3048;
    } 
    else if (height === 'meters') {
        heightInMeter = heightVal;
    } 
    else if(height === 'inches'){
        heightInMeter = heightVal * 0.0254;
    }
    else {
        heightInMeter = heightVal / 100;
    }   

const bmi = (weightInKg / Math.pow(heightInMeter, 2)).toFixed(2);

res.render('result', { bmi ,gender});
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});





