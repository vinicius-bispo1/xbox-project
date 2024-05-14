/** @format */
import * as S from "../styles/Styled-Main";

import farcry from "../assets/farcry.png";
import forza from "../assets/forza.png";
import fifa from "../assets/fifa.png";
import mine from "../assets/mine.png";

export default function Main() {
  return (
    <main>
      <section>
        <S.Games>
          <img src={farcry} alt="game" />
          <img src={forza} alt="game" />
          <img src={fifa} alt="game" />
          <img src={mine} alt="game" />
        </S.Games>

        <S.Perguntas>
          <div>
            <h3>
              <span>Perguntas</span> frequentes
            </h3>
            <S.Detalhes>
              <details>
                <summary>
                  Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?
                </summary>
                <p>Lorem ipsum dolor sit amet.</p>
              </details>
              <details>
                <summary>O que está incluído no Xbox Series X?</summary>
                <p>Lorem ipsum dolor sit amet.</p>
              </details>
              <details>
                <summary>Como sei se minha TV é compatível com 4K?</summary>
                <p>Lorem ipsum dolor sit amet.</p>
              </details>
            </S.Detalhes>
          </div>
        </S.Perguntas>
      </section>
    </main>
  );
}
