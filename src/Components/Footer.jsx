/** @format */
import * as S from "../styles/Styled-Footer";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <S.Footer>
      <section>
        <figure>
          <img src={logo} alt="logo" />
        </figure>

        <ul>
          <li>© Microsoft 2022</li>
          <li>Todos os direitos reservados</li>
        </ul>
      </section>
    </S.Footer>
  );
}
