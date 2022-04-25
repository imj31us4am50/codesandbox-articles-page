import ArticleCSS from "/articles/Article.css";
import JavaScript from "/mainpage/script.js";

export default function Article07() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup7"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/close-up-of-a-lemur.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Un lemur atent.</h5>
            <p className="styling-for-article-paragraph">
              Madagascarul este singurul loc pe care lemurii îl numesc în mod
              natural acasă, pentru care mare parte din fauna sălbatică din
              Madagascar este amenințată de acțiunile umane. Cu aproximativ 112
              specii, lemurii vin în toate formele și dimensiunile. Înafară de
              oameni, lemurii sunt singurele primate care pot avea ochii
              albaștri. Animalele se confruntă cu o varietate de amenințări, în
              primul rând distrugerea habitatului lor, așa-numita agricultură de
              tăiere și ardere, exploatare forestieră ilegală, producție de
              cărbune și minerit.
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup7" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/close-up-of-a-lemur.mp4"
                className="o mt-1"
                controls
                muted
                autoPlay
                loop
              />
            </div>
            <div className="popup-desc-cont p-4 pt-5">
              <div className="popup-text">
                <h1 className="popup-title text-wrap m-0">Un lemur atent.</h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Madagascarul este singurul loc pe care lemurii îl numesc în
                  mod natural acasă, pentru care mare parte din fauna sălbatică
                  din Madagascar este amenințată de acțiunile umane.
                  <br /> Cu aproximativ 112 specii, lemurii vin în toate formele
                  și dimensiunile. Înafară de oameni, lemurii sunt singurele
                  primate care pot avea ochii albaștri.
                  <br /> Animalele se confruntă cu o varietate de amenințări, în
                  primul rând distrugerea habitatului lor, așa-numita
                  agricultură de tăiere și ardere, exploatare forestieră
                  ilegală, producție de cărbune și minerit.
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
                  <a href="#popup7" id="like-el">
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
