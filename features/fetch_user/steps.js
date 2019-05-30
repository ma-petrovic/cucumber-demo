const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/users';

let user;

Given('an initial user', () => {
  user = {};
});

When('I fetch the user with the <int>', userId => fetch(`${url}/${userId}`)
  .then(response => response.json())
  .then((fetchedUser) => {
    user = fetchedUser;
  }));

Then('the returned user should be {string}', (userName) => {
  expect(user.name).to.eql(userName);
});
