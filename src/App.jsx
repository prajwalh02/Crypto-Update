import {
  BrowserRouter,
  createBrowserRouter,
  Router,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import CryptoHome from "./pages/CryptoHome";
import CryptoDetail from "./pages/CryptoDetail";
import Navbar from "./Components/Navbar";



function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <CryptoHome />,
  //     children: [
  //       {
  //         path: '/coin/:id',
  //         element: <CryptoDetail />,
  //       },
  //     ],
  //   },
  // ]);

  // return (
  //   <>
  //     <Navbar />
  //     <RouterProvider router={router} />
  //   </>
  // )

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
