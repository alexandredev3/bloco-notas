import { useContext, useState } from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/global';
import light from '../styles/theme/light'
import dark from '../styles/theme/dark'

import Siderbar from '../components/Sidebar/Sidebar'
import { Container } from '../styles/pages/Home';
import Textcard from '../components/Textcard/Textcard';
import { TextContext, TextProvider } from '../context/TextContext';
import { Button } from '../components/Button/Button';
import { GetServerSideProps } from 'next';
import Cookies from 'js-cookie'

import { TextCardProps } from '../components/Textcard/Textcard'
import api from '../services/api';

export default function Home(props) {
  const [theme, setTheme] = useState(light)
  const [notes, setNotes] = useState(props.notes)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const {title, description} = useContext(TextContext)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Siderbar toggleTheme={toggleTheme} />
        <TextProvider>
          <Container>
            <main>
              <section>
                {notes.length === 0 ? <h2 
                style={{ color: '#fff' }}>
                  No notes
                  </h2> :
                  notes.map((note: TextCardProps) => {
                    // console.log('note', note)
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
              </section>
              <div className="button">
                <Button />
              </div>
            </main>
          </Container>
        </TextProvider>
      </ThemeProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  api.defaults.headers.authorization = "Bearer " + ctx.req.cookies.authorization;

  const response = await api.get(
    'http://localhost:3000/api/controllers/noteController/findUserNote')
  // console.log(response)
  return {
    props: {
      notes: response.data
    },
  }
}
