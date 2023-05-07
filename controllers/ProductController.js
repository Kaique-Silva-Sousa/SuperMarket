const ProductModel = require('../models/product')

module.exports = class ProductController{

    static async addProduct(req,res){
        
        const {name, price, productID} = req.body

        if(!name) return res.status(400).json({message:'name empty'})
        if(!price) return res.status(400).json({message:'price empty'})
        if(!productID) return res.status(400).json({message:'productID empty'})

        const productIDexists = await ProductModel.find({productID:productID})
        if(productIDexists.length == 1) return res.status(400).json({message:'ProductID exists'})


        const productData = {name,price,productID}
        const newProduct = new ProductModel(productData)
        try{
            await newProduct.save()
        }
        catch(e){
            console.log(e)
        }

    }   
    static async home(req,res){
        const products = await ProductModel.find()
        console.log(products)
        return res.status(200).json(products)
        
    }
    static async Buy(req,res){
        const products = req.body.products
        let list = []
        let productName =[]
        let prices = []
        let repetitions = []
        for(let product of products){
            //console.log(product)
            let productSearch = await ProductModel.find({productID: product})
            if(productSearch.length == 0) return res.status(400).json({message:"product doesn't exists"})
            list.push(productSearch)
            //console.log(productSearch)
        }
        for(let items of list){
            for(let item of items){
                productName.push(item.name)
                prices.push(item.price)
            }
        }
        let productNoRepeat = [... new Set(productName)]
        for(let products of productNoRepeat){
            let qtd = productName.filter(x=> x== products).length
            repetitions.push(qtd)
        }
        /*for(let p of productNoRepeat){
            for(let p2 of repetitions){
                console.log(p2)
            }
        }*/
        console.log(productName)
        let finalPrice = prices.reduce((acumulator,value)=> acumulator + value,0)
        console.log(finalPrice)
        return res.json({message: productName, val: finalPrice})
        //console.log(`${repetitions[0]} ${productNoRepeat[0]}`)
        //console.log(product)
        //console.log(productNoRepeat)
        //console.log(qtd)
    }
}

