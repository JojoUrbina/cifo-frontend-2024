const Instrucciones = () => {
  return (
    <div className="container-instrucciones">
      <h2 className="text-center">Instrucciones para la Trivia</h2>

      <p className="instrucciones">
        Responde cada pregunta seleccionando la opción que consideres correcta.
        Al final de la partida, verás tus estadísticas y resultados.
      </p>
      <p className="instrucciones">
        Puedes hacer clic en el título <strong>"Trivia 3.0"</strong> para
        finalizar la partida actual y ver los resultados.
      </p>
      <p className="instrucciones">
        En los resultados, puedes reiniciar la partida haciendo clic en el botón
        de reiniciar. Esto restablecerá tus estadísticas y cargará nuevas
        preguntas.
      </p>
      <p className="instrucciones">
        Utiliza las configuraciones para personalizar tu experiencia de trivia,
        incluyendo el número de preguntas, la categoría y la dificultad.
      </p>

      <p className="instrucciones">
        Haz clic en el texto de <strong>categoría </strong>o
        <strong> dificultad</strong> para alternar entre mostrar la categoría de
        las preguntas y la dificultad.
      </p>
      <p className="instrucciones">
        Tus estadísticas se guardarán automáticamente en el almacenamiento local
        de tu navegador, por lo que podrás ver tu progreso y récords en futuras
        sesiones.
      </p>
      <p className="instrucciones">
        ¡Diviértete y pon a prueba tus conocimientos en diferentes categorías!
      </p>
    </div>
  );
};

export default Instrucciones;
