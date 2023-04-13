Feature: Contact Page

Scenario: Verify the display of Contact Page
   When I visit the Contact Page
   Then I should see page title on Contact screen
   Then I should see Navigation Bar and links associated with contact page
   Then I should see hero section visible on Contact screen
   Then I should check whether Get the Quote button is enabled
   Then I should see the footer and its content on Contact screen

Scenario: Verify the display of Contact Form
   When I visit the Contact Page
   Then I should fill the Form
   | name            |    number                   |
   | User1           |    7937382837               |
   | email           |    address                  |
   | User1@abc.com   |    Jaynagar-Bangalore       |
   | reason          |    date                     |
   | Party           |    2017-06-01T08:30         |
   | items           |
   | Full Meals      |
   Then I should verify the alert message once the form is submitted