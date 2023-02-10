
import './App.css';

function App() {
  return (
    <>
      

      
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#221f1f" }}
      >
        <a className="navbar-brand" href>
          <img src="assets/logo.png" style={{width: "100px", height: "55px"}} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a class="nav-link font-weight-bold" href
                >Home <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href>TV Shows</a>
            </li>
            <li class="nav-item">
              <a className="nav-link font-weight-bold" href>Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href>Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href>My List</a>
            </li>
          </ul>
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
        </div>
      </nav>
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="dropdown ml-4 mt-1">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{backgroundColor: "#221f1f"}}
              >
                Genres &nbsp;
              </button>
              <div
                class="dropdown-menu bg-dark"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item text-white bg-dark" href>Comedy</a>
                <a className="dropdown-item text-white bg-dark" href>Drama</a>
                <a className="dropdown-item text-white bg-dark" href>Thriller</a>
              </div>
            </div>
          </div>
          <div>
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center"
        >
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/1.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img className="img-fluid" src />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/3.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img class="img-fluid" src="assets/4.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/5.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/6.png" alt="movie picture" />
          </div>
        </div>
        <h4>Watch it Again</h4>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center"
        >
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/7.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/8.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/9.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/10.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/11.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/12.png" alt="movie picture" />
          </div>
        </div>
        <h4>New Releases</h4>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center"
        >
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/13.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/14.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/15.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/16.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/17.png" alt="movie picture" />
          </div>
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/18.png" alt="movie picture" />
          </div>
        </div>
        <footer>
          <div class="row text-center mt-5">
            <div class="col-6 offset-3">
              <div class="row">
                <div class="col col-12 text-left mb-2">
                  <i class="fa fa-facebook footer-icon"></i>
                  <i class="fa fa-instagram footer-icon"></i>
                  <i class="fa fa-twitter footer-icon"></i>
                  <i class="fa fa-youtube footer-icon"></i>
                </div>
              </div>
              <div
                class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"
              >
                <div class="col">
                  <div class="row">
                    <div class="col col-12 footer-links">
                      <p>
                        <a href="#" alt="footer link">Audio and Subtitles</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Media Center</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Privacy</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Contact us</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="row">
                    <div class="col col-12 footer-links">
                      <p>
                        <a href="#" alt="footer link">Audio Description</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Investor Relations</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Legal Notices</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="row">
                    <div class="col col-12 footer-links">
                      <p>
                        <a href="#" alt="footer link">Help Center</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Jobs</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Cookie Preferences</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="row">
                    <div class="col col-12 footer-links">
                      <p>
                        <a href="#" alt="footer link">Gift Cards</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Terms of Use</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Corporate Information</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col col-12 text-left mb-2">
                  <button
                    type="button"
                    class="btn btn-sm footer-button rounded-0 mt-3"
                  >
                    Service Code
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col col-12 text-left mb-2 mt-2 copyright">
                  © 1997-2022 Netflix, Inc.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>








    </>
  );
}

export default App;
