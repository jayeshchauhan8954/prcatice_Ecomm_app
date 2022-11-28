let Math = require("../../myapp/sun");
// describe("My calc", () => {
//   // suite => grouping

//   test("my first test", () => {
//     //assertion = > verify
//     let a = 5;
//     expect(a).toBe(5);
//   });

//   test("add method", () => {
//     //assertion = > verify
//     let a = 5;
//     expect(a).toBe(5);
//   });

//   test("sub method", () => {
//     //assertion = > verify
//     let a = 5;
//     expect(a).toBe(5);
//   });

//   test("mul method", () => {
//     //assertion = > verify
//     let a = 5;
//     expect(a).toBe(5);
//   });

//   test("divide method", () => {
//     //assertion = > verify
//     let a = 5;
//     expect(a).toBe(5);
//   });
// });
//check falsy values
// false , null , undefined, NaN, 0 , ""
// describe("My flasy test suite", () => {
//   test("checking null", () => {
//     let a = null;
//     expect(a).toBeNull();
//     expect(a).toBeFalsy();
//   });

//   test("checking undefined", () => {
//     let a = undefined;
//     expect(a).toBeUndefined();
//     expect(a).toBeFalsy();
//   });
// });

//TDD

describe("my calc class", () => {
  test("should be sum method", () => {
    expect(Math.sum(2, 3)).toBe(5);
    expect(Math.sum(-1, -1)).toBe(-2);
    expect(Math.sum()).toBe(0);
    // expect(Math.sum()).toBe("Please enter a number");
  });
});

describe("my calc class", () => {
  let totalSum = 0;
  beforeEach(() => {
    totalSum = 0;
  });
  xtest("should be sum method", () => {
    expect(Math.square(4)).toBe(16);
    expect(Math.square(0)).toBe(0);
    expect(Math.square(-5)).toBe(25);
    // expect(Math.square()).toBe("Please enter a number");
    expect(Math.square(Infinity)).toBe(Infinity);
    expect(Math.square(2, 9)).toBe(4);
  });

  // let totalSum = 0;

  test("adds total", () => {
    let total = Math.sum(2, 3);
    totalSum = totalSum + total;
    expect(totalSum).toBe(5);
  });

  test("adds total", () => {
    let total = Math.sum(5, 3);
    totalSum = totalSum + total;
    expect(totalSum).toBe(8);
  });
});
