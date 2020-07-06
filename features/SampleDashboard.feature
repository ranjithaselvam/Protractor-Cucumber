Feature: ATMECS Falcon Dashboard 
Scenario: Check user landed on dashboard page
Given Open falcon url in the browser "http://10.10.10.231:8082/#/app/dashboard"
Then Verify user landed on to the dashboard page by validating the text dashboard
Then Verify the refresh icon is available on the top right corner of the page
Then Verify the atmecs logo an falcon text beside the logo are present on the dashboard page
# Then Verify whether the url is opened multiple browsers