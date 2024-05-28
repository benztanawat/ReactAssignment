import { isEmpty } from "./string";


describe('isEmpty', () => {
  it('returns true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('returns true for string with only spaces', () => {
    expect(isEmpty('   ')).toBe(true);
  });

  it('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('returns false for non-empty string', () => {
    expect(isEmpty('test')).toBe(false);
  });

  it('returns false for non-empty object', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });
});