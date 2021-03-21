import styled from 'styled-components'

export const Container = styled.div`
  width: 10rem;
  height: 100vh;

  position: fixed;

  background: ${props => props.theme.colors.sidebar.background};
  
  transition: background 1000ms;
  
  display: flex;

  .container {
    flex: 1;

    display: flex;
    justify-content: space-between;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  header img {
    width: 80%;

    border: 3px solid #919191;
    border-radius: 5rem;

    transition: background 1000ms;
  }

  header h3 {
    margin: .7rem auto;
    color: ${props => props.theme.colors.text.color};
    transition: color 1000ms;
  }

  main {
    margin: 0 0 5rem 0;

    display: flex;
    justify-content: center;
  }
  main ul li {
    width: 100%;

    list-style: none;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  main a {
    font-family: 'Inter', sans-serif;
    font-weight: 600;

    color: ${props => props.theme.colors.text.color};
    transition: color 1000ms;

    margin: 1rem;
  }

  main a:hover {
    
  }

  footer {
    display: flex;
    justify-content: center;
  }
  footer button {
    width: 2rem;

    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  footer button svg {
    width: 100%;

  }
`;