import axios from "axios";
import { useContext, useState } from "react";
import { TextContext } from "../../context/TextContext";
import { Overlay } from "./textCreateModal";

export function TextCreateModal() {
  const { closeTextCreateModal } = useContext(TextContext)
  
  const [form, setForm] = useState({
    title: '',
    description: '',
  })

  function formChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post('/api/controllers/noteController/createNewNote', form).then(response => {
      console.log(response)
      if (response) {
        return closeTextCreateModal()
      }
    }).catch(error => {
      console.error(error)
    })
  }

  return (
  <Overlay>
      <div className="overlay">
        <div className="container">
          <h2>Nova nota</h2>
          <form onSubmit={handleSubmit}>
            <header>
              <label>Nome</label>
              <input name="title" type="text" onChange={formChange} required/>
            </header>

            <section>
              <label htmlFor="">Texto</label>
            <textarea name="description" id="description"  onChange={formChange} required />
            </section>

            <div className="buttons">
              <button type="submit">
                Criar nota
              </button>
            </div>
          </form>
          <div className="bnt-close">
            <button type="button" onClick={closeTextCreateModal}>
                <img src="/icons/close.svg" alt="Fechar modal" />
              </button>
            </div>
        </div >
      </div >
    </Overlay>
  )
}