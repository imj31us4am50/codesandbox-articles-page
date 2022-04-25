import ArticleCSS from "/articles/Article.css";

export default function Article13() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup13"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/closeup-of-an-owl.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Despre Bufnița polară.</h5>
            <p className="styling-for-article-paragraph">
              Bufnița polară este o pasăre răpitoare care trăiește în ținuturile
              polare nordice de tundră. Femela este mai mare, albă cu striuri și
              pete negricioase. Masculul este mai mic, aproape complet de
              culoare albă. Bufnițele polare sunt, în general, solitare și
              teritoriale. Masculii își stabilesc teritorii în perioadele de
              împerechere și le apără folosindu-se de vocalize și poziții
              amenințătoare. Aceste bufnițe sunt toate amenințate de pierderea
              habitatului și perturbarea umană. Schimbările climatice și
              speciile invazive cauzează, de asemenea, scăderea populațiilor.
            </p>
          </div>
        </div>
      </a>

      <div id="popup13" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/closeup-of-an-owl.mp4"
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
                  Despre Bufnița polară.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Bufnița polară este o pasăre răpitoare care trăiește în
                  ținuturile polare nordice de tundră.
                  <br /> Femela este mai mare, albă cu striuri și pete
                  negricioase. Masculul este mai mic, aproape complet de culoare
                  albă. Bufnițele polare sunt, în general, solitare și
                  teritoriale. Masculii își stabilesc teritorii în perioadele de
                  împerechere și le apără folosindu-se de vocalize și poziții
                  amenințătoare.
                  <br /> Aceste bufnițe sunt toate amenințate de pierderea
                  habitatului și perturbarea umană. Schimbările climatice și
                  speciile invazive cauzează, de asemenea, scăderea
                  populațiilor.
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
                  <a href="#popup13" id="like-el">
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
