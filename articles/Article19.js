import ArticleCSS from "/articles/Article.css";

export default function Article19() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup19"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/deer-family.mp4
            "
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>O familie de căprioare.</h5>
            <p className="styling-for-article-paragraph">
              Cerbul este sociabil de toamna până primăvara. Doar cerbii foarte
              bătrâni sau foarte puternici trăiesc solitari. Împerecherea începe
              în luna septembrie, terminându-se cu a doua jumătate a lunii
              octombrie. Ciutele fată, de regulă, câte 1-2 viței, foarte rar 3,
              care își pot urma mama la 1-2 ore după naștere. Puii încep să
              meargă repede după naștere și este cunoscut faptul că nu emană
              nici un miros pentru a nu atrage prădătorii. Puii sunt alăptați de
              mama până toamna târziu. Cu apropierea iernii, căprioarele se
              adună în turme de până la 20 de exemplare și în cazuri
              excepționale în grupuri de până la 100 de exemplare. În trecut
              aceste turme mari erau des întâlnite, dar din cauza restrângerii
              arealului și a vânatului excesiv este o raritate să vedem turme de
              mari dimensiuni.
            </p>
          </div>
        </div>
      </a>

      <div id="popup19" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/
                deer-family.mp4"
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
                  O familie de căprioare.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Cerbul este sociabil de toamna până primăvara. Doar cerbii
                  foarte bătrâni sau foarte puternici trăiesc solitari.
                  Împerecherea începe în luna septembrie, terminându-se cu a
                  doua jumătate a lunii octombrie. Ciutele fată, de regulă, câte
                  1-2 viței, foarte rar 3, care își pot urma mama la 1-2 ore
                  după naștere.
                  <br /> Puii încep să meargă repede după naștere și este
                  cunoscut faptul că nu emană nici un miros pentru a nu atrage
                  prădătorii. Puii sunt alăptați de mama până toamna târziu. Cu
                  apropierea iernii, căprioarele se adună în turme de până la 20
                  de exemplare și în cazuri excepționale în grupuri de până la
                  100 de exemplare.
                  <br /> În trecut aceste turme mari erau des întâlnite, dar din
                  cauza restrângerii arealului și a vânatului excesiv este o
                  raritate să vedem turme de mari dimensiuni.
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
                  <a href="#popup19" id="like-el">
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
