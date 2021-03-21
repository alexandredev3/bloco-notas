import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  

.container {
  width: 100%;
  height: 100%;
  
  background-color: #252529;

  margin: auto;

  display: flex;
  justify-items: center;
  justify-content: center;
}

.form-container {
  width: 80%;

  margin: 5.5rem auto;

  /* background-color: green; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.box-container {
  width: 35%;

  background-color: rgba(255, 255, 255, 0.03);

  /* border: .1rem solid gray; */
  border-radius: 1rem;

  margin: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.description h2 {
  margin: 1.5rem auto;

  text-align: center;

  color: #fff;

  font-family: 'Nunito', sans-serif;
  font-size: 2rem
}
form {
  /* background: rgba(255, 255, 255, 0.03); */

  width: 70%;
  max-width: 1000px;

  /* margin: 32px auto; */
  padding: 32px 34px;

  border-radius: .5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
label {
  width: 100%;
  font-size: 1.2rem;
  font-family: 'Nunito', sans-serif;

  color: #fff;
}
input {
  /* reset appeareance */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  /* box */
  width: 100%;

  padding: 14px 0;

  border: none;
  border-bottom: 1px solid #fd951f;

  background-color: transparent;

  outline: none;

  /* text */
  color: #f0f0f5;
  font-size: 1em;
}
input ~ label {
  position: absolute;
  top: 16px;
  left: 0;

  color: rgba(255, 255, 255, 0.6) ;

  transition: .4s;
}
input ~ label {
  position: absolute;
  top: 16px;
  left: 0;

  color: rgba(255, 255, 255, 0.6) ;

  transition: .4s;
}

input:focus ~ label,
input:valid ~ label {
  transform: translateY(-24px);
  font-size: 0.8em;
  letter-spacing: 0.1em;
}
div.input {
  margin-bottom: 24px;
  position: relative;
}
button {
  margin: 2.5rem 0;

  width: 100%;

  padding: 1rem;

  border: 0;

  cursor: pointer;

  background: #3CDC8C;
  box-shadow: 1px 1px .5rem 1px rgba(0,0,0,0.05);

  border-radius: .5rem;
  color: white;

  font-size: 1rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color .2s;
}
button:hover {
  background: #36CF82;
}

span {
  background:#e74d47;
  width:fit-content;
  height:fit-content;
  line-height:5vh;
  padding-right:2vw;
  padding-left:2vw;
  border-radius: .5rem;

  display: flex;
  align-items: center;
  svg {
    margin: auto .4rem;
  }

  p {
    /* margin: auto .5rem; */

    color: white;

    font-size: 15px;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
  
  }
}

`;