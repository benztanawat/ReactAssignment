function getNGrams(s: string, len: number) {
    s = ' '.repeat(len - 1) + s.toLowerCase() + ' '.repeat(len - 1);
    return Array.from({ length: s.length - len + 1 }, (_, i) => s.slice(i, i + len));
  }
  
  export function stringSimilarity(str1: string, str2: string, gramSize: number = 2) {
    // Return 0 if either string is empty
    if (!str1?.length || !str2?.length) { return 0.0; }
  
    // Determine the shorter and longer strings
    const [s1, s2] = str1.length < str2.length ? [str1, str2] : [str2, str1];
  
    // Get the n-grams for each string
    const pairs1 = getNGrams(s1, gramSize);
    const pairs2 = getNGrams(s2, gramSize);
  
    // Create a set from the n-grams of the shorter string
    const set = new Set<string>(pairs1);
  
    // Count the number of n-grams in the longer string that also appear in the shorter string
    const hits = pairs2.reduce((count, item) => set.delete(item) ? count + 1 : count, 0);
  
    // Return the proportion of n-grams in the longer string that also appear in the shorter string
    return hits / pairs2.length;
  }