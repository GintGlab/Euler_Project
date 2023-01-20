function findComposition() {
  console.time();
  for (let a = 1; a < 332; a++) {
    for (let b = a + 1; b < 499; b++) {
      const c = 1000 - a - b;
      if (c**2 === a**2 + b**2) {
        console.log(a,b,c, a*b*c);
        break
      }
    };
  }
  console.timeEnd();
}
findComposition()
