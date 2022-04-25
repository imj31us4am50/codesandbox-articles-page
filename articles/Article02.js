import ArticleCSS from "/articles/Article.css";
import JavaScript from "/mainpage/script.js";

export default function Article02() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup2"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/butterfly-on-a-pink-flower.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Fluture Monarh pe o floare.</h5>
            <p className="styling-for-article-paragraph">
              Fluturele monarh este o insectă zburătoare aparținând familiei
              Nymphalidae. Se caracterizează prin modelele colorate ale aripilor
              sale, distingând tonurile portocalii și negre. Schimbările
              climatice au avut un "impact considerabil" asupra pattern-ului de
              migraţie al fluturilor monarh, dar şi asupra habitatului lor de
              creştere din Statele Unite. De asemenea, este posibil ca toți
              oamenii cărora le pasă cel mai mult de monarhi să contribuie la
              dispariția lor. Impactul a 300.000 de picioare pe traseele montane
              abrupte provoacă o eroziune considerabilă a solului. Mulți turiști
              călătoresc călare, ridicând praful care blochează spiraculele și
              sufocă literalmente fluturii.
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup2" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/butterfly-on-a-pink-flower.mp4"
                className="o mt-1"
                controls
                muted
                autoPlay
                loop
              />
            </div>
            <div className="popup-desc-cont p-4 pt-5">
              <div className="popup-text">
                <h1 className="popup-title text-wrap m-0">
                  Fluture Monarh pe o floare.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Fluturele monarh este o insectă zburătoare aparținând familiei
                  Nymphalidae. Se caracterizează prin modelele colorate ale
                  aripilor sale, distingând tonurile portocalii și negre.
                  <br /> Schimbările climatice au avut un "impact considerabil"
                  asupra pattern-ului de migraţie al fluturilor monarh, dar şi
                  asupra habitatului lor de creştere din Statele Unite.
                  <br /> De asemenea, este posibil ca toți oamenii cărora le
                  pasă cel mai mult de monarhi să contribuie la dispariția lor.
                  Impactul a 300.000 de picioare pe traseele montane abrupte
                  provoacă o eroziune considerabilă a solului. Mulți turiști
                  călătoresc călare, ridicând praful care blochează spiraculele
                  și sufocă literalmente fluturii.
                </p>
              </div>
              <div className="lower-part">
                <div className="popup-leave-a-comment">
                  <input
                    type="text"
                    className="mx-auto"
                    placeholder="Scrie un comentariu..."
                    spellCheck="false"
                    maxLength="100"
                  />
                </div>
                <div className="container-of-like">
                  <a href="#popup2" id="like-el">
                    <img
                      src="https://imj31us4am50.github.io/imgs/not-liked-icon.png"
                      className="like-icon"
                      id="img-el"
                      onClick={() => {
                        let likeContainer = document.getElementById("like-el");
                        let imageEl = document.getElementById("img-el");

                        if (likeContainer) {
                          likeContainer.addEventListener("click", function () {
                            if (
                              imageEl.src ==
                              "https://imj31us4am50.github.io/imgs/not-liked-icon.png"
                            ) {
                              imageEl.src =
                                "https://imj31us4am50.github.io/imgs/liked-icon.png";
                            } else {
                              imageEl.src =
                                "https://imj31us4am50.github.io/imgs/not-liked-icon.png";
                            }
                          });
                        }
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
