export const App = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="header__container">
            <a className="header__back-button _icon-back" href="https://my.prjctr.com/">
              Back
            </a>
            <div className="header__actions actions-header">
              <div className="actions-header__action _icon-heart-header"></div>
              <div className="actions-header__action _icon-folder"></div>
            </div>
          </div>
        </header>

        <main className="main">
          <div className="main__container">
            <form action="" className="form">
              <div className="form__artist">
                <input
                  name="form"
                  className="form__input input"
                  placeholder="Artist"
                />
              </div>

              <div className="form__genre _icon-arrow select-wrapper">
                <select name="form" className="form__select select">
                  <option value="" disabled selected hidden>
                    Genre
                  </option>
                  <option value="rock">Rock</option>
                  <option value="pop">Pop</option>
                  <option value="hip-hop">Hip Hop</option>
                  <option value="country">Country</option>
                  <option value="jazz">Jazz</option>
                  <option value="blues">Blues</option>
                  <option value="metal">Metal</option>
                  <option value="rap">Rap</option>
                  <option value="indie">Indie</option>
                  <option value="electronic">Electronic</option>
                  <option value="classical">Classical</option>
                  <option value="reggae">Reggae</option>
                  <option value="folk">Folk</option>
                  <option value="punk">Punk</option>
                  <option value="r&b">R&B</option>
                  <option value="soul">Soul</option>
                  <option value="funk">Funk</option>
                  <option value="disco">Disco</option>
                </select>
              </div>
              <div className="form__decade _icon-arrow select-wrapper">
                <select name="form" className="form__select select">
                  <option value="" disabled selected hidden>
                    Decade
                  </option>
                  <option value="1950-60">1950-60s</option>
                  <option value="1960-70">1960-70s</option>
                  <option value="1970-80">1970-80s</option>
                  <option value="1980-90">1980-90s</option>
                  <option value="1990-00">1990-2000s</option>
                  <option value="2000-10">2000-2010s</option>
                  <option value="2010-20">2010-2020s</option>
                  <option value="2020-30">2020-2030s</option>
                </select>
              </div>
              <div className="form__country _icon-arrow select-wrapper">
                <select name="form" className="form__select select">
                  <option value="" disabled selected hidden>
                    Country
                  </option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="japan">Japan</option>
                  <option value="brazil">Brazil</option>
                  <option value="china">China</option>
                  <option value="india">India</option>
                  <option value="italy">Italy</option>
                  <option value="spain">Spain</option>
                  <option value="mexico">Mexico</option>
                  <option value="south-korea">South Korea</option>
                  <option value="russia">Russia</option>
                  <option value="sweden">Sweden</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="argentina">Argentina</option>
                  <option value="south-africa">South Africa</option>
                </select>
              </div>
              <div className="form__action">
                <button type="submit" className="form__button button">
                  Search
                </button>
              </div>
            </form>
            <div className="output">
              <div className="output__card card">
                <div className="card__img img-ibg">
                  <img
                    srcSet="src/img/1.jpg 1x, src/img/1.jpg 2x"
                    src="src/img/1.jpg"
                    alt="vinyl"
                  />
                </div>
                <button className="card__like _icon-heart"></button>
                <div className="card__title">Let There Be Rock</div>
                <div className="card__name">AC/DC</div>
                <div className="card__year-folder">
                  <span className="card__year-title">Year:</span>
                  <span className="card__year-value">1990</span>
                </div>
                <div className="card__style-folder">
                  <span className="card__style-title">Style :</span>
                  <span className="card__style-value">Punk, Dub, Funk</span>
                </div>
                <div className="card__country-folder">
                  <span className="card__country-title">Country :</span>
                  <span className="card__country-value">USA</span>
                </div>
                <button className="card__add-button">
                  <span className="card__add-button-text _icon-plus">Add</span>
                </button>
              </div>
              <div className="output__card card">
                <div className="card__img img-ibg">
                  <img
                    srcSet="src/img/1.jpg 1x, src/img/1.jpg 2x"
                    src="src/img/1.jpg"
                    alt="vinyl"
                  />
                </div>
                <button className="card__like _icon-heart"></button>
                <div className="card__title">Let There Be Rock</div>
                <div className="card__name">AC/DC</div>
                <div className="card__year-folder">
                  <span className="card__year-title">Year:</span>
                  <span className="card__year-value">1990</span>
                </div>
                <div className="card__style-folder">
                  <span className="card__style-title">Style :</span>
                  <span className="card__style-value">Punk, Dub, Funk</span>
                </div>
                <div className="card__country-folder">
                  <span className="card__country-title">Country :</span>
                  <span className="card__country-value">USA</span>
                </div>
                <button className="card__add-button">
                  <span className="card__add-button-text _icon-plus">Add</span>
                </button>
              </div>
              <div className="output__card card">
                <div className="card__img img-ibg">
                  <img
                    srcSet="src/img/1.jpg 1x, src/img/1.jpg 2x"
                    src="src/img/1.jpg"
                    alt="vinyl"
                  />
                </div>
                <button className="card__like _icon-heart"></button>
                <div className="card__title">Let There Be Rock</div>
                <div className="card__name">AC/DC</div>
                <div className="card__year-folder">
                  <span className="card__year-title">Year:</span>
                  <span className="card__year-value">1990</span>
                </div>
                <div className="card__style-folder">
                  <span className="card__style-title">Style :</span>
                  <span className="card__style-value">Punk, Dub, Funk</span>
                </div>
                <div className="card__country-folder">
                  <span className="card__country-title">Country :</span>
                  <span className="card__country-value">USA</span>
                </div>
                <button className="card__add-button">
                  <span className="card__add-button-text _icon-plus">Add</span>
                </button>
              </div>
              <div className="output__card card">
                <div className="card__img img-ibg">
                  <img
                    srcSet="src/img/1.jpg 1x, src/img/1.jpg 2x"
                    src="src/img/1.jpg"
                    alt="vinyl"
                  />
                </div>
                <button className="card__like _icon-heart"></button>
                <div className="card__title">Let There Be Rock</div>
                <div className="card__name">AC/DC</div>
                <div className="card__year-folder">
                  <span className="card__year-title">Year:</span>
                  <span className="card__year-value">1990</span>
                </div>
                <div className="card__style-folder">
                  <span className="card__style-title">Style :</span>
                  <span className="card__style-value">Punk, Dub, Funk</span>
                </div>
                <div className="card__country-folder">
                  <span className="card__country-title">Country :</span>
                  <span className="card__country-value">USA</span>
                </div>
                <button className="card__add-button">
                  <span className="card__add-button-text _icon-plus">Add</span>
                </button>
              </div>
              <div className="output__card card">
                <div className="card__img img-ibg">
                  <img
                    srcSet="src/img/1.jpg 1x, src/img/1.jpg 2x"
                    src="src/img/1.jpg"
                    alt="vinyl"
                  />
                </div>
                <button className="card__like _icon-heart"></button>
                <div className="card__title">Let There Be Rock</div>
                <div className="card__name">AC/DC</div>
                <div className="card__year-folder">
                  <span className="card__year-title">Year:</span>
                  <span className="card__year-value">1990</span>
                </div>
                <div className="card__style-folder">
                  <span className="card__style-title">Style :</span>
                  <span className="card__style-value">Punk, Dub, Funk</span>
                </div>
                <div className="card__country-folder">
                  <span className="card__country-title">Country :</span>
                  <span className="card__country-value">USA</span>
                </div>
                <button className="card__add-button">
                  <span className="card__add-button-text _icon-plus">Add</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer__container"></div>
        </footer>
      </div>
    </>
  );
};
