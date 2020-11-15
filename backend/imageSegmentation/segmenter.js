const { spawn } = require('child_process');


const segmentImgKeywords = async (image_dir) => {
    return new Promise((resolve, reject) => {
        let largeDataSet = [];
        // spawn new child process to call the python script
        const python = spawn('python', ['sama_codejam_2020.py', image_dir]);
        // collect data from script
        python.stdout.on('data', function (data) {
            largeDataSet.push(data);
        });
        // in close event we are sure that stream from child process is closed
        python.on('close', (code) => {
            resolve(largeDataSet.join(""));
        });
    })
}

exports.segmentImgKeywords = segmentImgKeywords;