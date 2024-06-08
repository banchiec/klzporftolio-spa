import { useState } from "react";
import { ProductCreateViewType } from "./types";
import { Controller, useForm } from "react-hook-form";
import {
  useCategoriesList,
  useProductsCreate,
  useProductTypeList,
} from "../../hooks";
import Select from "../../components/select";
import { categoriesFromSelect, productsTypeFromSelect } from "./mapped";
// import "./category-create-view.scss"

interface ReviewType {
  days: 4 | 7 | 10;
  price: number;
}

interface DeliveryDaysType {
  days: 4 | 7 | 10;
  price: number;
}

interface DeliveryFormatType {
  format: "png" | "jpg" | "jpeg";
  price: number;
}

interface ProductType {
  name: string;
  description: string;
  image: any;
  delivaryDays: Array<DeliveryDaysType>;
  colors: Array<string>;
  productType: string;
  category: string;
  deliveryFormat: Array<DeliveryFormatType>;
  reviews: Array<ReviewType>;
  price: number;
  sold: number;
  images: any;
  deliveryOptions: Array<string>;
}

export const ProductCreateView = (props: ProductCreateViewType) => {
  const { createProduct } = useProductsCreate();
  const { data: productTypeList } = useProductTypeList();
  const { data: categoriesList } = useCategoriesList();
  const { register, control, handleSubmit } = useForm<any>();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [imagesForUpload, setImagesForUpload] = useState<File[]>([]);

  const productTypeSelected = productsTypeFromSelect(productTypeList);
  const categoriesSelected = categoriesFromSelect(categoriesList);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages = Array.from(files);
    const newImagePreviews = newImages.map((file) =>
      URL.createObjectURL(file as Blob)
    );

    setSelectedImages((prevImages) => [...prevImages, ...newImagePreviews]);
    setImagesForUpload((prevImages) => [...prevImages, ...newImages]);
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleImageChange(event);
    const registeredOnChange = register("images").onChange;
    if (registeredOnChange) {
      registeredOnChange(event);
    }
  };

  const onSubmit = (formData: any) => {
    console.log(formData);
    const product = new FormData();
    product.append("name", formData.name);
    product.append("description", formData.description);
    product.append("productType", formData.productType);
    product.append("category", formData.category);
    product.append("sold", formData.sold);
    product.append("price", formData.price);
    [...imagesForUpload].forEach((image) => {
      product.append("images", image);
    });

    console.log(imagesForUpload, "images for upload while onSubmit was sent");
    // console.log(product)
    createProduct(product);
  };

  return (
    <div className="klz-product-type-create-view">
      <h2>New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <input {...register("name")} placeholder="Name" name="name" />
        <br />
        <input
          {...register("description")}
          placeholder="Description"
          name="description"
        />
        <br />
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select {...field} options={categoriesSelected} />
          )}
        />
        <Controller
          name="productType"
          control={control}
          render={({ field }) => (
            <Select {...field} options={productTypeSelected} />
          )}
        />
        <input
          {...register("sold")}
          type="number"
          placeholder="Sold"
          name="sold"
        />
        <input
          {...register("price")}
          type="number"
          placeholder="Price"
          name="price"
        />
        <br />
        <input
          type="file"
          multiple={true}
          {...register("images", {
            required: "Recipe picture is required",
          })}
          onChange={handleFileInputChange}
        />
        <button>Crear</button>
      </form>
    </div>
  );
};
