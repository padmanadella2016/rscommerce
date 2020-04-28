var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json([
        {    id: 1,
            CatlogNumber :1,
            Name:'React Infinity Run Flyknit - Women',
            Image:'https://img1.theiconic.com.au/puBCptNkIJW3fx608B-0Pf5_NlQ=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fnike-3608-851409-1.jpg',
            Category:'shoes',
            Price:'$230'
       },
       {    id: 2,
        CatlogNumber :1,
        Name:'Womens Oh Yeah Slippers',
        Image:'https://img1.theiconic.com.au/LqGpd40OT1GnS8zpGCueCg88C80=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fugg-5555-211299-1.jpg',
        Category:'shoes',
        Price:'$140'
   },
   {    id: 4,
    CatlogNumber :2,
    Name:'The Brighton Neoprene Tote Bag',
    Image:'https://img1.theiconic.com.au/LJc5RQDovHeQRQjLQ2IyKAd0Z10=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fprene-1138-745566-1.jpg',
    Category:'bags',
    Price:'$99.95'
},
{    id: 5,
    CatlogNumber :3,
    Name:'Fitbit Charge 4 watch - Fitbit',
    Image:'https://img1.theiconic.com.au/w8xVnkLdnmZKtazpjey4Ao_rNHc=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Ffitbit-8544-4695801-1.jpg',
    Category:'watch',
    Price:'$249.95'
},
{    id: 6,
    CatlogNumber :3,
    Name:'Icon Clash Fleece Hoodie',
    Image:'https://img1.theiconic.com.au/jQeVrorrXVTTeedT-9t68Dh9aYU=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fnike-9030-599309-1.jpg',
    Category:'watch',
    Price:'$90.00'
},
{    id: 7,
    CatlogNumber :2,
    Name:'The Brighton Neoprene Tote Bag',
    Image:'https://img1.theiconic.com.au/LJc5RQDovHeQRQjLQ2IyKAd0Z10=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fprene-1138-745566-1.jpg',
    Category:'bags',
    Price:'$99.95'
},
    ]);
});

module.exports = router;