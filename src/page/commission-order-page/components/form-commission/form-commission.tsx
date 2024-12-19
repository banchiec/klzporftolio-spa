import React, { useContext, useEffect, useRef, useState } from "react";
import { FormCommissionType } from "./types";
import {
  COMMISSIONS_DEFAULT_VALUES,
  COMMISSIONS_INPUTS_DEFAULT_NAMES,
  DEFAULT_COMMISSIONS_SELECT_VALUE,
  FORM_COMMISSIONS_SELECTED_VALUES,
} from "./constant";
import { CustomSelect } from "../../../../components/custom-select";
import help from "../../../../assets/images/help.png";
import cart from "../../../../assets/images/cart_icon.png";
import { FORM_COMMISSIONS } from "../../constants";
import SelectColor from "../../../../components/select-color/select-color";
import { useCategoriesList, useProductsCreate } from "../../../../hooks";
import "../../commissions-order-page.scss";
import { CartContext } from "../../../../context/cartContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

type ErrorsType = {
  errorMessage?: string;
};

const FormCommission = (props: FormCommissionType) => {
  const { productType, image, id } = props;

  const navigate = useNavigate();

  const [priceCommission, setPriceCommission] = useState(50);
  const { createProduct } = useProductsCreate();

  const [error, setErrors] = useState<ErrorsType>();

  const location = useLocation();
  const { dataCategoriesList, isLoadingCategoriesList } = useCategoriesList();
  const locationImage = location.pathname.split("/")[3];
  const [deliveryDays, setDeliveryDays] = useState(
    DEFAULT_COMMISSIONS_SELECT_VALUE
  );
  const [productName, setproductName] = useState("");
  const [deliveryFormat, setDeliveryFormat] = useState(
    DEFAULT_COMMISSIONS_SELECT_VALUE
  );

  console.log(deliveryFormat.label.length, "delivery format");

  const [revisions, setRevisions] = useState(DEFAULT_COMMISSIONS_SELECT_VALUE);
  const [description, setDescription] = useState("");
  const [colors, setColors] = useState([]);

  const deliveryDaysRef = useRef();
  const deliveryFormatRef = useRef();
  const revisionsRef = useRef();

  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };

  const context = useContext(CartContext)!;

  const { addToCart } = context;

  // const handleClick = () => {
  //   const item: CartItemType = {
  //     id: id,
  //     name: productType?.name,
  //     quantity: 1,
  //     image: image!,
  //     price: 50 + deliveryDays.price + revisions.price + deliveryFormat.price,
  //   };
  //   addToCart(item);
  // };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const currentColors = colors?.map((color: any) => color?.label);

    const newCommissions = {
      id: id,
      quantity: 1,
      image: image!,
      productType: productType?.name,
      productName: productName,
      description: description,
      deliveryDays: {
        days: deliveryDays.value,
        price: deliveryDays.price,
      },
      colors: currentColors,
      price: priceCommission,
      reviews: {
        days: revisions.value,
        price: revisions.price,
      },
    };

    console.log(currentColors.length);

    if (newCommissions.productName.length <= 1) {
      setErrors({
        errorMessage: "Product name is required. Please provide a product name",
      });
      return;
    }

    if (newCommissions.deliveryDays.days <= 1) {
      setErrors({
        errorMessage:
          "Delivery days are required. Please provide delivery days",
      });
      return;
    }

    if (newCommissions.description.length <= 5) {
      setErrors({
        errorMessage: "Description is required. Provide description please",
      });
      return;
    }
    if (newCommissions.reviews.days <= 1) {
      setErrors({
        errorMessage: "Provide revisions please",
      });
      return;
    }
    if (currentColors.length == 0) {
      setErrors({
        errorMessage: "Please provide a color for product",
      });
      return;
    }

    if (deliveryFormat.label.length == 0) {
      setErrors({
        errorMessage: "Please provide a delivery format for product",
      });
      return;
    }

    addToCart(newCommissions);
    navigate("/cart");
  };

  useEffect(() => {
    const price =
      50 + deliveryDays.price + revisions.price + deliveryFormat.price;
    setPriceCommission(price);
  }, [deliveryDays.price, revisions.price, deliveryFormat.price]);

  return (
    <div className="klz-commissions-order__form-body">
      <div className="klz-commissions-order__form-body__input">
        <label htmlFor="productName">Product Name</label>
        <p className="klz-commissions-order__form-body__error-msg">
          {error?.errorMessage}
        </p>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setproductName(e.target.value)}
          placeholder="Enter product Name"
          required
        />
      </div>
      <form onSubmit={onSubmit}>
        <CustomSelect
          name={COMMISSIONS_INPUTS_DEFAULT_NAMES.deliveryDays}
          label="Delivery Days"
          value={deliveryDays}
          options={FORM_COMMISSIONS_SELECTED_VALUES.deliveryDays}
          setOption={setDeliveryDays}
          customSelectRef={deliveryDaysRef}
        />
        <SelectColor
          setColors={setColors}
          colors={colors}
          label={"Choose your color palette"}
          options={FORM_COMMISSIONS_SELECTED_VALUES.colors}
        />
        <div className="klz-commissions-order__form-body__textarea">
          <div className="klz-commissions-order__form-body__textarea__label">
            <span>Insert you text</span>
            <img src={help} alt="image_help" />
          </div>
          <textarea
            onChange={(e) => onChangeDescription(e)}
            rows={10}
            defaultValue={description}
          />
        </div>
        <CustomSelect
          name={COMMISSIONS_INPUTS_DEFAULT_NAMES.revisions}
          label="Revisions"
          value={revisions}
          options={FORM_COMMISSIONS_SELECTED_VALUES.revisions}
          setOption={setRevisions}
          customSelectRef={revisionsRef}
        />
        <CustomSelect
          name={COMMISSIONS_INPUTS_DEFAULT_NAMES.deliveryFormat}
          label="Delivery Format"
          value={deliveryFormat}
          options={FORM_COMMISSIONS_SELECTED_VALUES.deliveryFormat}
          customSelectRef={deliveryFormatRef}
          setOption={setDeliveryFormat}
        />

        <button
          // onClick={handleClick}
          onClick={onSubmit}
          className="klz-commissions-order__form-body__button"
        >
          <span className="klz-commissions-order__form-body__button-add-to-cart">
            {FORM_COMMISSIONS.addToCart}
          </span>
          <div className="klz-commissions-order__form-body__button-description">
            <span className="klz-commissions-order__form-body__button-description__subtotal">
              {FORM_COMMISSIONS.subtotal}
            </span>
            <span className="klz-commissions-order__form-body__button-description__price">
              {`${priceCommission}€`}
            </span>
            <img
              className="klz-commissions-order__form-body__button-description__cart"
              src={cart}
              alt="icon_cart"
            />
          </div>
        </button>
      </form>
    </div>
  );
};
export default React.memo(FormCommission);
