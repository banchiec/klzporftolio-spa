export const  getPathImage= (name: String ) => {
	let pathCommissions =""
	const pathMain =  name.toLowerCase().split('/').join('-') 
	if(pathMain.length === 1){
		console.log(pathMain[0])
		return pathMain[0]
	}

	console.log(name)
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