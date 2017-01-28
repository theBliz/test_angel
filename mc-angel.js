var marketcloud = new Marketcloud.Client({
	publicKey : 'c75b8ba4-b4d5-4e20-8dde-8eb6c3a0a9e9'
})

marketcloud.products.list({},function(err,products){
	console.log(products);
})
