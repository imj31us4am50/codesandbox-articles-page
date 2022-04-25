import ArticleCSS from "/articles/Article.css";
import JavaScript from "/mainpage/script.js";

export default function Article09() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup9"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/close-up-on-woodpecker-on-tree.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Ciocănitoare la datorie.</h5>
            <p className="styling-for-article-paragraph">
              Ciocănitoarea este una dintre cele mai cunoscute păsări din lume.
              Aceasta are o limba lungă, pe care o folosește pentru a ajunge la
              insectele din interiorul scobiturilor; este atât de lungă încât le
              protejează și creierul. Ciocănitoarea este construită în așa fel
              încât să se poată agăța de copaci. Ciocănitoarele sunt animale
              diurne, ele nu "ciocănesc" noaptea. Cele mai mari amenințări la
              adresa ciocănitoarelor includ pierderea habitatului prin
              dezvoltarea urbană și extinderea populației, utilizarea
              insecticidelor care elimină sursele de hrană și dezastrele
              naturale, cum ar fi incendiile de pădure, care elimină lemnul mort
              folosit pentru hrănire și cuibărit.
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup9" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/close-up-on-woodpecker-on-tree.mp4"
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
                  Ciocănitoare la datorie.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Ciocănitoarea este una dintre cele mai cunoscute păsări din
                  lume. Aceasta are o limba lungă, pe care o folosește pentru a
                  ajunge la insectele din interiorul scobiturilor; este atât de
                  lungă încât le protejează și creierul.
                  <br /> Ciocănitoarea este construită în așa fel încât să se
                  poată agăța de copaci. Ciocănitoarele sunt animale diurne, ele
                  nu "ciocănesc" noaptea.
                  <br /> Cele mai mari amenințări la adresa ciocănitoarelor
                  includ pierderea habitatului prin dezvoltarea urbană și
                  extinderea populației, utilizarea insecticidelor care elimină
                  sursele de hrană și dezastrele naturale, cum ar fi incendiile
                  de pădure, care elimină lemnul mort folosit pentru hrănire și
                  cuibărit.
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
                  <a href="#popup9" id="like-el">
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
