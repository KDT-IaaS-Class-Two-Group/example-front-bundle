interface TestInterface {
  testWork(testString: string): string;
  testVariable: string;
}

const testObject: TestInterface = {
  testWork: (testString: string): string => {
    return testString;
  },
  testVariable: ""
};

testObject.testVariable = testObject.testWork('테스트');
console.log(testObject.testVariable);