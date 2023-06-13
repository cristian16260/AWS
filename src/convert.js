const convert = async (event,cambio) => {
    // const {monto} = JSON.parse(event.body)

    const res  = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cambio}/pen.json`);
    const data = await res.json()

    const sol = event * (data.pen)
    const f = new Intl.NumberFormat('es-PE',{
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 2
    })
    const soles = (f.format(sol))
    console.log(soles)
    return{
        status: 200,
        body: JSON.stringify(soles)
    }
}
convert(10,'usd')