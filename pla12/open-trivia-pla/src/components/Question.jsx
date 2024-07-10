const Question = ({ category, type, difficulty, question, correctAnswer, incorrectAnswers }) => {
  // TODO #6++
  // Crea una variable `answers` que contingui un array amb totes les respostes (correctes + incorrectes).
  //Crea una variable `answers` que contenga un array con todas las respuestas (correctas + incorrectas).

  const answers = [...incorrectAnswers,correctAnswer]//falta colocarlas al azar
  for (let i = 0; i < 3; i++) {
  answers.sort(()=> (Math.round(Math.random() * 2)-1)) 
  }
  const sanitize = (text) =>
    text
      .replaceAll('&quot;', '"')
      .replaceAll('&#039;', "'")
      .replaceAll('&amp;', '&')
      .replaceAll('&deg;', 'º')
      .replaceAll('&shy;', '\u00AD')

  return (
    <div>
      <div className='card'>
        <h2>{category}</h2>
        <p className='difficulty'>{difficulty}</p>
        <p className='question'>{sanitize(question)}</p>
        {answers.map((answer) => (
          <p key={answer} className='answer'>
            {sanitize(answer)}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Question
