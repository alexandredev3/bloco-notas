import { useContext, useState } from "react";
import { Container } from "./sidebar";
import { ThemeContext } from 'styled-components'
import { shade } from 'polished';
import Switch from 'react-switch';
import light from "../../styles/theme/light";
import { TextContext } from "../../context/TextContext";
import { UserContext, UserProvider } from "../../context/UserContext";
import { GetServerSideProps } from "next";
import api from "../../services/api";

interface Props {
  toggleTheme?: () => void;
}

export default function Siderbar({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext);
  const [username, setUsername] = useState('')

  async function getUser() {
    await api.get(
      'http://localhost:3000/api/controllers/userController/findUser'
      ).then(response => {
        setUsername(response.data.name)
      }).catch(error => {
        console.log(error)
      })
  }
  getUser()
  
  return (
      <Container>
        <div className="container">
          <header>
            <img src="https://github.com/FireShark688.png" alt=""/>
              <h3>{username}</h3>
          </header>
          <main>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Profile</a>
              </li>
            </ul>
          </main>
          <footer>
            <button onClick={toggleTheme} type="button">
              {toggleTheme ? (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22H9V20H15V22ZM15 19H9L8.777 17C8.65703 16.3385 8.45863 15.6936 8.186 15.079C7.832 14.579 7.463 14.152 7.106 13.735C5.79411 12.5053 5.03465 10.7978 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C18.9593 10.7868 18.2057 12.4831 16.907 13.711L16.89 13.731C16.534 14.148 16.166 14.58 15.819 15.075C15.5466 15.6912 15.3476 16.3373 15.226 17L15 19ZM12 4C9.23995 4.00331 7.00331 6.23995 7 9C7 10.544 7.644 11.293 8.618 12.428C8.988 12.86 9.408 13.348 9.818 13.919C10.3156 14.8858 10.6555 15.9259 10.825 17H13.176C13.3499 15.929 13.6892 14.8916 14.182 13.925C14.582 13.354 15.001 12.863 15.37 12.431L15.385 12.413C16.357 11.273 17 10.52 17 9C16.9967 6.23995 14.7601 4.00331 12 4Z" fill={colors.sidebar.button.color}/>
                </svg>
              ) : (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22H9V20H15V22ZM15 19H9L8.777 17C8.65703 16.3385 8.45863 15.6936 8.186 15.079C7.832 14.579 7.463 14.152 7.106 13.735C5.79411 12.5053 5.03465 10.7978 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C18.9593 10.7868 18.2057 12.4831 16.907 13.711L16.89 13.731C16.534 14.148 16.166 14.58 15.819 15.075C15.5466 15.6912 15.3476 16.3373 15.226 17L15 19ZM12 4C9.23995 4.00331 7.00331 6.23995 7 9C7 10.544 7.644 11.293 8.618 12.428C8.988 12.86 9.408 13.348 9.818 13.919C10.3156 14.8858 10.6555 15.9259 10.825 17H13.176C13.3499 15.929 13.6892 14.8916 14.182 13.925C14.582 13.354 15.001 12.863 15.37 12.431L15.385 12.413C16.357 11.273 17 10.52 17 9C16.9967 6.23995 14.7601 4.00331 12 4Z" fill={colors.sidebar.button.color}/>
                </svg>
              )}
            </button>
          </footer>
        </div>
      </Container>
  )
} 

const username = (props) => {
  const [ user, setUser ] = useState(props)
  console.log(user)
  return (
    <h3>{user.username}</h3>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await api.get(
    'http://localhost:3000/api/controllers/userController/findUser')
  console.log(response)
  return {
    props: {
      user: response.data
    }
  }
}