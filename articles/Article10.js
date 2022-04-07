import ArticleCSS from "/articles/Article01.css";
import JavaScript from "/mainpage/script.js";

export default function Article10() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup10"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/close-up-video-of-a-parrot.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Un papagal de-a dreptul fascinant.</h5>
            <p className="styling-for-article-paragraph">
              Originar din Insulele Solomon, papagalul Eclectus este apreciat
              pentru aspectul său uimitor și calitatea excelentă ca animal de
              companie. Aceste păsări sunt dimorfe, ceea ce înseamnă că există
              distincții vizuale între sexe. Masculii sunt de un verde
              strălucitor, iar femelele sunt de un roșu uimitor, cu o burtă
              violet intens și un cioc negru. Pierderea habitatelor, schimbările
              climatice și comerțul cu animale sălbatice sunt principalele
              amenințări la adresa papagalilor. diverse specii de papagali sunt
              enumerate ca fiind pe cale de dispariție. Descurajați prietenii și
              familia să păstreze păsările sălbatice și toate tipurile de
              animale sălbatice ca animale de companie.
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup10" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/close-up-video-of-a-parrot.mp4"
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
                  Un papagal de-a dreptul fascinant.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Originar din Insulele Solomon, papagalul Eclectus este
                  apreciat pentru aspectul său uimitor și calitatea excelentă ca
                  animal de companie. Aceste păsări sunt dimorfe, ceea ce
                  înseamnă că există distincții vizuale între sexe.
                  <br /> Masculii sunt de un verde strălucitor, iar femelele
                  sunt de un roșu uimitor, cu o burtă violet intens și un cioc
                  negru. Pierderea habitatelor, schimbările climatice și
                  comerțul cu animale sălbatice sunt principalele amenințări la
                  adresa papagalilor. diverse specii de papagali sunt enumerate
                  ca fiind pe cale de dispariție.
                  <br /> Descurajați prietenii și familia să păstreze păsările
                  sălbatice și toate tipurile de animale sălbatice ca animale de
                  companie.
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
                  {/* future feature
                  <a href="#popup1" id="like-el">
                    <img
                      src="https://imj31us4am50.github.io/imgs/not-liked-icon.png"
                      className="like-icon"
                      id="img-el"
                    />
                  </a>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
