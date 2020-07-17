Feature:Falcon dashboard

   Scenario:Open falcon dashboard
      Then Verify the user landed on to the dashboard "Dashboard"
      Then Verify the refersh icon is available on the tab right corner of the page
      Then Verify atmecs logo on the dashboard page
      Then Verify whether all the project available on the dashboard page
      And   Click REST API TEST RESULT Link in dashboard
      And   Select status as pass
      Then  Able to get pass test cases
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

      When  User click on toggle button

      Then  User can able to view test status
         | status  | details    |
         | testrun | 10 TEST(S) |
         | pass    | 9          |
         | fail    | 1          |
         | skip    | 0          |




