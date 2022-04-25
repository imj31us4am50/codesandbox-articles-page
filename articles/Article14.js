import ArticleCSS from "/articles/Article.css";
import JavaScript from "/mainpage/script.js";

export default function Article14() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup14"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/clownfish-in-the-reef.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Peștii clovn și anemonele.</h5>
            <p className="styling-for-article-paragraph">
              Peștele clovn are o culoare portocalie strălucitoare, cu trei
              dungi albe. Peștele Clovn poartă și numele de peștele anemonă,
              datorită relației speciale pe care o are cu această plantă.
              Această specie de pește se adaptează repede la mediul în care
              trăiește și de aceea se poate lipsi de anemonă. Peștele clovn se
              hrănește atât cu alge cât și cu carne, ceea ce ne spune despre el
              că este un pește omnivor. Cele mai mari amenințări la adresa
              peștilor clovni sunt poluarea oceanului, pescuitul în exces și
              distrugerea habitatului.
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup14" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/clownfish-in-the-reef.mp4"
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
                  Peștii clovn și anemonele.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Peștele clovn are o culoare portocalie strălucitoare, cu trei
                  dungi albe. Peștele Clovn poartă și numele de{" "}
                  <b>peștele anemonă</b>, datorită{" "}
                  <b>relației speciale pe care o are cu această plantă</b>.
                  Această specie de pește se adaptează repede la mediul în care
                  trăiește și de aceea se poate lipsi de anemonă.
                  <br /> Peștele clovn se hrănește atât cu alge cât și cu carne,
                  ceea ce ne spune despre el că este un pește omnivor. Cele mai
                  mari amenințări la adresa peștilor clovni sunt poluarea
                  oceanului, pescuitul în exces și distrugerea habitatului.
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
                  <a href="#popup1" id="like-el">
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
