type DataProps = {
  m: {
    udin: number;
    nanang: number;
  };
  t: {
    udin: number;
    nanang: number;
  };
};

function basic({ m, t }: DataProps): string {
  /**
   * A function to calculate bmi
   * @param {number} m - for massa
   * @param {number} t - for tinggi
   */
  function bmi<T extends number>(m: T, t: T): number {
    return m / (t * t);
  }

  const udin = bmi(m.udin, t.udin);
  const nanang = bmi(m.nanang, t.nanang);
  const outputBoolean = udin > nanang ? true : false;

  return `BMI Udin (${udin}) ${
    outputBoolean ? "lebih tinggi" : "lebih rendah"
  } dari Nanang (${nanang})!`;
}

console.log(
  basic({ m: { udin: 78, nanang: 92 }, t: { udin: 1.69, nanang: 1.95 } })
);
console.log(
  basic({ m: { udin: 95, nanang: 85 }, t: { udin: 1.88, nanang: 1.76 } })
);
