import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <header className="min-w-[100vw]">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
