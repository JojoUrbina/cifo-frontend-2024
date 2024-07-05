const Footer = () => {
  return (
    // TODO #2    
    // Podem eliminar l'etiqueta footer i simplement retornar els dos paràgrafs?
    //No, la funcion debe retornar una solo elemento que contenga los demas, si quitamos el footer se enviarian dos parrafos lo que no es permitido en react.
    // Quina precaució hauríem de tenir si volguéssim fer-ho? (Pista: React.Fragment)
    //agregar una etiqueta React.fragment, basicamente no sera renderizada en la interfaz pero si podra mostrar las etiquetas de parrafo.
    <footer>
      <p>Instapicsum by CIFO L&apos;Hospitalet</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis necessitatibus aut aliquam at,
        exercitationem voluptas voluptates nihil doloremque deserunt, nesciunt eius expedita dolor quia pariatur fugit
        beatae? Necessitatibus, beatae.
      </p>
    </footer>
  )
}

export default Footer
