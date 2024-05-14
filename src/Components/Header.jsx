import logo from '../assets/logo.png'
import * as S from '../styles/Styled-Header'

export default function Header() {
  return (
    <S.Header>
        <S.Container>
        <S.BoxMenu>
            <img src={logo} alt="Logo do xbox" />
            <S.Menu>
                <S.Lista cor="#67676763" largura="7.1vw">VISÃO GERAL</S.Lista>
                <S.Lista largura="4.3vw">JOGOS</S.Lista>
                <S.Lista largura="5vw">GALERIA</S.Lista>
                <S.Lista largura="4.4vw">UNBOX</S.Lista>
            </S.Menu>
        </S.BoxMenu>
        <a href="">VER DISPONIBILIDADE</a>
        </S.Container>
    </S.Header>
  )
}
