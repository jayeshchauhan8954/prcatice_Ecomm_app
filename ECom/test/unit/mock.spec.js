const printNames = (n, sendEmail) => {
  let total = 0;
  for (let i = 0; i < n; i++) {
    let dehlivery = sendEmail();
    total++;
    isSystemWorking = dehlivery.passed > dehlivery.failed;
  }
  return isSystemWorking;
};

describe("mock", () => {
  let dehlivery = {
    passed: 2,
    failed: 3,
  };
  let sendEmail = jest.fn().mock;

  test("f mock", () => {
    expect(printNames(5)).toBe(5);
  });
});
