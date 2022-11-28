const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    resolve("Im promise");
    reject("rejected");
  });
};

describe("async", () => {
  test("test promse", () => {
    promiseFunc()
      .then((data) => {
        expect(data).toBe("Im promise");
      })
      .catch((err) => {
        expect(err).toBe("rejected");
      });
  });

  test("test your async/await", async () => {
    try {
      let output = await promiseFunc();
      expect(output).toBe("Im promise");
    } catch (error) {
      expect(error).toBe("rejected");
    }
  });
});
