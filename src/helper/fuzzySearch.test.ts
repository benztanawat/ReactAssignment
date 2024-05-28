import { stringSimilarity } from "./fuzzySearch";


describe('String Similarity', () => {
  it('returns 0 for empty strings', () => {
    expect(stringSimilarity('', '')).toBe(0);
  });

  it('returns 1 for identical strings', () => {
    expect(stringSimilarity('test', 'test')).toBe(1);
  });
  
  it('is case-insensitive', () => {
    expect(stringSimilarity('Test', 'test')).toBe(1);
  });
  
});