
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import NotFound from "../pages/NotFound";

const Paths = () => {
    return (
        <>
          <BrowserRouter>

             <Routes>
                 <Route path="/" element={<HomePage />} />
                 <Route path="/produtos" element = {<ProductListingPage />} />
                 <Route path="/product/:id" element = {<ProductViewPage />} />
                 <Route path="*" element = {<NotFound />}  />
             </Routes>

          </BrowserRouter>
        </>
    );
}
 
export default Paths;