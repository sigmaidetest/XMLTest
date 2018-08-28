let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    let xmlString = '<xml xmlns="a"><child>test</child></xml>';

    s3.getObject({
        'Bucket': "sample.quotes",
        'Key': "test.xml"
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                AcceptRanges: "bytes", 
                ContentLength: 3191, 
                ContentType: "image/jpeg", 
                ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
                LastModified: <Date Representation>, 
                Metadata: {...}, 
                TagCount: 2, 
                VersionId: "null"
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });


    callback(null, {
        "isBase64Encoded": true,
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/xml"
        },
        "body": xmlString
    });
}

// {
//   "isBase64Encoded": true,
//   "statusCode": 200,
//   "headers": {
//     "headerName": "headerValue"
//   },
//   "body": "..."
// }Access-Control-Allow-Origin: * |
//   allowed domains for CORS access
// Access-Control-Allow-Methods: * |
//   allowed HTTP methods for CORS
// Access-Control-Allow-Headers: * |
//   request headers client can send
// Access-Control-Expose-Headers: 
//   *,x-amzn-remapped-authorization |
//   response headers client can read