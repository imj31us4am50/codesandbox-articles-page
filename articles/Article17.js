import ArticleCSS from "/articles/Article.css";

export default function Article17() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup17"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/cute-brown-llama.mp4
            "
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Un animal tare îndrăgit pentru aspectul lui adorabil.</h5>
            <p className="styling-for-article-paragraph">
              Verișoara fără cocoașă a cămilei, lama este un animal domestic ce
              trăiește în America de Sud, fiind folosit ca animal de povară, dar
              și pentru carnea sa. Lama se hrănește cu iarbă, diverse tipuri de
              plante și nu au nevoie de foarte multă apă. Animale sociabile și
              prietenoase, lamele se apropie cu ușurință de oameni și le place
              să interacționeze cu aceștia. Pentru lamele care au crescut extrem
              de aproape de om, acestea vor confunda omul cu unul de-al lor și
              pot scuipa sau lovi cu copitele, la fel cum procedează ele între
              ele. Aceste vieţuitoare au nevoie de atenţie şi de compania
              suratelor lor sau a altor animale. Dacă este lăsată singură, lama
              poate muri de supărare.
            </p>
          </div>
        </div>
      </a>

      <div id="popup17" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/
                cute-brown-llama.mp4"
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
                  Un animal tare îndrăgit pentru aspectul lui adorabil.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Verișoara fără cocoașă a cămilei, lama este un animal domestic
                  ce trăiește în America de Sud, fiind folosit ca animal de
                  povară, dar și pentru carnea sa. Lama se hrănește cu iarbă,
                  diverse tipuri de plante și nu au nevoie de foarte multă apă.
                  Animale sociabile și prietenoase, lamele se apropie cu
                  ușurință de oameni și le place să interacționeze cu aceștia.
                  Pentru lamele care au crescut extrem de aproape de om, acestea
                  vor confunda omul cu unul de-al lor și pot scuipa sau lovi cu
                  copitele, la fel cum procedează ele între ele. Aceste
                  vieţuitoare au nevoie de atenţie şi de compania suratelor lor
                  sau a altor animale. Dacă este lăsată singură, lama poate muri
                  de supărare.
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
                  <a href="#popup17" id="like-el">
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
