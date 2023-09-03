exports.succes = function ( req, res, message, status ) {
    res.send(
        {
            "error": false,
            "status": status,
            "message": message,
        }
    )
};

exports.error = function ( req, res, error, status ) {
    res.send(
        {
            "error": error,
            "body": res.body,
        }
    );
};