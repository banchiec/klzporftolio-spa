import { fetchCategoriesList } from "./fetchCategoriesList";

export const fetchCategoriesListQuery = () => ({
		queryKey: ["categories"],
		queryFn: () => fetchCategoriesList(),
})