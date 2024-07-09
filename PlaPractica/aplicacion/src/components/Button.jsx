
const Button = () => {
    const onclick = () => {console.log("hola"); }

  return (
    <button onClick={onclick} className="btn">Add</button>
  )
}

export default Button