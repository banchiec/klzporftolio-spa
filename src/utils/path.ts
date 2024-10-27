export const  getPathImage= (name: String ) => {
	let pathCommissions =""
	const pathMain =  name.toLowerCase().split('/').join('-') 
	if(pathMain.length === 1){
		console.log(pathMain[0])
		return pathMain[0]
	}

	if(name === "Logo/Lettering"){
		let nameFisrt = name.toLowerCase().split('/').join('-')
		pathCommissions = `commissions/${nameFisrt}`
		return pathCommissions
	}
	if(name === "Cover"){
		pathCommissions = `commissions/${name.toLowerCase()}`
		return pathCommissions
	}

	if(name === "Cartoon Illustration"){
		let nameFisrt = name.toLowerCase().split(' ').join('-')
		pathCommissions = `commissions/${nameFisrt}`
		return pathCommissions
	}
}

export const getImagePath = (image: string) => {
	const pathFolderName = `${image?.split('\\')[1]}`
	const pathImageName = `${image?.split('\\')[2]}`
	const pathImage = `${pathFolderName}\\${pathImageName}`
	return pathImage
}