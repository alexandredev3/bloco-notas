import axios from "axios";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { TextCreateModal } from "../components/TextCreateModal/TextCreateModal";
import { TextEditModal } from "../components/TextEditModal/TextEditModal";

interface Note {
  _id: string;
  title: string;
  description: string;
  note_index: string;
}

interface TextContextData {
  isOpenTextEditModal: boolean;
  openTextCreateModal: () => void;
  closeTextCreateModal: () => void;
  openTextEditModal: (note_index: string , _id: string, title: string, description: string) => void;
  handleUpdateNote: (form: {
    note_index: string, title: string, description: string
  }) => Promise<void>;
  handleCreateNote: (form: {
    title: string, description: string
  }) => Promise<void>;
  handleDeleteNote: (id) => Promise<void>;
  closeTextEditModal: () => void;
  id: string;
  title: string;
  description: string;
  note_index: string;
  notesState: Note[];
}

interface TextProviderProps {
  children: ReactNode;
  notes: Note[];
}

export const TextContext = createContext({} as TextContextData)

export function TextProvider({ children, notes }: TextProviderProps) {
  const [isOpenTextCreateModal, setIsOpenTextCreateModal] = useState(false)
  const [isOpenTextEditModal, setIsOpenTextEditModal] = useState(false)

  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [note_index, setNode_index] = useState('')
  const [notesState, setNotesState] = useState(notes);

  function openTextCreateModal() {
    setIsOpenTextCreateModal(true)
  }

  function closeTextCreateModal() {
    setIsOpenTextCreateModal(false)
  }
  
  function openTextEditModal(note_index: string, _id: string, title: string, description: string) {
    setId(_id)
    setTitle(title)
    setDescription(description)
    setNode_index(note_index)

    setIsOpenTextEditModal(true)
  }

  function closeTextEditModal() {
    setIsOpenTextEditModal(false)
  }

  async function handleUpdateNote(form) {
    await axios.put('/api/controllers/noteController/editNote', form).then(response => {
      console.log(response)

      const updatedNotes = notesState.map((note) => {
        const { note_index, title, description } = form; 

        if (note.note_index === note_index) {
          return {
            _id: note._id,
            title,
            description,
            note_index,
          };
        }

        return note;
      });

      setNotesState(updatedNotes);
      closeTextEditModal()

    }).catch(error => {
      console.error(error)
    });
  }

  async function handleCreateNote(form) {
    try {
      const response = await axios.post('/api/controllers/noteController/createNewNote', form) 

      const { data } = response;

      setNotesState(data.note);
      closeTextCreateModal();
    } catch(err) {
      console.error(err)
    }
  }

  // quando tiver a rota que delata vai ser isso.
  async function handleDeleteNote(id: string) {
    await axios.post('/api/controllers/noteController/deleteNote', { _id: id }).then(response => {
      
      // apenas me retornar os notes que são diferentes do id passado pelo parametro.
      const notesFiltered = notesState.filter((note) => note._id !== id);

      setNotesState(notesFiltered);
      closeTextEditModal();
    }).catch(error => {
      console.error(error)
    });
  }

  return (
    <TextContext.Provider value={{
      isOpenTextEditModal,
      openTextCreateModal,
      closeTextCreateModal,
      openTextEditModal,
      closeTextEditModal,
      handleUpdateNote,
      handleCreateNote,
      handleDeleteNote,
      id,
      title,
      description,
      note_index,
      notesState,
    }}>
      {children}
      { isOpenTextCreateModal && <TextCreateModal /> }
    </TextContext.Provider>
  )
}