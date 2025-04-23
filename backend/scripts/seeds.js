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

// Define the Item schema
const ItemSchema = new mongoose.Schema(
  {
    slug: { type: String, lowercase: true, unique: true },
    title: { type: String, required: [true, "can't be blank"] },
    description: { type: String, required: [true, "can't be blank"] },
    image: String,
    favoritesCount: { type: Number, default: 0 },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    tagList: [{ type: String }],
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

const Item = mongoose.model('Item', ItemSchema);

// Example data to seed
const sampleItems = [
    {
        slug: 'vintage-chair',
        title: 'Vintage Chair',
        description: 'A stylish vintage chair from the 60s.',
        image: 'http://example.com/vintage-chair.jpg',
        tagList: ['furniture', 'vintage'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'retro-lamp',
        title: 'Retro Lamp',
        description: 'A retro-style lamp perfect for modern interiors.',
        image: 'http://example.com/retro-lamp.jpg',
        tagList: ['lighting', 'retro'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'mid-century-desk',
        title: 'Mid-Century Desk',
        description: 'Walnut mid-century modern desk with drawers.',
        image: 'http://example.com/mid-century-desk.jpg',
        tagList: ['furniture', 'mid-century'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'ceramic-vase',
        title: 'Handmade Ceramic Vase',
        description: 'A beautiful handmade ceramic vase with a glossy finish.',
        image: 'http://example.com/ceramic-vase.jpg',
        tagList: ['home-decor', 'ceramic'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'linen-curtains',
        title: 'Linen Curtains',
        description: 'Breathable natural linen curtains for your living room.',
        image: 'http://example.com/linen-curtains.jpg',
        tagList: ['curtains', 'linen'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'industrial-shelf',
        title: 'Industrial Wall Shelf',
        description: 'A rustic industrial-style wall-mounted shelf.',
        image: 'http://example.com/industrial-shelf.jpg',
        tagList: ['storage', 'industrial'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'abstract-painting',
        title: 'Abstract Canvas Painting',
        description: 'Colorful abstract painting on stretched canvas.',
        image: 'http://example.com/abstract-painting.jpg',
        tagList: ['art', 'abstract'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'macrame-wall-hanging',
        title: 'Macrame Wall Hanging',
        description: 'Hand-knotted macrame wall hanging for boho interiors.',
        image: 'http://example.com/macrame-wall.jpg',
        tagList: ['boho', 'macrame'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'leather-sofa',
        title: 'Leather Sofa',
        description: 'Luxurious genuine leather sofa in dark brown.',
        image: 'http://example.com/leather-sofa.jpg',
        tagList: ['furniture', 'leather'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'bamboo-cutlery',
        title: 'Eco Bamboo Cutlery Set',
        description: 'Sustainable bamboo cutlery perfect for camping.',
        image: 'http://example.com/bamboo-cutlery.jpg',
        tagList: ['kitchen', 'eco-friendly'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'wool-blanket',
        title: 'Chunky Wool Blanket',
        description: 'Hand-knit chunky wool blanket for cozy evenings.',
        image: 'http://example.com/wool-blanket.jpg',
        tagList: ['textiles', 'cozy'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'geometric-rug',
        title: 'Geometric Pattern Rug',
        description: 'Colorful geometric rug to add life to your floor.',
        image: 'http://example.com/geometric-rug.jpg',
        tagList: ['rug', 'modern'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'teak-bookshelf',
        title: 'Teak Wood Bookshelf',
        description: 'Elegant and durable teak wood bookshelf.',
        image: 'http://example.com/teak-bookshelf.jpg',
        tagList: ['furniture', 'books'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'glass-pendant-light',
        title: 'Glass Pendant Light',
        description: 'Modern clear glass pendant lighting for kitchens.',
        image: 'http://example.com/pendant-light.jpg',
        tagList: ['lighting', 'glass'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'reclaimed-table',
        title: 'Reclaimed Wood Table',
        description: 'Dining table made from reclaimed barn wood.',
        image: 'http://example.com/reclaimed-table.jpg',
        tagList: ['eco-friendly', 'dining'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'minimal-clock',
        title: 'Minimal Wall Clock',
        description: 'Silent wall clock with a sleek minimal design.',
        image: 'http://example.com/minimal-clock.jpg',
        tagList: ['home-decor', 'minimalist'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'vintage-radio',
        title: 'Vintage Radio',
        description: 'Fully functional vintage radio with wood paneling.',
        image: 'http://example.com/vintage-radio.jpg',
        tagList: ['electronics', 'vintage'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'plant-stand',
        title: 'Wooden Plant Stand',
        description: 'Elegant plant stand for indoor greenery.',
        image: 'http://example.com/plant-stand.jpg',
        tagList: ['plants', 'furniture'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'aroma-diffuser',
        title: 'Essential Oil Diffuser',
        description: 'Ultrasonic diffuser for aromatherapy and relaxation.',
        image: 'http://example.com/aroma-diffuser.jpg',
        tagList: ['wellness', 'aromatherapy'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'woven-basket',
        title: 'Woven Storage Basket',
        description: 'Natural fiber basket for stylish storage.',
        image: 'http://example.com/woven-basket.jpg',
        tagList: ['storage', 'natural'],
        seller: new mongoose.Types.ObjectId()
      },
      {
        slug: 'floor-lamp',
        title: 'Adjustable Floor Lamp',
        description: 'Modern floor lamp with adjustable head.',
        image: 'http://example.com/floor-lamp.jpg',
        tagList: ['lighting', 'modern'],
        seller: new mongoose.Types.ObjectId()
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
