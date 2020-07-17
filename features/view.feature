Feature: falcon dashboard
@Filter
    Scenario:Verify test cases
        Given User launch the chrome browser
        When  User opens URL "http://10.10.10.231:8082/#/app/dashboard"
        When  select view tab in main naviagtion
        And   filter the status as pass in select status
        Then  able to get pass test cases
            | Test Case Name                | Duration | Status |
            | deleteProjectApiTest          | 0 Sec    | Pass   |
            | downloadImageApiTest          | 0 Sec    | Pass   |
            | exportToExcelApiTest          | 0 Sec    | Pass   |
            | getDashboardApiTest           | 1 Sec    | Pass   |
            | recentRunsApiTest             | 0 Sec    | Pass   |
            | reportViewApiTest             | 0 Sec    | Pass   |
            | uploadImageApiTest            | 2 Sec    | Pass   |
            | uploadTestngResultFileApiTest | 0 Sec    | Pass   |
            | viewReportApiTest             | 0 Sec    | Pass   |
        And   filter the status as fail in select status
        Then  able to get fail test case
            | Test Case Name     | Duration | Status |
            | invalidLinkApiTest | 0 Sec    | Fail   |
        And   filter the status as skip in the select status
        Then  able to get skip test case
             | Test Case Name | Duration | Status |
