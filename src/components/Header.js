import React from "react";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto flex p-4">
        <a href="/">
          <img
            src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg"
            alt="App Logo"
            className="max-w-[200px] object-contain"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
