import ArticleCSS from "/articles/Article.css";
import JavaScript from "/mainpage/script.js";

export default function Article15() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup15"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/cow-ihope-on-beach.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Vaca: animalul domestic subapreciat.</h5>
            <p className="styling-for-article-paragraph">
              Vaca este doica omenirii. Vacile furnizează 90% din cantitatea de
              lapte ce se consumă la nivel mondial. Cu toate acestea, sunt
              foarte puțini cei care se interesează de cât de minunate sunt
              aceste animale. De cele mai multe ori sunt asociate cu banalul sau
              cu prostia. Care este realitatea? Vacile sunt inteligente,
              curioase şi au chiar o gândire critică, putând rezolva cu uşurinţă
              probleme. Studiile au arătat că ele pot învăţa prin asociere,
              fiind capabile să reţină greşelile din trecut, astfel încât să le
              evite pe viitor. Vacile îşi iubesc enorm vițeii. Cea mai strânsă
              relaţie care se leagă între vaci este cea între vacă și vițel.
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup15" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/cow-ihope-on-beach.mp4"
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
                  Vaca: animalul domestic subapreciat.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  <b>Vaca este doica omenirii.</b> Vacile furnizează 90% din
                  cantitatea de lapte ce se consumă la nivel mondial. Cu toate
                  acestea, sunt foarte puțini cei care se interesează de cât de
                  minunate sunt aceste animale. De cele mai multe ori sunt
                  asociate cu banalul sau cu prostia.
                  <b> Care este realitatea?</b>
                  <br /> Vacile sunt inteligente, curioase şi au chiar o gândire
                  critică, putând rezolva cu uşurinţă probleme. Studiile au
                  arătat că ele pot învăţa prin asociere, fiind capabile să
                  reţină greşelile din trecut, astfel încât să le evite pe
                  viitor. Vacile îşi iubesc enorm vițeii.
                  <br /> Cea mai strânsă relaţie care se leagă între vaci este
                  cea între vacă și vițel.
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
