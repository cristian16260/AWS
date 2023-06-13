const translate = async (event, idioma) => {
    // const { texto } = JSON.parse(event.body) 

    const res = await fetch(`https://api.mymemory.translated.net/get?q=${event}&langpair=${idioma}|es-ES`)
    const data = await res.json()
    const filtro = data.responseData.translatedText
    console.log(filtro)

    return{
        status:200,
        body: JSON.stringify(res)
    }
}

translate('hello world', 'en-GB')

// module.exports = {
//     translate,
// }