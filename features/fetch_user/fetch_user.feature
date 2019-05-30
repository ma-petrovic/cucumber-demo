
Feature: Fetch User
  In order test async test support
  I want to fetch a user from https://jsonplaceholder.typicode.com/users

  Scenario Outline: much more complex stuff
    Given an initial user
    When I fetch the user with the id <userId>
    Then the returned user should be named <userName>

    Examples:
      | userId | userName      |
      | 1      | Leanne Graham |

