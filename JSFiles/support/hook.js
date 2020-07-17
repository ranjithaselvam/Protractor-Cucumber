"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    protractor_1.browser.get("http://10.10.10.231:8082/#/app/dashboard");
});
cucumber_1.After(function () {
    protractor_1.browser.close();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N1cHBvcnQvaG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHVDQUF5QztBQUN6QywyQ0FBa0Q7QUFRbEQsaUJBQU0sQ0FBRTtJQUVKLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUE7QUFDM0QsQ0FBQyxDQUFDLENBQUE7QUFFRixnQkFBSyxDQUFDO0lBRUYsb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQSJ9