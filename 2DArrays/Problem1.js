let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];

//console.log(MathScore[0]);
//console.log(MathScore.length)
for(let i = 0; i < MathScore.length; i++) {
  for(let j = i; j < MathScore[i].length; j++) {
    console.log(MathScore[i][j]);
  }
}