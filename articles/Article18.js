import ArticleCSS from "/articles/Article.css";

export default function Article18() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup18"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/deer-eating.mp4
            "
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Căprioară hrănindu-se.</h5>
            <p className="styling-for-article-paragraph">
              Căprioara este unul dintre cele mai îndrăgite animale sălbatice de
              pe teriotoriul României. Căprioarele trăiesc solitare sau în
              grupuri formate din femele şi iezii acestora. Grupurile se
              formează mai ales în timpul iernii. Căprioarele nu se hrănesc de
              obicei pe pajişti care au fost sau sunt folosite de animale
              domestice (oi, vite), deoarece acestea “murdăresc” iarba. Din
              cauza capacităţii stomacale mici şi a digestiei rapide,
              căprioarele trebuie să mănânce des (între cinci şi unsprezece
              hrăniri pe zi).
            </p>
          </div>
        </div>
      </a>

      <div id="popup18" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/
                deer-eating.mp4"
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
                  Căprioară hrănindu-se.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Căprioara este unul dintre cele mai îndrăgite animale
                  sălbatice de pe teriotoriul României. Căprioarele trăiesc
                  solitare sau în grupuri formate din femele şi iezii acestora.
                  Grupurile se formează mai ales în timpul iernii. Căprioarele
                  nu se hrănesc de obicei pe pajişti care au fost sau sunt
                  folosite de animale domestice (oi, vite), deoarece acestea
                  “murdăresc” iarba. Din cauza capacităţii stomacale mici şi a
                  digestiei rapide, căprioarele trebuie să mănânce des (între
                  cinci şi unsprezece hrăniri pe zi).
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
                  <a href="#popup18" id="like-el">
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
