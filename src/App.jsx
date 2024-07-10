import { useState } from "react";
import BackToTop from "./components/BackToTop";
import Header from "./pages/header";

import { Outlet } from "react-router-dom";

const App = () => {
  const [showBtn, setShowBtn] = useState(false);
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {showBtn && <BackToTop />}
    </>
  );
};

export default App;
