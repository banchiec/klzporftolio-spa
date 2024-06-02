import { ProductTypeCreateTypes } from "./types"
import "./product-type-create-view.scss"
import { useForm } from "react-hook-form"
import { useProductTypeCreate } from "../../hooks/product-type/use-product-type-create"

interface ProductType {
	name: string
	description: string
	image: any
}

export const ProductTypeCreateView = (props: ProductTypeCreateTypes) => {
	const { createProductType } = useProductTypeCreate()

	const {
		register, 
		handleSubmit, 
	} = useForm<ProductType>()

	const onSubmit = (formData:any) => {
		const productTyeData = new FormData()
		productTyeData.append('name', formData.name)
		productTyeData.append('description', formData.description)
		productTyeData.append('image', formData.image[0])

		createProductType(productTyeData)
	}

	return (
		<div className="klz-product-type-create-view">
			<h2>Product Type</h2>
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
				<input 
					type="file"
					placeholder="Image" 
					{...register("image", {
						required: "Recipe picture is required"
					})}
				/>
				<button>Crear</button>
			</form>
		</div>
	)
}