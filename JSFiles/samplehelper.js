"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonHelper = void 0;
const protractor_1 = require("protractor");
const commonUtility_1 = require("./helper/commonUtility");
var helpers = new commonUtility_1.ElementHelper();
class CommonHelper {
    getElementText() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.element(helpers.locatortype);
        });
    }
}
exports.CommonHelper = CommonHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2FtcGxlaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE4QztBQUM5QywwREFBdUQ7QUFDdkQsSUFBSSxPQUFPLEdBQUMsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDaEMsTUFBYSxZQUFZO0lBRWYsY0FBYzs7WUFFaEIsb0JBQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDaEMsQ0FBQztLQUFBO0NBQ0o7QUFORCxvQ0FNQyJ9