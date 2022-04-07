import ArticleCSS from "/articles/Article01.css";
import JavaScript from "/mainpage/script.js";

export default function Article01() {
  return (
    <div className="proper-container mx-auto row">
      <a
        href="#popup1"
        className="text-decoration-none text-dark overflow-hidden uref"
      >
        <div className="row oik p-2" style={ArticleCSS}>
          <video
            src="https://imj31us4am50.github.io/NSVIDEOS/blue-peacock-in-nature.mp4"
            className="aoba col-3 col-sm-3"
            muted
          />
          <div className="container-for-description col-9 col-sm-9 mt-3">
            <h5>Păun Albastru în natură.</h5>
            <p className="styling-for-article-paragraph">
              Păunul albastru poate fi considerat o pasăre decorativă, masculul
              având un aspect morfologic deosebit când coada este deschisă în
              formă de evantai. În antiteză, în țări precum Bangladesh păunul
              albastru este pe cale de dispariție, în principal din cauza
              vânătorii pentru carne și (surprinzător) abia apoi pentru pene. Pe
              de altă parte, în India și Sri Lanka, populațiile de păun sălbatic
              prosperă, datorită protecției pe care i-o oferă valoarea sa
              spirituală. Păunii se confruntă cu pierderea habitatului, ca
              majoritatea speciilor de păsări, ceea ce le face să aibă mai
              puține surse de hrană, adăpost și apă.
            </p>
          </div>
        </div>

        <script src={JavaScript} />
      </a>

      <div id="popup1" className="overlay">
        <div className="popup d-flex align-self-center justify-content-center">
          <a className="close" href="#close">
            &times;
          </a>
          <div className="content d-flex" onLoad={this.window.focus()}>
            <div className="popup-video-cont">
              <video
                src="https://imj31us4am50.github.io/NSVIDEOS/blue-peacock-in-nature.mp4"
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
                  Păun Albastru în natură.
                </h1>
                <p className="popup-paragraph text-wrap mt-4">
                  Păunul albastru poate fi considerat o pasăre decorativă,
                  masculul având un aspect morfologic deosebit când coada este
                  deschisă în formă de evantai.
                  <br /> În antiteză, în țări precum Bangladesh păunul albastru
                  este pe cale de dispariție, în principal din cauza vânătorii
                  pentru carne și (surprinzător) abia apoi pentru pene. Pe de
                  altă parte, în India și Sri Lanka, populațiile de păun
                  sălbatic prosperă, datorită protecției pe care i-o oferă
                  valoarea sa spirituală. <br />
                  Păunii se confruntă cu pierderea habitatului, ca majoritatea
                  speciilor de păsări, ceea ce le face să aibă mai puține surse
                  de hrană, adăpost și apă.
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
