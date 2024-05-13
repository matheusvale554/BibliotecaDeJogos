import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewGameForm.PropTypes ={
    addGame:PropTypes.func
}
export default function NewGameForm({addGame}) {
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handleSubmit = (ev) =>{
        ev.preventDefault();
        if (title.trim() !== "" && cover.trim() !== "") {
            addGame({ title, cover });
            setTitle("");
            setCover("");
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextInput id="title" label="Titulo: " value={title} setValue={setTitle} />
            <TextInput id="cover" label="Link da capa cole abaixo:https://abrir.link/wZRot" value={cover} setValue={setCover} />
            <button type="submit">Adicionar a biblioteca</button>
        </form>
    )
}