const { spawn } = require('child_process');
const { resolve } = require('path');

function segmentImgKeywords(image_dir) {
    return new Promise((resolve, reject) => {
        let largeDataSet = [];
        // spawn new child process to call the python script
        // const image_dir = "./images/male_fashion_street.jpg";
        const python = spawn('python', ['sama_codejam_2020.py', image_dir]);
        // collect data from script
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            largeDataSet.push(data);
        });
        // in close event we are sure that stream from child process is closed
        python.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`);
            resolve(largeDataSet.join(""));
        });
    })
}

segmentImgKeywords("./backend/images/male_fashion_street.jpg")
    .then(data => {
        const strProcessed = data.replace(/'/g, '"');
        console.log(strProcessed);
        keyword_list = JSON.parse(strProcessed);
        console.log(keyword_list);
    })
    .catch(err => {
        console.log(err);
    })