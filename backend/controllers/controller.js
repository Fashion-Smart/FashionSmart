exports.searchController = async (req, res, next) => {
    try {
        if (!req.file){
            let err = new Error("no file");
            err.status(422);
            throw err;
        }
        console.log(req.file);

        //pass req.file.filename to python's function

        //query the database based on the return keywords (how to make the query more efficient?)

        //return images
    } catch (err) {

    }
}

exports.keywordController = async (req, res, next) => {
    try {

        //pass req.file.filename to python's function

        //return keywords to the client (may need to filter the keywords)
    } catch (err) {

    }
}