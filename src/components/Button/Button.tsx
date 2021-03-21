import { useContext } from "react";
import { TextContext } from "../../context/TextContext";
import { Container } from "./button";

export function Button() {
  const {openTextCreateModal} = useContext(TextContext)
  return (
    <>
    <Container>
      <button type="button" onClick={openTextCreateModal}>
          <img src="icons/plus.svg" alt=""/>
        </button>
    </Container>
    </>
  )
}