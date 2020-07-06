"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesFileReader = void 0;
var PropertiesReader = require('properties-reader');
class PropertiesFileReader {
    // constructor(filePath: String) {
    //     this.properties = PropertiesReader(filePath)
    // }
    constructor(filePath) {
        this.properties = PropertiesReader(filePath);
    }
    propertiesFileData(keyValue) {
        var propertyValue = this.properties.get(keyValue);
        console.log(propertyValue);
        return propertyValue.toString();
    }
}
exports.PropertiesFileReader = PropertiesFileReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHlmaWxlcmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbHMvcHJvcGVydHlmaWxlcmVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFcEQsTUFBYSxvQkFBb0I7SUFJN0Isa0NBQWtDO0lBQ2xDLG1EQUFtRDtJQUNuRCxJQUFJO0lBQ0osWUFBWSxRQUFnQjtRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxRQUFnQjtRQUMvQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBR25DLENBQUM7Q0FFSjtBQW5CRCxvREFtQkMifQ==