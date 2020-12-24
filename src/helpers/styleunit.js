function styleUnit(n, unit) {
  let string = `${n} ${unit}`;

  if (2 <= n) {
    string += "s";
  }

  return string;
}

export default styleUnit;
