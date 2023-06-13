const convertCoins = async (event) => {
  const cambio = JSON.parse(event.body.cambio);
  const monto = JSON.parse(event.body.monto);

  const res = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cambio}/pen.json`
  );
  const data = await res.json();

  const sol = monto * data.pen;
  const f = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  });
  const soles = f.format(sol);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `El cambio de ${cambio} a soles es: ${soles}`,
      },
      null,
      2
    ),
  };
};
