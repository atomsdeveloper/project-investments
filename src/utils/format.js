export const formatPrice = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const formatPercentage = (value) => {
  if (value == null) {
    return ''; // ou um valor padrão como '0%' ou 'N/A'
  }

  const valueString = value.toString();

  return `${valueString}%`;
};
