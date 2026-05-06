// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('12345 is not a valid phone number', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});
test('abc-def-ghij is not a valid phone number', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('user@example.com is a valid email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});
test('hello@mail.org is a valid email', () => {
  expect(isEmail('hello@mail.org')).toBe(true);
});
test('missing@dotcom is not a valid email', () => {
  expect(isEmail('missing@dotcom')).toBe(false);
});
test('noatsign.com is not a valid email', () => {
  expect(isEmail('noatsign.com')).toBe(false);
});

// isStrongPassword
test('Hello123 is a strong password', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});
test('aValidPass1 is a strong password', () => {
  expect(isStrongPassword('aValidPass1')).toBe(true);
});
test('hi is not a strong password (too short)', () => {
  expect(isStrongPassword('hi')).toBe(false);
});
test('1startsWithNumber is not a strong password', () => {
  expect(isStrongPassword('1startsWithNumber')).toBe(false);
});

// isDate
test('1/1/2024 is a valid date', () => {
  expect(isDate('1/1/2024')).toBe(true);
});
test('12/31/2024 is a valid date', () => {
  expect(isDate('12/31/2024')).toBe(true);
});
test('2024-01-01 is not a valid date format', () => {
  expect(isDate('2024-01-01')).toBe(false);
});
test('13/32/20 is not a valid date (wrong year length)', () => {
  expect(isDate('13/32/20')).toBe(false);
});

// isHexColor
test('#FFF is a valid hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('#1a2b3c is a valid hex color', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});
test('ZZZZZZ is not a valid hex color', () => {
  expect(isHexColor('ZZZZZZ')).toBe(false);
});
test('#12345 is not a valid hex color (5 digits)', () => {
  expect(isHexColor('#12345')).toBe(false);
});
