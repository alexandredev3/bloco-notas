import React, { useContext, useEffect, useRef, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import Router from 'next/router'
import Link from 'next/link'

import api from '../services/api'

import Cookies from 'js-cookie'

import { Container } from '../styles/pages/Login';
  import { Button } from '../components/Button/Button'


export default function Login() {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [message, setMessage] = useState(null);

  function formChange(event: any) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    await api.post(
      'http://localhost:3000/api/controllers/userController/login', form).then(response => {
      setMessage(response.data.message)

      Cookies.set('authorization', String(response.data.token))

      console.log(response.headers)
      console.log(response.config.headers)

      console.log('token no cookie:', Cookies.get('authorization'))
      
    }).catch(error => {
      const message = error.resonse.data
      setMessage(message)
    })
  }

  // api.defaults.headers.authorization = "Bearer " + Cookies.get('authorization');

  return (
      <Container>
        <div className="container">
          <div className="form-container">
            <div className="box-container">
              <div className="description">
                <h2>Login</h2>
              </div>
              {!message ? null : <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 22C6.46846 21.9945 1.99632 17.5149 2 11.9933C2.00368 6.47179 6.48179 1.99816 12.0033 2C17.5249 2.00184 22 6.47845 22 12C21.9967 17.5254 17.5154 22.0022 11.99 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.6845 16.444 4.10977 12.0425 4.08599C7.64111 4.06245 4.04732 7.59876 4 12V12.172ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="white" />
                </svg>
                <p>{message}</p>
              </span>}
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <input name="email" autoComplete="off" type="text" onChange={formChange} required />
                  <label htmlFor="">Email</label>
                </div>

                <div className="input">
                  <input name="password" autoComplete="off" type="password" onChange={formChange} required />
                  <label htmlFor="">Password</label>
                </div>

                <button type="submit">ENTRAR</button>
              </form>
            </div>
          </div>
        </div>
        <Button/>
      </Container>
  )
};