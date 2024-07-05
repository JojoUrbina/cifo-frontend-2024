import { useState } from 'react'

const CommentForm = ({ storyId, onAddComment }) => {
  const [text,setText] = useState("")

  // TODO #7
  // Fes servir el hook adequat per gestionar un estat amb nom `text`.

  // TODO #8
  // Implementa aquesta funció per tal que:
  // 1) eviti que es refresqui la pàgina (és el que voldrà fer el formulari per defecte),
  // 2) comprovi que l'estat text no és buit,
  // 3) compruebe que el estado texto no está vacío, // 3) si no lo es: // 3.1) utilice la función recibida como cerca en este componente para añadir el comentario, // 3.2) deje de nuevo vacío el cuadro de texto.
  const onSubmit = (e) => {

    e.preventDefault()
    if (!text) return

    onAddComment(storyId,text)
    setText("")
  }

  return (
    <form onSubmit={onSubmit}>
      {/* TODO #9*
      /// Un dels quatre atributs d'aquest input té un problema evident que cal arreglar.*/}
      <input type='text' placeholder='Join the conversation' value={text} onChange={(e) => setText(e.target.value)} />
      <input type='submit' value='Say it' className='btn btn-block' />
    </form>
  )
}

export default CommentForm
