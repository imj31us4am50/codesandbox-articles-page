import Article08CSS from "/articles/Article08.css";
import JavaScript from "/mainpage/script.js";

export default function Article08() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup8"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={Article08CSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/close-up-on-elephant-feeding.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Elefantul: cel mai mare animal terestru viu.</h5>
            <p className="styling-for-article-paragraph">
              Elefanții sunt cele mai mari mamifere de pe pământ, și au corpuri
              masive, urechi largi și trompe lungi. Ei își folosesc trompele
              pentru a ridica obiecte, pentru avertismente, pentru a saluta alți
              elefanți, sau pentru a aspira apă. În condiții naturale, acești
              giganți mănâncă mai mult de 300 de specii diferite de plante.
              Poate fi: iarbă, cereale, frunze, sucursale, culturi rădăcini,
              șutează, fructe. Oamenii sunt de vină pentru situația pe cale de
              dispariție a elefanților. Cele două cauze principale sunt
              vânătoarea și pierderea habitatului. Multe turme africane au fost
              vânate pentru colții lor de fildeș, iar numărul lor a fost decimat
              ca urmare. Deși comerțul cu fildeș este acum ilegal, braconierii
              încă ucid pentru asta.
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup8" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/close-up-on-elephant-feeding.mp4"
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
                  Elefantul: cel mai mare animal terestru viu.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Elefanții sunt cele mai mari mamifere de pe pământ, și au
                  corpuri masive, urechi largi și trompe lungi. Ei își folosesc
                  trompele pentru a ridica obiecte, pentru avertismente, pentru
                  a saluta alți elefanți, sau pentru a aspira apă.
                  <br /> În condiții naturale, acești giganți mănâncă mai mult
                  de 300 de specii diferite de plante. Poate fi: iarbă, cereale,
                  frunze, sucursale, culturi rădăcini, șutează, fructe. Oamenii
                  sunt de vină pentru situația pe cale de dispariție a
                  elefanților. Cele două cauze principale sunt vânătoarea și
                  pierderea habitatului.
                  <br /> Multe turme africane au fost vânate pentru colții lor
                  de fildeș, iar numărul lor a fost decimat ca urmare. Deși
                  comerțul cu fildeș este acum ilegal, braconierii încă ucid
                  pentru asta.
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
