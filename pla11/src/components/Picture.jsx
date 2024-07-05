const Picture = ({ photo, author, timestamp }) => {
  const photoTime = new Date(timestamp);
  const today = new Date();
  const diffTime = Math.abs(today - photoTime);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diferenciaDeDias = diffDays - 3; // se restan 3 dias para simular el dia 0 y 1

  function elegirTextoPorDiferenciaDias(diferenciaDeDias) {
    //Cual seria la forma mas util? creo que usar la funcion pero teniendo en cuenta que tienen condicionales, es mas facil leerlo, pero la otra forma tambien la veo correcta, el feedback siempre suma, solo me parecio interesante alternar los textos y definirlos con anterioridad.
    if (diferenciaDeDias > 1) return "days ago"
    if (diferenciaDeDias === 0)return "today"
    if (diferenciaDeDias === 1) return "yesterday"
  }

  const textHoy = diferenciaDeDias === 0 && "today";
  const textYesterday = diferenciaDeDias === 1 && "yesterday";
  const todayYesterdayOrDaysAgo = textHoy || textYesterday || "days ago"// O esta funcion y dara el mismo resultado elegirTextoPorDiferenciaDias(diferenciaDeDias)

  return (
    // TODO #11
    // Afegeix la classe de CSS picture on correspongui.
    <div>
      <figure>
        <img src={photo} alt={`Uploaded by ${author}`} className="picture" />
        <figcaption>
          {/* TODO #12
          /// Añade el contenido de figcaption para que muestre el siguiente texto: /// Posted [n] days ago by [nombre autor fotografía] /// Puedes hacer que ponga today y yesterday en vez de "0 days ago" y "1 day ago" ?*/}
          {`Posted ${diferenciaDeDias <= 1 ? "" : diferenciaDeDias} ${todayYesterdayOrDaysAgo} by ${author}`}
        </figcaption>
      </figure>
    </div>
  );
};

export default Picture;
