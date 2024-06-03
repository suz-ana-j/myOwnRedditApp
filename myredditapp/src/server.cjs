/* oAuth2 code to connect my code to the reddit API */ 

const express = require('express'); 
const axios = require('axios'); 

// Create Express app 
const app = express(); 
// Define route to handle authorization code
 app.get('/auth/callback', (req, res) => { 
// Extract authorization code from query parameters 
const authorizationCode = req.query.code; 

// Exchange authorization code for access token
 axios.post('https://www.reddit.com/api/v1/access_token', { 
      grant_type: 'authorization_code', 
      code: authorizationCode, 
      redirect_uri: 'http://localhost', 
        client_id: 'E3v4v0jXqg_1xjCmb1HvUw', 
         client_secret: 'u1jOvsyDiTIsoWfQ-g_CeDrpbJ8YRQ';

 }) .then(response => {
 // Handle successful response
 const accessToken = response.data.access_token; 

// Use the access token to make authenticated requests to Reddit API 
// Redirect user or send response back to client 
      res.send('Access token obtained: ' + accessToken);
 }) .catch(error => {
 // Handle error
       console.error('Error exchanging authorization code for access token:', error); 
// Send error response back to client 
      res.status(500).send('Error exchanging authorization code for access token'); }); });

 // Start the Express server 
      app.listen(3000, () => { console.log('Server is running on port 3000'); });
