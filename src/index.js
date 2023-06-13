module.exports.sayMyName = async (event) => {

  const bodyEvent = JSON.parse(event.body); 

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${bodyEvent.nombre}`,
        body: bodyEvent,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.convertCoins = async (event) => {

  console.log(event.body)
  
  const cambio = JSON.parse(event.body).cambio;
  const monto = JSON.parse(event.body).monto;

  console.log({cambio, monto});
  
  const res = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cambio}/pen.json`
  );
  const data = await res.json();

  console.log(data);

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
        event: event,
      },
      null,
      2
    ),
  };
};
