function performRequest(request, callback){
    fetch(request)
        .then(
            function(response) {
                if (response.ok) {

                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.indexOf('application/json') !== -1) {
                        response.json().then(json => callback(json, response.status,null));
                    } else {
                        callback(null, response.status,null); // if the request is successful but the response is empty. Write your script.
                    }
                }
                else {
                    response.json().then(err => callback(null, response.status,  err));
                }
            })
        .catch(function (err) {
            //catch any other unexpected error, and set custom code for error = 1
            callback(null, 1, err)
        });
}

module.exports = {
    performRequest
};