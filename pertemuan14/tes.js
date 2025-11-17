let score1 = [40, 50, 20];
score1.unshift(30);
localStorage.setItem("score1", JSON.stringify(score1));
let totalscore = JSON.parse(localStorage.getItem("score1"));
let hasil = totalscore.map(v => v + 5);
console.log(hasil); 
