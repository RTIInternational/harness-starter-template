/**
 * BASIC Authentication
 *
 * Simple authentication script intended to be run by Amazon Lambda to
 * provide Basic HTTP Authentication for a static website hosted in an
 * Amazon S3 bucket through Couldfront.
 *
 * https://hackernoon.com/serverless-password-protecting-a-static-website-in-an-aws-s3-bucket-bfaaa01b8666
 * 
 * 01/21/2019 : CRT, Added authentication call to DynamoDB
 * 
 */
 
 'use strict';
 
 exports.handler = (event, context, callback) => {
  
     // Get request and request headers
     var request = event.Records[0].cf.request;
     const headers = request.headers;
     var hoststring = JSON.stringify(headers['host']).replace('[', '').replace(']', '');
     var hostObject = JSON.parse(hoststring);
     //var AWS = require('aws-sdk');
     
     console.log("host:", hostObject.value);
  
     // Extract the URI from the request
     var olduri = request.uri;
 
     // Match any '/' that occurs at the end of a URI. Replace it with a default index
     var newuri = olduri.replace(/\/$/, '\/index.html');
     
     // Log the URI as received by CloudFront and the new URI to be used to fetch from origin
     console.log("Old URI: " + olduri);
     console.log("New URI: " + newuri);
     
     // Replace the received URI with the URI that includes the index page
     request.uri = newuri;
     
     // Configure authentication
     const authUser = 'username';
     const authPass = 'password';
  
     // Construct the Basic Auth string
     const authString = 'Basic ' + new Buffer(authUser + ':' + authPass).toString('base64');
 
     // Require Basic authentication
     if (typeof headers.authorization == 'undefined' || headers.authorization[0].value != authString) {
         const body = 'Unauthorized';
         const response = {
             status: '401',
             statusDescription: 'Unauthorized',
             body: body,
             headers: {
                 'www-authenticate': [{key: 'WWW-Authenticate', value:'Basic'}]
             },
         };
         callback(null, response);
     }
  
     // Continue request processing if authentication passed
     callback(null, request);
 };