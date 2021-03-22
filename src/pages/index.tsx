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

import { Note } from '../components/Note';

interface Props {
  notes: Array<{
    _id: string;
    title: string;
    description: string;
    note_index: string;
  }>
}

export default function Home(props: Props) {
  const [theme, setTheme] = useState(light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const {title, description} = useContext(TextContext)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Siderbar toggleTheme={toggleTheme} />
        <TextProvider
          notes={props.notes}
        >
          <Container>
            <main>
              <section>
                <Note />
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
