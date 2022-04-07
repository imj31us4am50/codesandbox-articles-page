import ArticleCSS from "/articles/Article01.css";
import JavaScript from "/mainpage/script.js";

export default function Article12() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup12"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/closeup-of-a-chameleon.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Cameleonul: una dintre cele mai impresionante reptile.</h5>
            <p className="styling-for-article-paragraph">
              Știai că? Cameleonul este una dintre cele mai impresionante
              reptile și unul dintre puținele animale de pe pământ care își pot
              schimba culoarea pielii. Schimbarea culorii pielii este o parte
              importantă a comunicării dintre cameleoni. Pielea unui cameleon
              își schimbă culorile ca răspuns la emoțiile sale, cum ar fi furia
              sau frica, schimbările de lumină, temperatură sau umiditate. Ochii
              lor se pot mișca independent unul de celălalt, permițându-le să
              privească în două direcții diferite simultan. Cameleonii au o
              vedere completă de 360 de grade și își pot concentra ochii rapid
              și pot mări ceea ce privesc ca un obiectiv de cameră. Defrișarea
              și comerțul cu animale de companie sunt principalele motive pentru
              care populația cameleonilor este în scădere. Pentru a preveni
              dispariția cameleonilor, protecția speciei și a habitatului lor
              este esențială.
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup12" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/closeup-of-a-chameleon.mp4"
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
                  Cameleonul: una dintre cele mai impresionante reptile.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  <b>Știai că?</b> Cameleonul este una dintre cele mai
                  impresionante reptile și unul dintre puținele animale de pe
                  pământ care își pot schimba culoarea pielii.
                  <br /> Schimbarea culorii pielii este o parte importantă a
                  comunicării dintre cameleoni. Pielea unui cameleon își schimbă
                  culorile ca răspuns la emoțiile sale, cum ar fi furia sau
                  frica, schimbările de lumină, temperatură sau umiditate. Ochii
                  lor se pot mișca independent unul de celălalt, permițându-le
                  să privească în două direcții diferite simultan.
                  <br /> Cameleonii au o vedere completă de 360 de grade și își
                  pot concentra ochii rapid și pot mări ceea ce privesc ca un
                  obiectiv de cameră. Defrișarea și comerțul cu animale de
                  companie sunt principalele motive pentru care populația
                  cameleonilor este în scădere.
                  <br /> Pentru a preveni dispariția cameleonilor, protecția
                  speciei și a habitatului lor este esențială.
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
