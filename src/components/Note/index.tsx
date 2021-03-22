import { useContext } from 'react'

import Textcard from '../Textcard/Textcard';
import { TextContext } from '../../context/TextContext';
import { TextCardProps } from '../Textcard/Textcard'

export function Note() {
  const { notesState } = useContext(TextContext);

  return (
    <>
      {notesState.length === 0 ? <h2 
      style={{ color: '#fff' }}>
        No notes
        </h2> :
        notesState.map((note: TextCardProps) => {
          return (
            <Textcard 
            note_index={note.note_index} 
            key={note._id} 
            _id={note._id} 
            title={note.title} 
            description={note.description} />
          )
        }
        )
      }
    </>
  );
}