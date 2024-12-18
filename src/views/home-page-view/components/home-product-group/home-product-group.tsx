import { Link } from "react-router-dom";
import { HomeProductGroupTypes } from "../../../../components/product-card-group/types";
import { ProductCard } from "../../../../components/product-card-group/components";
import "../home-product-group/home-product-group.scss";

export const HomeProductGroup = (props: HomeProductGroupTypes) => {
  const { products } = props;
  return (
    <div className="klz-portfolio-product-home-group">
      <div className="klz-portfolio-product-home-group__container">
        {products?.map((product: any, indice: number) => {
          return (
            <div
              key={product._id}
              className="klz-portfolio-product-home-group__container-product"
            >
              <Link to={`/shop/stuff-you-can-buy/${product._id}`}>
                <ProductCard key={indice} product={product} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
