import { CategoryCreateViewType } from "./types"
import { Controller, useForm } from "react-hook-form"
import { useCategoriesCreate, useProductTypeList } from "../../hooks"
import "./category-create-view.scss"
import { Select } from "../../components/select/Select"


interface CategoryType {
	name: string
	description: string
	image: any
	available: boolean
	productType: string
}

export const CategoryCreateView = (props: CategoryCreateViewType) => {
	const { createCategory } = useCategoriesCreate()
	const { data: dataProductType } = useProductTypeList()
	const {
		register, 
		control,
		handleSubmit, 
	} = useForm<CategoryType>()

	const productTypeFromSelect= dataProductType?.map((dataProduct: any) => ({
		value: dataProduct._id,
		label: dataProduct.name,
	}))

	const onSubmit = (formData:any) => {
		const newCategory = new FormData()
		newCategory.append('name', formData.name)
		newCategory.append('description', formData.description)
		newCategory.append('image', formData.image[0])
		newCategory.append('productType', formData.productType)
		
		createCategory(newCategory)
	}

	return (
		<div className="klz-product-type-create-view">
			<h2>Category</h2>
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
				<div>
					<label>Available</label>
					<input 
						type="checkbox"
						{...register("available")}
						name="checkbox"
					/>
				</div>
				<br/>

				<Controller
					name="productType"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							multiselect
							options={productTypeFromSelect}
						/>
					)}
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