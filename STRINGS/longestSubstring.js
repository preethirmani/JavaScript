function longestSubstring(s) {
  if(s.length === 1) return s.length;
  let start = 0;
  let maxLen = 0;
  const charMap = new Map();
  for(let i = 0; i < s.length; i++) {
    if(charMap.has(s[i]) && charMap.get(s[i]) >= start) {
      start  = charMap.get(s[i]) + 1;
      console.log('start after if', s[i], start);
    }
    charMap.set(s[i], i);
    maxLen = Math.max(maxLen, (i - start) + 1);
  }
  return maxLen;
}

//console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring('tsfrabcahijklmnopbcbb'));