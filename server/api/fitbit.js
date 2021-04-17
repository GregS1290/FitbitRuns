const router = require('express').Router();
const axios = require('axios');
// const {User, Run} = require('../db/models')

const accessToken = '';

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
