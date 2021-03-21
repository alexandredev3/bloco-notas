import axios from "axios";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { TextCreateModal } from "../components/TextCreateModal/TextCreateModal";
import { TextEditModal } from "../components/TextEditModal/TextEditModal";

interface TextContextData {
  isOpenTextEditModal: boolean;
  openTextCreateModal: () => void;
  closeTextCreateModal: () => void;
  openTextEditModal: (note_index: string , _id: string, title: string, description: string) => void;
  closeTextEditModal: () => void;
  id: string;
  title: string;
  description: string;
  note_index: string;
}

interface TextProviderProps {
  children: ReactNode
}

export const TextContext = createContext({} as TextContextData)

export function TextProvider({ children }: TextProviderProps) {
  const [isOpenTextCreateModal, setIsOpenTextCreateModal] = useState(false)
  const [isOpenTextEditModal, setIsOpenTextEditModal] = useState(false)

  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [note_index, setNode_index] = useState("")

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

  return (
    <TextContext.Provider value={{
      isOpenTextEditModal,
      openTextCreateModal,
      closeTextCreateModal,
      openTextEditModal,
      closeTextEditModal,
      id,
      title,
      description,
      note_index
    }}>
      {children}
      { isOpenTextCreateModal && <TextCreateModal /> }
    </TextContext.Provider>
  )
}