export function dollar(n, decimals = 2) {
  const abs = Math.abs(n);
  const str = '$' + abs.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return n < 0 ? `(${str})` : str;
}

export function dollarWhole(n) {
  return dollar(n, 0);
}

export function pct(n) {
  return n.toFixed(2) + '%';
}
