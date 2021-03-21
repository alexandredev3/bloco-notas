import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  height: 19rem;

  background: #ababab;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 1rem .1rem;

  border-radius: .3rem;

  .container {
    width: 100%;
    max-width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    width: 100%;
    max-width: 100%;
    /* height: 100%; */
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title button {
    /* width: 1rem; */

    position: relative;

    /* display:none; */

    background: transparent;  
    outline: none;
    border: 0px solid #d6be5c;
  }

  .title h2 {
    color: ${props => props.theme.colors.text.color};
    transition: color 1000ms;
  }

  .description {
    width: 100%;
    max-width: 100%;
    height: 100%;

    margin-bottom: 1rem;

    display: flex;
    justify-content: center;

    word-wrap: break-word
  }

  .description textarea {
    width: 100%;
    max-width: 100%;
    /* max-height: 85%; */

    padding-left: 1rem;
    margin: .1rem auto;

    background: none;

    border: none;
    border-radius: .2rem;

    outline: none;

    overflow-x: auto;

    resize: none;
  }

  button {
    width: 5%;

    font: 1rem 600 'Inter', sans-serif;

    background: transparent;
    border: none;
  }
`;