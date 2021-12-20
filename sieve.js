function getPrimes(limit) {
  let flags = new Array(limit).fill(true);

  for (let num = 2; num <= Math.floor(Math.sqrt(limit)); num++) {
    for (let i = 2; num * i <= limit; i++) {
      //   console.log(num, num * i, flagIdx);
      const flagIdx = num * i - 1;
      if (flags[flagIdx]) flags[flagIdx] = false;
    }
    console.log(flags.map((v, idx) => `${idx + 1} => ${v}`));
  }
}

getPrimes(16);
