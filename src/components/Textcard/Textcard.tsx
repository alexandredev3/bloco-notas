import { useCallback, useContext, useState } from "react";
import { TextContext } from "../../context/TextContext";
import { TextEditModal } from "../TextEditModal/TextEditModal";
import { Container } from "./textcard";

export interface TextCardProps {
  note_index: string;
  _id: string;
  title: string;
  description: string;
}

export default function Textcard(note: TextCardProps) {
  const [form, setForm] = useState({
    title: note.title,
    description: note.description
  })

  const {
    openTextEditModal,
    isOpenTextEditModal,
    id,
    title,
    description,
    note_index
  } = useContext(TextContext)

  return (
    <>
      <Container>
        <div className="container">
          <div className="title">
            <h2>{note.title}</h2>
            <button 
            onClick={
              () => openTextEditModal(
                note.note_index, 
                note._id, 
                note.title, 
                note.description
                )}>
              <img src="icons/edit.svg" alt="" />
            </button>
          </div>
          <div className="description">
            <textarea 
            name="description" 
            id="description" 
            cols={30} 
            rows={10} 
            value={note.description} 
            readOnly={true} />
          </div>
          <button>Ver mais</button>
        </div>
      </Container>
      { isOpenTextEditModal && <TextEditModal 
      note_index={note_index} 
      _id={id} 
      description={description} 
      title={title} />}
    </>
  )
}