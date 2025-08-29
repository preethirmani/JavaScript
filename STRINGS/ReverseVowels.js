var reverseVowels = function(s) {
    let i = 0;
    let j = s.length - 1;
    console.log(typeof s);
    s = s.split('');
    const vowelMap = new Map([
        ['a',0], ['e', 1], ['i',2], ['o',3], ['u',4],
        ['A',5], ['E', 6], ['I',7], ['O',8], ['U',9],
    ]);
   console.log('s:',s);
    while( i < j) {
        if(vowelMap.has(s[i])) {
          console.log('vowelMap.has(s[i])', s[i]);
          console.log('j',j);
          console.log(vowelMap.has(s[j]))
            if(vowelMap.has(s[j])) {
              console.log(`i:${i} , j : ${j}`);
                [s[i], s[j]] = [s[j], s[i]];
                i++; j--;
            }else {
                j--;
            }
        } else {
           i++;
        }
       
    }
    s = s.join('');
    console.log(s);
    return s;
};

let s = "IceCreAm";

reverseVowels(s);
