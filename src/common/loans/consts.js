export function calculateReturnAmount(amount, days, interest) {
  // const {amount, days, interest} = params;
  const amountInt = amount ? parseInt(amount, 10) : 0;
  const daysInt = days ? parseInt(days, 10) : 0;

  return amountInt + amountInt * interest / 100 * daysInt;
}
