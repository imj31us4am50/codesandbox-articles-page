import ArticleCSS from "/articles/Article.css";

export default function Article16() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup16"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/crocodiles-in-water-pond.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Reptile in habitatul lor.</h5>
            <p className="styling-for-article-paragraph">
              Una din cele mai de temut reptile de pe întreaga planetă,
              crocodilul, este un animal străvechi, încă din epoca dinozaurilor,
              care și-a modificat foarte puțin aspectul de-a lungul timpului.
              Crocodilul este o reptilă de mari dimensiuni cu piele solzoasă,
              impermeabilă și foarte dură care îl protejează de uscăciune și de
              eventuali predatori. Crocodilul este un animal foarte sociabil,
              care conviețuiește în grupuri mari, mixte de adulți și tineri
              laolaltă. Odată vânați intens pentru pielea lor, aceste animale
              sunt acum în pericol datorită pierderii habitatului și uciderii
              ilegale.
            </p>
          </div>
        </div>
      </a>

      <div id="popup16" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/crocodiles-in-water-pond.mp4"
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
                  Reptile in habitatul lor.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Una din cele mai de temut reptile de pe întreaga planetă,
                  crocodilul, este un animal străvechi, încă din epoca
                  dinozaurilor, care și-a modificat foarte puțin aspectul de-a
                  lungul timpului.
                  <br /> Crocodilul este o reptilă de mari dimensiuni cu piele
                  solzoasă, impermeabilă și foarte dură care îl protejează de
                  uscăciune și de eventuali predatori. Crocodilul este un animal
                  foarte sociabil, care conviețuiește în grupuri mari, mixte de
                  adulți și tineri laolaltă.
                  <br /> Odată vânați intens pentru pielea lor, aceste animale
                  sunt acum în pericol datorită pierderii habitatului și
                  uciderii ilegale.
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
                  <a href="#popup16" id="like-el">
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
