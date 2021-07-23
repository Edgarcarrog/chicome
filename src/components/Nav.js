const Nav = () => {
  return (
    <div className="row">
      <div className="col-2 d-flex justify-content-center align-items-start">icono</div>
      <div className="col-10 d-flex justify-content-end">
        <nav class="navbar navbar-expand-md navbar-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" aria-current="page" href="!#">
                  Home
                </a>
                <a class="nav-link" href="!#">
                  Features
                </a>
                <a class="nav-link" href="!#">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
