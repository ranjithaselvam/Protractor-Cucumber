Feature: Falcon Dashboard
    @mainnaviagtion
    Scenario: Main Navigation
       # When  Open the website "http://10.10.10.231:8082/#/app/dashboard"
        And  Click all the tab in main navigation
    #     Then verify all the tab page navigation
    #         # | dashboard       | http://10.10.10.231:8082/#/app/dashboard   |
    #         # | recentrun       | http://10.10.10.231:8082/#/recentruns/view |
    #         # | view            | http://10.10.10.231:8082/#/reports/        |
    #         # | productsnapshot | http://10.10.10.231:8082/#/product/view/   |

    # @dashboard
    # Scenario: dashboard navigation
        Then verify whether all the project available on the dashboard page
    #         | listOfProject | REST API TEST RESULT,UI WEB TEST RESULT,CucumberDemo,DotComUI_Mobile,FalconMobileDemo,HEATCLINIC RESULT,HEAT CLINIC RESULT,DotCoAtmecs,CHS,TestMobileWeb,TestFalcon_runSessionId,swathi_signup account,Pooja_USAUTOPARTS,USAutoParts,USAutoParts_MUJ,TestMobileWeb_CnameDemo,IOSDemoApp,Mobile_Demo,TestDemoApp,UI BrowserStack Test Result,dbTesting |