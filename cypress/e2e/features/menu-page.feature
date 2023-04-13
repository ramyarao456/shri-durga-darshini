Feature: Menu Page

Scenario: Verify the display of Menu Page
   When I visit the Menu Page
   Then I should see page title on Menu screen
   Then I should check whether the explore button is enabled on menu screen
   
Scenario: Verify the Navigation Bar and links in Menu Page
   When I visit the Menu Page
   Then I should see Navigation Bar and links associated with menu page

Scenario: Verify the Footer content in Menu Page
   When I visit the Menu Page
   Then I should see the footer and its content on menu screen

Scenario: Verify the display of all the heading in Menu Page   
   When I visit the Menu Page
   Then I should see all the headings present

Scenario: Verify the no. of images visible on every section  
   When I visit the Menu Page
   Then I should see '4' images in breakfast in menu
   Then I should see '6' images in breakfast all day 
   Then I should see '2' images in meals
   Then I should see '2' images in sweets
   Then I should see '6' images in beverages