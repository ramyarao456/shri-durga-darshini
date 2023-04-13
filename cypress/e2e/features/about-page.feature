Feature: About Page

Scenario: Verify the display of About Page  
    When I visit the About Page
    Then I should see page title on About screen
    Then I should see Navigation Bar and links associated with About page
    Then I should see hero section visible on About screen
    Then I should check whether the Other stores button is enabled
    Then I should see the footer and its content on About screen