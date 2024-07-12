const Pregunta = ({pregunta}) => {

  const sanitize = (text) =>
    text
      .replaceAll('&quot;', '"')
      .replaceAll('&#039;', "'")
      .replaceAll('&amp;', '&')
      .replaceAll('&deg;', 'º')
      .replaceAll('&shy;', '\u00AD')


  return (
    <div id="pregunta" className="borde-rojo"><h2>{sanitize(pregunta)}</h2></div>
  )
}

export default Pregunta