//TODO: seeds script should come here, so we'll be able to put some data in our local env
// seedItems.js

const mongoose = require('mongoose');

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const Item = mongoose.model('Item', ItemSchema);

// Example data to seed
const sampleItems = [
    {
        slug: 'vintage-chair',
        title: 'Vintage Chair',
        description: 'A stylish vintage chair from the 60s.',
        image: 'http://example.com/vintage-chair.jpg',
        tagList: ['furniture', 'vintage'],
        seller: {username: "gpend"}
      },
      {
        slug: 'retro-lamp',
        title: 'Retro Lamp',
        description: 'A retro-style lamp perfect for modern interiors.',
        image: 'http://example.com/retro-lamp.jpg',
        tagList: ['lighting', 'retro'],
        seller: {username: "gpend"}
      },
      {
        slug: 'mid-century-desk',
        title: 'Mid-Century Desk',
        description: 'Walnut mid-century modern desk with drawers.',
        image: 'http://example.com/mid-century-desk.jpg',
        tagList: ['furniture', 'mid-century'],
        seller: {username: "gpend"}
      },
      {
        slug: 'ceramic-vase',
        title: 'Handmade Ceramic Vase',
        description: 'A beautiful handmade ceramic vase with a glossy finish.',
        image: 'http://example.com/ceramic-vase.jpg',
        tagList: ['home-decor', 'ceramic'],
        seller: {username: "gpend"}
      },
      {
        slug: 'linen-curtains',
        title: 'Linen Curtains',
        description: 'Breathable natural linen curtains for your living room.',
        image: 'http://example.com/linen-curtains.jpg',
        tagList: ['curtains', 'linen'],
        seller: {username: "gpend"}
      },
      {
        slug: 'industrial-shelf',
        title: 'Industrial Wall Shelf',
        description: 'A rustic industrial-style wall-mounted shelf.',
        image: 'http://example.com/industrial-shelf.jpg',
        tagList: ['storage', 'industrial'],
        seller: {username: "gpend"}
      },
      {
        slug: 'abstract-painting',
        title: 'Abstract Canvas Painting',
        description: 'Colorful abstract painting on stretched canvas.',
        image: 'http://example.com/abstract-painting.jpg',
        tagList: ['art', 'abstract'],
        seller: {username: "gpend"}
      },
      {
        slug: 'macrame-wall-hanging',
        title: 'Macrame Wall Hanging',
        description: 'Hand-knotted macrame wall hanging for boho interiors.',
        image: 'http://example.com/macrame-wall.jpg',
        tagList: ['boho', 'macrame'],
        seller: {username: "gpend"}
      },
      {
        slug: 'leather-sofa',
        title: 'Leather Sofa',
        description: 'Luxurious genuine leather sofa in dark brown.',
        image: 'http://example.com/leather-sofa.jpg',
        tagList: ['furniture', 'leather'],
        seller: {username: "gpend"}
      },
      {
        slug: 'bamboo-cutlery',
        title: 'Eco Bamboo Cutlery Set',
        description: 'Sustainable bamboo cutlery perfect for camping.',
        image: 'http://example.com/bamboo-cutlery.jpg',
        tagList: ['kitchen', 'eco-friendly'],
        seller: {username: "gpend"}
      },
      {
        slug: 'wool-blanket',
        title: 'Chunky Wool Blanket',
        description: 'Hand-knit chunky wool blanket for cozy evenings.',
        image: 'http://example.com/wool-blanket.jpg',
        tagList: ['textiles', 'cozy'],
        seller: {username: "gpend"}
      },
      {
        slug: 'geometric-rug',
        title: 'Geometric Pattern Rug',
        description: 'Colorful geometric rug to add life to your floor.',
        image: 'http://example.com/geometric-rug.jpg',
        tagList: ['rug', 'modern'],
        seller: {username: "gpend"}
      },
      {
        slug: 'teak-bookshelf',
        title: 'Teak Wood Bookshelf',
        description: 'Elegant and durable teak wood bookshelf.',
        image: 'http://example.com/teak-bookshelf.jpg',
        tagList: ['furniture', 'books'],
        seller: {username: "gpend"}
      },
      {
        slug: 'glass-pendant-light',
        title: 'Glass Pendant Light',
        description: 'Modern clear glass pendant lighting for kitchens.',
        image: 'http://example.com/pendant-light.jpg',
        tagList: ['lighting', 'glass'],
        seller: {username: "gpend"}
      },
      {
        slug: 'reclaimed-table',
        title: 'Reclaimed Wood Table',
        description: 'Dining table made from reclaimed barn wood.',
        image: 'http://example.com/reclaimed-table.jpg',
        tagList: ['eco-friendly', 'dining'],
        seller: {username: "gpend"}
      },
      {
        slug: 'minimal-clock',
        title: 'Minimal Wall Clock',
        description: 'Silent wall clock with a sleek minimal design.',
        image: 'http://example.com/minimal-clock.jpg',
        tagList: ['home-decor', 'minimalist'],
        seller: {username: "gpend"}
      },
      {
        slug: 'vintage-radio',
        title: 'Vintage Radio',
        description: 'Fully functional vintage radio with wood paneling.',
        image: 'http://example.com/vintage-radio.jpg',
        tagList: ['electronics', 'vintage'],
        seller: {username: "gpend"}
      },
      {
        slug: 'plant-stand',
        title: 'Wooden Plant Stand',
        description: 'Elegant plant stand for indoor greenery.',
        image: 'http://example.com/plant-stand.jpg',
        tagList: ['plants', 'furniture'],
        seller: {username: "gpend"}
      },
      {
        slug: 'aroma-diffuser',
        title: 'Essential Oil Diffuser',
        description: 'Ultrasonic diffuser for aromatherapy and relaxation.',
        image: 'http://example.com/aroma-diffuser.jpg',
        tagList: ['wellness', 'aromatherapy'],
        seller: {username: "gpend"}
      },
      {
        slug: 'woven-basket',
        title: 'Woven Storage Basket',
        description: 'Natural fiber basket for stylish storage.',
        image: 'http://example.com/woven-basket.jpg',
        tagList: ['storage', 'natural'],
        seller: {username: "gpend"}
      },
      {
        slug: 'floor-lamp',
        title: 'Adjustable Floor Lamp',
        description: 'Modern floor lamp with adjustable head.',
        image: 'http://example.com/floor-lamp.jpg',
        tagList: ['lighting', 'modern'],
        seller: {username: "gpend"}
      }
];

// Seed function
async function seedDatabase() {
  try {
    await Item.deleteMany({});
    console.log('Old items removed');

    const createdItems = await Item.insertMany(sampleItems);
    console.log('Items seeded:', createdItems);
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
}

// Run the seed function
seedDatabase();
