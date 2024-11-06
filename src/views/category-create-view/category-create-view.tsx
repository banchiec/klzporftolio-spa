import { FormProvider, useForm } from "react-hook-form"
import { useCategoriesCreate, useProductTypeList } from "../../hooks"
import { CategoryCreateViewType } from "./types"
import "./category-create-view.scss"
import { CATEGORY_DEFAULT_VALUES } from "./constants"

export const CategoryCreateView = (props: CategoryCreateViewType) => {
	const { createCategory } = useCategoriesCreate()
	const { data: dataProductType } = useProductTypeList()

	const formCategory = useForm({
		defaultValues: {
			...CATEGORY_DEFAULT_VALUES
		}
	})

	const { register, handleSubmit } = formCategory

	
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
		<FormProvider { ...formCategory}>
			<div className="klz-product-type-create-view">
				<h2>Category</h2>
				<form onSubmit={handleSubmit(onSubmit)} encType= "multipart/form-data">
					<input 
						{...register("name")}
						placeholder="Name"
					/>
					<br/>
					<input 
						{...register("description")}
						placeholder="Description" 
					/>
					<br/>
					<div>
						<label>Available</label>
						<input 
							type="checkbox"
							{...register("available")}
						/>
					</div>
					<br/>

					<select 
						multiple
						{...register("productType", {
							required: "Recipe picture is required"
						})}
					>
						{productTypeFromSelect?.map((option:any) => (
							<option key={option.value} value={option.value}>{option.label}</option>
						))}
					</select>

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
		</FormProvider>
	)
}