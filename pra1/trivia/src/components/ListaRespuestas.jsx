import Respuesta from "./Respuesta";

const ListaRespuestas = () => {
  const preguntas = [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Sports",
      question:
        "Who won the 2017 Formula One World Drivers&#039; Championship?",
      correct_answer: "Lewis Hamilton",
      incorrect_answers: ["Sebastian Vettel", "Nico Rosberg", "Max Verstappen"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Sports",
      question: "Who won the UEFA Champions League in 2017?",
      correct_answer: "Real Madrid C.F.",
      incorrect_answers: ["Atletico Madrid", "AS Monaco FC", "Juventus F.C."],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Sports",
      question: "Which team won 2014 FIFA World Cup in Brazil?",
      correct_answer: "Germany",
      incorrect_answers: ["Argentina", "Brazil", "Netherlands"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Sports",
      question: "What year did the New Orleans Saints win the Super Bowl?",
      correct_answer: "2010",
      incorrect_answers: ["2008", "2009", "2011"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Sports",
      question:
        "Which driver has been the Formula 1 world champion for a record 7 times?",
      correct_answer: "Michael Schumacher",
      incorrect_answers: ["Ayrton Senna", "Fernando Alonso", "Jim Clark"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Sports",
      question: "Who won the 2016 Formula 1 World Driver&#039;s Championship?",
      correct_answer: "Nico Rosberg",
      incorrect_answers: ["Lewis Hamilton", "Max Verstappen", "Kimi Raikkonen"],
    },
  ];
  return (
    <div id="lista-respuestas" className="borde-rojo">
      <Respuesta />
      <Respuesta />
      <Respuesta />
      <Respuesta />


    </div>
  );
};

export default ListaRespuestas;
