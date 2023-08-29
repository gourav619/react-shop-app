import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const PRODUCT_DATA = [
    {
      id: 1,
      title: "AirPod",
      price: 35000,
      description: "Listen the sound of another universe!",
    },
    {
      id: 2,
      title: "Mac-book",
      price: 160000,
      description: "Ready to burn your wallet!",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCT_DATA &&
          PRODUCT_DATA?.map((product) => {
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default Products;
