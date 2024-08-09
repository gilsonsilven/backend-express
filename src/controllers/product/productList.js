//import userModel from '../../models/userModel.js'
import productModel from '../../models/productModel.js'

const productList = (req, res) => {

    const products = productModel.getAll()
    res.json(products)
}

export default productList