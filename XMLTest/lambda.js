let AWS = require('aws-sdk');

exports.handler = function (event, context, callback) {

    let xmlString = '<xml xmlns="a"><child>test</child></xml>';

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