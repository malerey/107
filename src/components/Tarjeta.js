import styled from 'styled-components'

// Styled Components
// CSS in JS

// CSS critico automatico 
// Bugs nombres de clases 
// Encontrar mas facil el CSS
// Estilado dinamico 

const Boton = styled.button`
  background-color: blue;
  border: ${props => props.primario ? '2px solid red' : 'none'};
  color: white;

  &:hover {
    background-color: white;
    color: blue;
  }
`;

const BotonComprar = styled(Boton)`
color: pink;
margin: 20px
`

// extend

const Titulo = styled.h2`
  color: orange;
  border: 2px spotted green;
`;

const TarjetaContainer = styled.article`
border: 1px solid black
`;

const Tarjeta = ({nombre}) => {

  console.log(nombre)

  const handleClick = () => {
    console.log("hola")
  }


  return (
    <TarjetaContainer>
      <Titulo>Hola</Titulo>
      <Boton primario onClick={handleClick} >Hola</Boton>
      <Boton>Chau</Boton>
      <BotonComprar>Comprar</BotonComprar>
    </TarjetaContainer>
  )
}

export default Tarjeta
