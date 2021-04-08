const router = require('express').Router();
const axios = require('axios');
// const {User, Run} = require('../db/models')

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkM1NFYiLCJzdWIiOiI5OFhXUTkiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjQ4OTk4NjM0LCJpYXQiOjE2MTc0NjQzNDN9.pvWnoA-5fN3DDfJyufA33q0TDSiagTy7WhbTQ7HMRds';

const userId = '98XWQ9';

router.get('/', async (req, res, next) => {
  let date = '2021-04-06';
  let { data } = await axios.get(
    `https://api.fitbit.com/1/user/-/activities/date/${date}.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  let run = data.activities[0].distance;
  res.json(run);
});

router.get('/all', async (req, res, next) => {
  let { data } = await axios.get(
    `https://api.fitbit.com/1/user/-/activities.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  res.json(data);
});

router.get('/activities', async (req, res, next) => {
  let { data } = await axios.get(
    `https://api.fitbit.com/1/user/${userId}/activities.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  res.json(data);
});

module.exports = router;
