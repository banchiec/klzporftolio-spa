import { useEffect, useState } from "react";
import { ProductCreateViewType } from "./types";
import { Controller, FormProvider, useForm } from "react-hook-form";
import {
  useCategoriesList,
  useProductsCreate,
  useProductTypeList,
} from "../../hooks";
import Select from "../../components/select";
import { categoriesFromSelect, productsTypeFromSelect } from "./mapped";
import { PRODUCT_DEFAULT_VALUES } from "./constants";
import "./product-create-view.scss"


export const ProductCreateView = (props: ProductCreateViewType) => {
  const { createProduct } = useProductsCreate();
  const { data: productTypeList } = useProductTypeList();
  const { dataCategoriesList } = useCategoriesList();
  // const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [imagesForUpload, setImagesForUpload] = useState<File[]>([]);

  const productTypeSelected = productsTypeFromSelect(productTypeList);
  const categoriesSelected = categoriesFromSelect(dataCategoriesList);

  const formProduct = useForm({
    defaultValues: {
      ...PRODUCT_DEFAULT_VALUES
    }
  })
  const { register, control, handleSubmit, watch } = formProduct;
  const image:any = watch('images')
  const imagePreview = image ? URL.createObjectURL(image[0]) : null

  useEffect(() => {
    return () => {
      if(imagePreview){
        URL.revokeObjectURL(imagePreview[0])
      }
    }
  }, [imagePreview])

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages = Array.from(files);
    // const newImagePreviews = newImages.map((file) =>
    //   URL.createObjectURL(file as Blob)
    // );

    // setSelectedImages((prevImages) => [...prevImages, ...newImagePreviews]);
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

    createProduct(product);
  };

  return (
    <FormProvider {...formProduct}>
    <div className="klz-product-create-view">
      <div>
        <h2>New Product</h2>
      </div>
      <div className="klz-product-create-view-container">
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
              <Select {...field} 
                multiselect={false}
                options={categoriesSelected} />
            )}
          />
          <Controller
            name="productType"
            control={control}
            render={({ field }) => (
              <Select 
                multiselect={false}
              {...field} options={productTypeSelected} />
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
        <div>
          {imagePreview && <img src={imagePreview} alt="preview"/>}
        </div>
      </div>
    </div>
    </FormProvider>
  );
};
