"use strict";
const testObject = {
    testWork: (testString) => {
        return testString;
    },
    testVariable: ""
};
testObject.testVariable = testObject.testWork('테스트');
console.log(testObject.testVariable);
//# sourceMappingURL=app.js.map