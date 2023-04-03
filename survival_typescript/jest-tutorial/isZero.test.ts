import { isZero } from "./isZero";

test('Be true if 0 is passed.',  () => {
  const result = isZero(0);
  expect(result).toBe(true);
});

test('Be false if 1 is passed.', () => {
  const result = isZero(1);
  expect(result).toBe(false);
});
