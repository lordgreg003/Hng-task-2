import { Nav, Footer } from "../components/layouts";
import {
  Product,
  Recently,
  Alsolike,
  Discover,
  Category,
} from "../components/product";

const ProductScreen = () => {
  return (
    <div>
      <Nav />
      <Category />
      <Product />
      <Recently />
      <Alsolike />
      <Discover />
      <Footer />
    </div>
  );
};

export default ProductScreen;
