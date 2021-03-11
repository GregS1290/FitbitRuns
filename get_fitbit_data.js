const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkM1NFYiLCJzdWIiOiI5OFhXUTkiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjE1NDU4NjE2LCJpYXQiOjE2MTU0Mjk4MTZ9.sC5Yj-sFoITMP-MrzDfF7sGI5NdM3_2kh6IefXJHJkw';

fetch('https://api.fitbit.com/1/user/-/activities.json', {
  method: 'GET',
  headers: { Authorization: 'Bearer ' + accessToken },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
