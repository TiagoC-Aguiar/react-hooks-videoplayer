import styled from 'styled-components'

const StyledWbnPlayer = styled.div`
  background: ${props => props.theme.bgcolor};
  border: ${props => props.theme.border};
  max-width: 1800px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-diretion: row;
  max-height: 863px;
  transition: all .5s ease;

  @media screen and (max-width: 1400px) {
    display: block;
    max-height: 10000px;
  }
`

export default StyledWbnPlayer
