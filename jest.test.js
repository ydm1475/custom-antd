test("test common matcher", () => {
  expect(2 + 2).toBe(4);

  expect(2 + 2).not.toBe(5);
});

test("test to be true or false", () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

test("test number", () => {
  expect(4).toBeLessThan(8);
  expect(2).toBeGreaterThan(1);
});

test("test obj", () => {
  expect({ name: "viking" }).toEqual({ name: "viking" });
});