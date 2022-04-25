import ArticleCSS from "/articles/Article.css";

export default function Article11() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup11"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/close-up-video-of-an-owl.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Huhurezul bărbos.</h5>
            <p className="styling-for-article-paragraph">
              Huhurezul bărbos sau huhurezul cu barbă trăiește în pădurile dese
              de conifere, începând cu Suedia, Finlanda și Polonia, până în
              estul Siberiei. Această bufniță cenușie este o bufniță foarte
              mare, documentată ca fiind cea mai mare specie de bufniță din lume
              după lungime. Pierderea habitatului pădurii din cauza tăierilor și
              defrișărilor este cea mai mare amenințare cu care se confruntă
              această bufniță magnifică. În timpul iernii, unele bufnițe pot
              avea dificultăți în a găsi hrană și pot muri de foame.
            </p>
          </div>
        </div>
      </a>

      <div id="popup11" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/close-up-video-of-an-owl.mp4"
                className="o mt-1"
                controls
                muted
                autoPlay
                loop
              />
            </div>
            <div className="popup-desc-cont p-4 pt-5">
              <div className="popup-text">
                <h1 className="popup-title text-wrap m-0">Huhurezul bărbos.</h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Huhurezul bărbos sau huhurezul cu barbă trăiește în pădurile
                  dese de conifere, începând cu Suedia, Finlanda și Polonia,
                  până în estul Siberiei.
                  <br /> Această bufniță cenușie este o bufniță foarte mare,
                  documentată ca fiind cea mai mare specie de bufniță din lume
                  după lungime.
                  <br /> Pierderea habitatului pădurii din cauza tăierilor și
                  defrișărilor este cea mai mare amenințare cu care se confruntă
                  această bufniță magnifică. În timpul iernii, unele bufnițe pot
                  avea dificultăți în a găsi hrană și pot muri de foame.
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
                  <a href="#popup11" id="like-el">
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
