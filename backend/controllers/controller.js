const {segmentImgKeywords} = require('../imageSegmentation/segmenter');

exports.searchController = async (req, res, next) => {
    try {
        // if (!req.file){
        //     let err = new Error("no file");
        //     err.status(422);
        //     throw err;
        // }
        // console.log(req.file);

        //pass req.file.filename to python's function
        const strResult = await segmentImgKeywords("../images/male_fashion_street.jpg");
        const strProcessed = strResult.replace(/'/g, '"');
        console.log(strProcessed);
        let keyword_list = JSON.parse(strProcessed);
        console.log(keyword_list);

        //query the database based on the return keywords (how to make the query more efficient?)

        //return images
    } catch (err) {
        throw err;
    }
}

exports.keywordController = async (req, res, next) => {
    try {

        //pass req.file.filename to python's function

        //return keywords to the client (may need to filter the keywords)
    } catch (err) {

    }
}