import { Link } from "react-router-dom";
import { ProductCard } from "../product-card-group/components";
import "./product-card-six-group.scss";

export const ProductCardSixGroup = (props: any) => {
  const { title, products } = props;

  return (
    <div className="klz-portfolio-product-card-six-group">
      <div className="klz-portfolio-product-card-six-group__title">
        <h2>{title}</h2>
      </div>
      <div className="klz-portfolio-product-card-six-group__container">
        {products.map(
          (product: { _id: string; image: string }, indice: number) => {
            return (
              <div
                key={product._id}
                className="klz-portfolio-product-card-six-group__product-card"
              >
                <Link to={`/shop/stuff-you-can-buy/${product._id}`}>
                  <ProductCard key={indice} product={product} />
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
