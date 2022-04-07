import ArticleCSS from "/articles/Article01.css";
import JavaScript from "/mainpage/script.js";

export default function Article06() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup6"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/close-up-of-a-frog.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>O broască de aproape.</h5>
            <p className="styling-for-article-paragraph">
              Există peste 5000 de specii de broaște! Se găsesc pe fiecare
              continent, cu excepția Antarcticii. Broaștele se găsesc în tot
              felul de culori. Pielea colorată a multor broaște tropicale
              acționează ca un avertisment pentru prădători că aceste broaște
              sunt otrăvitoare. Când o broască își înghite prada, clipește, asta
              pentru a-și împinge globii oculari în jos spre gură, pentru a
              ajuta la împingerea mâncării în gât. Există dovezi că broaștele au
              cutreierat Pământul de mai bine de 200 de milioane de ani, cel
              puțin atât timp cât dinozaurii. Broaștele sunt afectate din cauza
              poluării, pierderea habitatului, chitridiomicoza (o boală mortală
              pentru broască, pe care și oamenii o pot răspândi).
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup6" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/close-up-of-a-frog.mp4"
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
                  O broască de aproape.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Există peste 5000 de specii de broaște! Se găsesc pe fiecare
                  continent, cu excepția Antarcticii. Broaștele se găsesc în tot
                  felul de culori. Pielea colorată a multor broaște tropicale
                  acționează ca un avertisment pentru prădători că aceste
                  broaște sunt otrăvitoare.
                  <br />
                  Când o broască își înghite prada, clipește, asta pentru a-și
                  împinge globii oculari în jos spre gură, pentru a ajuta la
                  împingerea mâncării în gât. Există dovezi că broaștele au
                  cutreierat Pământul de mai bine de 200 de milioane de ani, cel
                  puțin atât timp cât dinozaurii.
                  <br /> Broaștele sunt afectate din cauza poluării, pierderea
                  habitatului, chitridiomicoza (o boală mortală pentru broască,
                  pe care și oamenii o pot răspândi).
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
