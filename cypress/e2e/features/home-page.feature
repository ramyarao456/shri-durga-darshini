Feature: Home Page

Scenario: Verify the display of Navigation bar and links associate with it
    When I visit the Home Page
    Then I should see Navigation Bar and links associated with it
    Then I should see hero section visible on Home screen
    Then I should see the footer and its content on Home screen
    Then I should check whether the explore button is enabled on Home screen   
    Then I should check whether the back to top feature is enabled

Scenario: Verify the display of Page title on Home Page
    When I visit the Home Page
    Then I should see page title visible on Home screen

Scenario: Verify the display of Navigation from Home screen 
    When I visit the Home Page
    Then I should check if navigation is enabled from Home page to every other screen

Scenario: Verify the display of About,Menu and Contact link in Home Page
    When I visit the Home Page
    Then I should check if About,Menu and Contact link is enabled in Home Page

Scenario: Verify the display of Recipies on Home Page
    When I visit the Home Page
    Then I should see '4' images on Home screen
    Then I should see '2' images of Party order on Home screen