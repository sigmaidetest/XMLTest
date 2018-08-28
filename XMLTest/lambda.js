let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    let companyName = event.queryStringParameters['comp'];
    let fileName = `${companyName}.xml`;

    s3.getObject({
        'Bucket': "sample.quotes",
        'Key': fileName
    }).promise()
        .then(data => {
            let body = data.Body;
            let xmlString = body.toString('utf8');
            callback(null, {
                "isBase64Encoded": true,
                "statusCode": 200,
                "headers": {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/xml"
                },
                "body": xmlString
            });
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
            callback(err);
        });
}