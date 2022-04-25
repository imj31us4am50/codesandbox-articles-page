import ArticleCSS from "/articles/Article.css";
import JavaScript from "/mainpage/script.js";

export default function Article05() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup5"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/chickens-looking-for-food.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Curiozități despre găini.</h5>
            <p className="styling-for-article-paragraph">
              Vrei să afli câteva lucruri despre păsările din curtea ta? Ei
              bine, găina este cea mai cunoscută pasăre domestică și principala
              sursă de hrană în multe gospodării. Găinile nu pot zbura la fel ca
              alte păsări, dar ca număr de exemplare, găina este cea mai
              răspândită specie de păsări din lume. Cocoșii pot fi de obicei
              diferențiați de găini prin penajul lor uimitor, marcat de cozi
              lungi curgătoare și pene ascuțite strălucitoare pe gât. Prădătorii
              atacă găinile din mai multe motive, inclusiv pentru hrană, pentru
              supraviețuire și pentru a-și hrăni puii. În medie, 97 de găini
              sunt ucise la fiecare 0,05 secunde în întreaga lume.
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup5" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/chickens-looking-for-food.mp4"
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
                  Curiozități despre găini.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  <b>
                    Vrei să afli câteva lucruri despre păsările din curtea ta?
                  </b>{" "}
                  Ei bine, găina este cea mai cunoscută pasăre domestică și
                  principala sursă de hrană în multe gospodării. Găinile nu pot
                  zbura la fel ca alte păsări, dar ca număr de exemplare, găina
                  este cea mai răspândită specie de păsări din lume.
                  <br /> Cocoșii pot fi de obicei diferențiați de găini prin
                  penajul lor uimitor, marcat de cozi lungi curgătoare și pene
                  ascuțite strălucitoare pe gât. Prădătorii atacă găinile din
                  mai multe motive, inclusiv pentru hrană, pentru supraviețuire
                  și pentru a-și hrăni puii. <br />
                  În medie, 97 de găini sunt ucise la fiecare 0,05 secunde în
                  întreaga lume.
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
                  <a href="#popup5" id="like-el">
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
