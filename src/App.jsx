// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = document.getElementById("search").value;
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyCLFiEtV1ZTJSbb3_c0jQcJlaBwg4aewV8&cx=96ebe3c40bb544ce7&q=${search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => console.log(res));
    window.open(`https://www.google.com/search?q=${search}`, "_self");
  };

  return (
    <div>
      <div className="page">
        <div className="page__container">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Gmail
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Images
                </a>
              </li>
              <li className="nav__item nav__item--app">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                >
                  <rect x="37" width="26" height="26" />
                  <rect width="26" height="26" />
                  <rect x="74" width="26" height="26" />
                  <rect x="37" y="37" width="26" height="26" />
                  <rect y="37" width="26" height="26" />
                  <rect x="74" y="37" width="26" height="26" />
                  <rect x="37" y="74" width="26" height="26" />
                  <rect y="74" width="26" height="26" />
                  <rect x="74" y="74" width="26" height="26" />
                </svg>
              </li>
              <li className="nav__item nav__item--profile">
                <a
                  href="https://github.com/paras2707"
                  target="_blank"
                  rel="noreferrer"
                />
              </li>
            </ul>
          </nav>

          <main className="main">
            <div className="main__hero">
              <img src="./google-logo.png" alt="Google Logo" />
            </div>
            <div className="main__input">
              <form className="main__form">
                <div className="form__group">
                  <div className="form__logo--search">
                    <svg
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                    />
                  </div>
                  <div className="form__logo--mic">
                    <svg
                      className="HPVvwb"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                        fill="#4285f4"
                      ></path>
                      <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
                      <path
                        d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                        fill="#f4b400"
                      ></path>
                      <path
                        d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                        fill="#ea4335"
                      ></path>
                    </svg>
                  </div>
                </div>
              </form>
            </div>
            <div className="main__submit">
              <button
                type="submit"
                className="main__submit--search"
                onClick={handleSearch}
              >
                Google Search
              </button>
              <button className="main__submit--lucky">
                I&apos;m Feeling Lucky
              </button>
            </div>
          </main>

          <footer className="footer">
            <div>
              <ul className="footer__list">
                <li className="footer__item" style={{ paddingLeft: "0" }}>
                  <a href="#" className="footer__link">
                    Advertising
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Business
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    About
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    How Search works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="footer__list">
                <li className="footer__item" style={{ paddingLeft: "0" }}>
                  <a href="#" className="footer__link">
                    Privacy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
