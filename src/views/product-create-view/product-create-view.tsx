import { ProductCreateViewType } from "./types"
import { Controller, useForm } from "react-hook-form"
import { useCategoriesList, useProductsCreate, useProductTypeList } from "../../hooks"
import Select from "../../components/select"
import { categoriesFromSelect, productsTypeFromSelect } from "./mapped"
// import "./category-create-view.scss"

interface ReviewType {
	days: 4 | 7 | 10
	price: number
}

interface DeliveryDaysType {
	days: 4 | 7 | 10
	price: number
}

interface DeliveryFormatType {
	format: "png" | "jpg" | "jpeg"
	price: number
}

interface ProductType {
	name: string
	description: string
	image: any
	delivaryDays: Array<DeliveryDaysType>
	colors: Array<string>
	productType: string
	category: string
	deliveryFormat: Array<DeliveryFormatType>
	reviews: Array<ReviewType>
	price: number
	sold: number
	images: any 
	deliveryOptions: Array<string> 
}

export const ProductCreateView = (props: ProductCreateViewType) => {
	const { createProduct } = useProductsCreate()
	const { data: productTypeList } = useProductTypeList()
	const { data: categoriesList} = useCategoriesList()
	const {
		register, 
		control,
		handleSubmit, 
	} = useForm<any>()

	const productTypeSelected =  productsTypeFromSelect(productTypeList)
	const categoriesSelected =  categoriesFromSelect(categoriesList)

	const onSubmit =  (formData:any) => {
		console.log(formData)
		const product = new FormData()
		product.append('name', formData.name)
		product.append('description', formData.description)
		product.append('images', formData?.images[0]!)
		product.append('productType', formData.productType)
		product.append('category', formData.category)
		product.append('sold', formData.sold)
		product.append('price', formData.price)
		// console.log(product)
		createProduct(product)
	}

	return (
		<div className="klz-product-type-create-view">
			<h2>New Product</h2>
			<form onSubmit={handleSubmit(onSubmit)} encType= "multipart/form-data">
				<input 
					{...register("name")}
					placeholder="Name"
					name="name"
				/>
				<br/>
				<input 
					{...register("description")}
					placeholder="Description" 
					name="description"
				/>
				<br/>
				<Controller
					name="category"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={categoriesSelected}
						/>
					)}
				/>
				<Controller
					name="productType"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={productTypeSelected}
						/>
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
				<br/>
				<input 
					type="file"
					multiple={true}
					{...register("images", {
						required: "Recipe picture is required"
					})}
				/>
				<button>Crear</button>
			</form>
		</div>
	)
}