export const formatMoney = (amount: number): string => {
  const formattedAmount = new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
  }).format(amount / 100);

  return formattedAmount;
};
