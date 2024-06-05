// Authorization page for users 

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

// Step 1: Redirect the user to Reddit's authorization URL
app.get('/auth', (req, res) => {
  const authUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=random_string&redirect_uri=${redirectUri}&duration=temporary&scope=read`;
  res.redirect(authUrl);
});

// Step 2: Handle the callback from Reddit
app.get('/callback', async (req, res) => {
  const { code } = req.query;

  try {
    // Step 3: Exchange the authorization code for an access token
    const response = await axios.post('https://www.reddit.com/api/v1/access_token', null, {
      params: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri
      },
      auth: {
        username: clientId,
        password: clientSecret
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { access_token } = response.data;

    // Step 4: Use the access token to make an API request
    const result = await axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    res.send(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});