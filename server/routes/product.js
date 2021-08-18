const express = require('express');
const router = express.Router();
const { cloudinary } = require('./cloudinary');
const Product = require('../models/product_model');
const { addProductValidation } = require('./productAdd.validation');

/* PRODUCT ROUTE: /product/{} */
router.get('/get/search/:searchQuery', (req, res) => {
    let regexBase = req.params.searchQuery.replace(/\s/g, '|');
    regexBase = new RegExp(regexBase, 'gi');
    Product.find({
        $or: [
            { name: { $regex: regexBase } },
            // { instructor: { $regex: regexBase } },
            // { description: { $regex: regexBase } },
        ],
        // $and: [{ userName: req.headers.username }],
    })
        .then((products) => res.json(products))
        .catch((err) => res.status(400).json('Error: ' + err));
});

//Get few popular products
router.get('/popular', async (req, res) => {
    console.log('JESTEm');
    Product.find()
        .limit(5)
        .sort({ popularity: -1 })
        .exec()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/get/all', async (req, res) => {
    const productsIds = req.query.productsIds;
    const productsInfo = [];
    for (let i = 0; i < productsIds.length; i++) {
        await Product.findOne({ _id: productsIds[i] })
            .then((product) => {
                productsInfo.push(product);
            })
            .catch((err) => res.status(400).json('error. didnt find the product'));
    }
    res.json(productsInfo);
});

// Uploads image to cloudinary(image storage) and returns image data(uploadedResponse)

router.post('/uploadimage', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'BikeShop',
        });
        console.log(uploadedResponse);
        res.json(uploadedResponse);
    } catch (error) {
        console.log(error);
    }
});

// Adds product to database, validation by addProductValidation

router.post('/add', async (req, res) => {
    const { error } = addProductValidation(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
    }

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        discountPrice: req.body.discountPrice,
        description: req.body.description,
        category: req.body.category,
        subCategory: req.body.subCategory,
        photo_id: req.body.photo_id,
        popularity: 0,
    });
    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        res.status(400).send(err);
    }
});

// // Get all products
// router.get('/', async (req, res) => {
//     const limit = parseInt(req.query.toLimit);
//     const skip = parseInt(req.query.toSkip);
//     const category = String(req.query.category);
//     if (category === '' || category === 'undefined') {
//         await Product.find()
//             .limit(limit)
//             .skip(skip)
//             .then((products) => res.json(products))
//             .catch((err) => res.status(400).json('Error: ' + err));
//     } else {
//         await Product.find({ category: category })
//             .limit(limit)
//             .skip(skip)
//             .then((product) => {
//                 res.json(product);
//             })
//             .catch((err) => res.status(400).json('error. no product match this category'));
//     }
// });

// Get all products (IFS)
router.get('/', async (req, res) => {
    const limit = parseInt(req.query.toLimit);
    const skip = parseInt(req.query.toSkip);
    const category = String(req.query.category);
    const subcategory = String(req.query.subcategory);
    console.log(category);
    if (category === '' || category === 'undefined') {
        console.log('W PUSTYM');
        await Product.find()
            .limit(limit)
            .skip(skip)
            .then((products) => {
                console.log(products);
                res.json(products);
            })
            .catch((err) => res.status(400).json('Error: ' + err));

        return;
    } else if (subcategory === '' || subcategory === 'undefined') {
        console.log('W KATEGORII');
        await Product.find({ category: category })
            .limit(limit)
            .skip(skip)
            .then((products) => {
                res.json(products);
            })
            .catch((err) => res.status(400).json('error. no products match this category'));
        return;
    } else {
        console.log('W PSUBCAKREOGRYTYM');
        await Product.find({ category: category, subCategory: subcategory })
            .limit(limit)
            .skip(skip)
            .then((products) => {
                res.json(products);
            })
            .catch((err) => res.status(400).json('error. no products match this category'));
    }
});

// // Get all products
// router.get('/withCategory', async (req, res) => {
//     const limit = parseInt(req.query.toLimit);
//     const skip = parseInt(req.query.toSkip);
//     const category = String(req.query.category);
//     const subcategory = String(req.query.subcategory);
//     if (subcategory === '' || subcategory === undefined) {
//         await Product.find({ category: category })
//             .limit(limit)
//             .skip(skip)
//             .then((products) => res.json(products))
//             .catch((err) => res.status(400).json('Error: ' + err));
//     } else {
//         await Product.find({ category: category, subCategory: subcategory })
//             .limit(limit)
//             .skip(skip)
//             .then((products) => {
//                 res.json(products);
//             })
//             .catch((err) => res.status(400).json('error. no products match this category'));
//     }
// });

// Get ammount of all items => needed to pagination
router.get('/ammount/get', async (req, res) => {
    // await Product.countDocuments({}, (err, count) => {
    //     res.json(count);
    // });
    await Product.countDocuments()
        .then((count) => {
            res.json(count);
        })
        .catch((err) => {
            console.log(err);
        });
});

//Gets product by id ==> zmienic sciezke query zeby nie było bledow ObjectID
router.get('/:id', async (req, res) => {
    let popularity;
    await Product.findOne({ _id: req.params.id })
        .then((product) => {
            res.json(product);
            popularity = product.popularity;
        })
        .catch((err) => res.status(400).json('error. didnt find the product'));

    await Product.findByIdAndUpdate(req.params.id, { popularity: popularity + 1 })
        .then(() => {})
        .catch((err) => {
            console.log(err);
        });
});

// router.get('/:category', async(req,res)=>{
//     await Product.find({category: req.params.category})
//     .then(product=>{res.json(product)})
//     .catch(err=>res.status(400).json("error. no product match this category"))
// })

module.exports = router;
