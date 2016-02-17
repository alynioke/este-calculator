export const LOAN_INTEREST = 0.02;

export function calculateReturnAmount(amount, days) {
  const amountInt = parseInt(amount, 10);
  const daysInt = parseInt(days, 10);

  return amountInt + amountInt * LOAN_INTEREST * daysInt;
}
