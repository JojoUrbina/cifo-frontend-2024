import { useContext, useEffect, useState } from "react";
import SettingsContext from "../context/SettingsContext";
import Question from "./Question";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const { settings } = useContext(SettingsContext);

  const apiUrl = "https://opentdb.com/api.php?type=multiple";

  // TODO #0
  // No cal que facis res. Però assegura't que entens què fa aquest hook. Si no, pregunta al fòrum!
  // Cal que ho entenguis perfectament línia a línia sense el més mínim dubte.
  /* No hace falta que hagas nada. Pero asegúrate de que entiendes qué hace este hook. Si no, ¡pregunta en el foro!
 // Es necesario que lo entiendas perfectamente línea a línea sin la menor duda. */
  useEffect(() => {
    const fetchData = async () => {
      const filterNumber = "&amount=" + settings.number;
      const filterCategory =
        "&category=" + (settings.category === "Sports" ? 21 : 22);
      const filterDifficulty =
        "&difficulty=" + settings.difficulty.toLowerCase();
      const response = await fetch(
        `${apiUrl}${filterNumber}${filterCategory}${filterDifficulty}`
      );
      const data = await response.json();
      setQuestions(data.results);
    };
    fetchData();
  }, [settings]);
console.log(questions);

  return (
    <div className="bg-quiz">
      <div className="container questions">
        {questions.map(question => 
           <Question
            key={question.question}
            category={question.category}
            type={question.type}
            difficulty={question.difficulty}
            question={question.question}
            correctAnswer={question.correctAnswer}
            incorrectAnswers={question.incorrectAnswers}
          />
        )}
        {/* TODO #7++
        /// Afegeix aquí un map sobre `questions` de tal manera que per cada element insereixi un
        /// component Question amb les propietats (key + 6) informades adequadament. 
        Añade aquí un map sobre `questions` de tal modo que por cada elemento inserte un
 /// componente Question con las propiedades (key + 6) informadas adecuadamente.*/}
      </div>
    </div>
  );
};

export default Questions;
