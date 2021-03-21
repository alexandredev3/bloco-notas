import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { TextContext } from "../../context/TextContext";
import { Overlay } from "./textEditModal";
import { User } from "./../../utils/models/User";
import Link from 'next/link'

import { TextCardProps } from '../Textcard/Textcard'
import api from "../../services/api";
import { Router } from "next/router";


export function TextEditModal(note: TextCardProps) {
const { closeTextEditModal } = useContext(TextContext)

const [form, setForm] = useState({
  note_index: note.note_index,
  title: note.title,
  description: note.description,
})

function formChange(event) {
  setForm({ ...form, [event.target.name]: event.target.value })
}
async function handleSubmit(event) {
  event.preventDefault();

  await axios.put('/api/controllers/noteController/editNote', form).then(response => {
    console.log(response)
    if (response) {
      closeTextEditModal()
    }
  }).catch(error => {
    console.error(error)
  })
}

async function handleDelete(event) {
  event.preventDefault()

  const data = {
    _id: note._id,
  }

  await api.post('/api/controllers/noteController/deleteNote', data).then(response => {
    console.log(response)
    if (response) {
      return closeTextEditModal()
    }
  })
}

const handleKeyUp = useCallback((event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget
  
  event.currentTarget.maxLength = 17
}, [])

return (
<Overlay>
    <div className="overlay">
      <div className="container">
        {/* <h2>Nova nota</h2> */}
        <form onSubmit={handleSubmit}>
          <header>
            <label>Nome</label>
            <input name="title" type="text" value={form.title} onChange={formChange} onKeyUp={handleKeyUp} autoComplete="off" required/>
            {/* <input name="title" className="id" type="text" value={form.note_index} onKeyUp={handleKeyUp} autoComplete="off" required/> */}
          </header>

          <section>
            <label htmlFor="">Texto</label>
          <textarea name="description" id="description" value={form.description} onChange={formChange} required />
          </section>

          <div className="buttons">
          <button type="button" className="bnt-del" onClick={handleDelete}>
              Deletar
        </button>
            <button type="submit">
              Salvar
            </button>
          </div>
        </form>
        <div className="bnt-close">
          <button type="button" onClick={closeTextEditModal}>
              <img src="/icons/close.svg" alt="Fechar modal" />
            </button>
          </div>
      </div >
    </div >
  </Overlay>
)
}