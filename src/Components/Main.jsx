/** @format */
import * as S from "../styles/Styled-Main";
import { AiFillCaretDown } from "react-icons/ai";

import farcry from "../assets/farcry.png";
import forza from "../assets/forza.png";
import fifa from "../assets/fifa.png";
import mine from "../assets/mine.png";
import console from "../assets/xbox.png";
import controle from "../assets/controle-xbox.png";

export default function Main() {
  return (
    <main>
      <S.FirstContainer>
        <S.BoxInicio>
         <S.BoxTitle>
          <h1>Xbox series X</h1>
          <h3>PEDIDO ANTECIPADO</h3>
          </S.BoxTitle>
          <img src={console} alt="" />
        </S.BoxInicio>
         <S.BoxControle>
          <div>
          <h2>Desempenho aperfeiçoado</h2>
          <p>O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</p>
          </div>
          <img src={controle} alt="" />
         </S.BoxControle>
      </S.FirstContainer>
      <section>
        <S.Games>
          <img src={farcry} alt="game" />
          <img src={forza} alt="game" />
          <img src={fifa} alt="game" />
          <img src={mine} alt="game" />
        </S.Games>

        <S.Perguntas>
          <div>
            <S.SubTitle>
              <span>Perguntas</span> frequentes
            </S.SubTitle>
            <S.Detalhes>
              <details>
                <summary>
                  Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?
                  <AiFillCaretDown />
                </summary>
                <p>Lorem ipsum dolor sit amet.</p>
              </details>
              <details>
                <summary>
                  O que está incluído no Xbox Series X? <AiFillCaretDown />
                </summary>
                <p>Lorem ipsum dolor sit amet.</p>
              </details>
              <details>
                <summary>
                  Como sei se minha TV é compatível com 4K? <AiFillCaretDown />
                </summary>
                <p>Lorem ipsum dolor sit amet.</p>
              </details>
            </S.Detalhes>
          </div>
        </S.Perguntas>
      </section>
    </main>
  );
}
