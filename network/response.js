exports.succes = function ( req, res, message, status ) {
    res.send(
        {
            "error": false,
            "status": status,
            "message": message,
        }
    )
};

exports.error = function ( req, res, error, errorDetails, status) {
    console.log(errorDetails);
    res.send(
        {
            "error": error,
            "status": status,
            "body": res.body,
        }
    );
};