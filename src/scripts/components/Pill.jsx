import React from "react"

const Pill = ({active, text, onClick}) => {
  return (
    <button className={`btn border ${active ? "bg-secondary" : "bg-white"}`} onClick={onClick}>
      <h4 className={active ? "text-white": "text-primary"} dangerouslySetInnerHTML={{__html: text}}></h4>
    </button>
  )
}

export default Pill;
