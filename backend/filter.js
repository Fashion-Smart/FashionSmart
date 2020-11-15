const { segmentImgKeywords } = require('./segmenter.js');

segmentImgKeywords("./images/male_fashion_street.jpg")
    .then(data => {
        const strProcessed = data.replace(/'/g, '"');
        // console.log(strProcessed);
        let keyword_list = JSON.parse(strProcessed);
        console.log(keyword_list);
        //TODO: filter keyword_list
        let filtered_list = keyword_list;
        console.log(filtered_list);
    })
    .catch(err => {
        console.log(err);
    })
