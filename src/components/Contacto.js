import styled from 'styled-components'

const Boton = styled.button`
  background-color: red;
  border: none;
  color: white;

  &:hover {
    background-color: blue;
    color: yellow;
  }
`;

const Contacto = () => {
  return (
    <Boton>Soy Contacto</Boton>
  )
}

export default Contacto
