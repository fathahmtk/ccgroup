
import { Product, Testimonial, BuyingRequest } from './types';

export const CATEGORIES = [
  { 
    id: 'fruits', 
    name: 'Fresh Fruits', 
    icon: '🍎',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'vegetables', 
    name: 'Fresh Vegetables', 
    icon: '🥦',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'rice', 
    name: 'Rice', 
    icon: '🍚',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'grains', 
    name: 'Grains & Millets', 
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'pulses', 
    name: 'Pulses & Lentils', 
    icon: '🥣',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe726e?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'spices', 
    name: 'Spices', 
    icon: '🌶️',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'oils', 
    name: 'Edible Oils & Ghee', 
    icon: '🛢️',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcdccef?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'sugar', 
    name: 'Sugar & Essentials', 
    icon: '🧂',
    image: 'https://images.unsplash.com/photo-1612196603417-22f3e8281313?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'dryfruits', 
    name: 'Dry Fruits & Nuts', 
    icon: '🥜',
    image: 'https://images.unsplash.com/photo-1627666453982-f478a5d3f263?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'frozen', 
    name: 'Frozen & Processed', 
    icon: '❄️',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'valueadded', 
    name: 'Value Added & Ancillary', 
    icon: '📦',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=400&auto=format&fit=crop'
  }
];

export const PRODUCTS: Product[] = [
  // --- 1. FRESH FRUITS (Domestic + Imported) ---
  {
    id: 'f1',
    name: 'Indian Cavendish Banana',
    category: 'Fresh Fruits',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1571771896612-61871f0ee6bd?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571771896612-61871f0ee6bd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Robusta / G9 varieties. Also sourcing Nendran and Poovan. Uniform hands, spot-free yellow ripening.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 89, protein: '1.1g', carbs: '22.8g', fat: '0.3g' },
    specs: { 'HS Code': '0803.90', 'Variety': 'Robusta/G9/Nendran', 'Packaging': '13.5kg / 7kg Carton', 'Class': 'Class A Export' },
    reviews: []
  },
  {
    id: 'f2',
    name: 'Kashmiri Red Apple',
    category: 'Fresh Fruits',
    price: '₹130-150 / kg',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=800&auto=format&fit=crop',
    description: 'Domestic premium apples from Himachal/Kashmir. Crunchy, sweet, and high color. Loose or Crate pack.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 52, protein: '0.3g', carbs: '14g', fat: '0.2g' },
    specs: { 'HS Code': '0808.10', 'Grade': 'Best / A Grade', 'Packaging': '20kg Crate / 10kg Carton', 'Season': 'Aug-Jan' },
    reviews: []
  },
  {
    id: 'f3',
    name: 'Washington Apple (Red Delicious)',
    category: 'Fresh Fruits',
    price: 'Premium Rate',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=800&auto=format&fit=crop',
    description: 'Imported USA Origin. Waxed, deep red color, consistent size. High shelf life for retail.',
    origin: 'USA',
    nutrition: { servingSize: '100g', calories: 52, protein: '0.3g', carbs: '14g', fat: '0.2g' },
    specs: { 'HS Code': '0808.10', 'Count': '80/100/113', 'Packaging': '18kg Telescopic Carton', 'Storage': 'CA Stored' },
    reviews: []
  },
  {
    id: 'f4',
    name: 'Alphonso Mango (Devgad/Ratnagiri)',
    category: 'Fresh Fruits',
    price: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1605027628030-9bb6f83535e6?q=80&w=800&auto=format&fit=crop',
    description: 'The King of Mangoes. GI Tagged. Saffron pulp, thin skin. Air cargo ready for export.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 60, protein: '0.8g', carbs: '15g', fat: '0.4g' },
    specs: { 'HS Code': '0804.50', 'Packaging': '1 Dozen Box', 'Weight': '225g-275g', 'Season': 'Mar-Jun' },
    reviews: []
  },
  {
    id: 'f5',
    name: 'Valencia Orange',
    category: 'Fresh Fruits',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=800&auto=format&fit=crop',
    description: 'Imported from Egypt/South Africa. High juice content. Perfect for HoReCa and Juicing.',
    origin: 'Egypt / South Africa',
    nutrition: { servingSize: '100g', calories: 47, protein: '0.9g', carbs: '12g', fat: '0.1g' },
    specs: { 'HS Code': '0805.10', 'Count': '48/56/64/72', 'Packaging': '15kg Carton', 'Brix': '11% Min' },
    reviews: []
  },
  {
    id: 'f6',
    name: 'Exotic Kiwi & Dragon Fruit',
    category: 'Fresh Fruits',
    price: 'Premium Rate',
    image: 'https://images.unsplash.com/photo-1585059895524-72359e06138a?q=80&w=800&auto=format&fit=crop',
    description: 'Hayward Green Kiwi (Chile/Iran) and Vietnamese Dragon Fruit (White/Red Flesh).',
    origin: 'Chile / Vietnam',
    nutrition: { servingSize: '100g', calories: 61, protein: '1.1g', carbs: '15g', fat: '0.5g' },
    specs: { 'HS Code': '0810.50', 'Packaging': '3kg/5kg/10kg Box', 'Grade': 'Premium', 'Availability': 'Year-round' },
    reviews: []
  },

  // --- 2. FRESH VEGETABLES ---
  {
    id: 'v1',
    name: 'Nashik Red Onion',
    category: 'Fresh Vegetables',
    price: '₹46.80 / kg (Indicative)',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa829?q=80&w=800&auto=format&fit=crop',
    description: 'A Grade Red Onion. Double skin dried. 45mm-55mm+ size. Long shelf life for export.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 40, protein: '1.1g', carbs: '9g', fat: '0.1g' },
    specs: { 'HS Code': '0703.10', 'Size': '45mm+', 'Packaging': '20kg/50kg Mesh Bag', 'Type': 'N-53 / Agrifound Dark Red' },
    reviews: []
  },
  {
    id: 'v2',
    name: 'Fresh Potato (Agra/Indore)',
    category: 'Fresh Vegetables',
    price: '₹8-12 / kg (Bulk)',
    image: 'https://images.unsplash.com/photo-1518977676605-693d3a11168f?q=80&w=800&auto=format&fit=crop',
    description: 'Chipsona / LR / 3797 varieties. High dry matter for processing or fresh table consumption.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 77, protein: '2g', carbs: '17g', fat: '0.1g' },
    specs: { 'HS Code': '0701.90', 'Size': '45mm+', 'Packaging': '50kg Jute/Mesh Bag', 'Surface': 'Washed / Unwashed' },
    reviews: []
  },
  {
    id: 'v3',
    name: 'Green Capsicum & Exotic Veg',
    category: 'Fresh Vegetables',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdf5d2e374?q=80&w=800&auto=format&fit=crop',
    description: 'Hotel grade Capsicum, Broccoli, Zucchini, and Iceberg Lettuce. Greenhouse cultivated.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 20, protein: '0.9g', carbs: '4.6g', fat: '0.2g' },
    specs: { 'HS Code': '0709.60', 'Packaging': 'Corrugated Box / Crate', 'Grade': 'A (Hotel)', 'Shelf Life': '1-2 Weeks' },
    reviews: []
  },

  // --- 3. RICE ---
  {
    id: 'r1',
    name: '1121 Basmati Rice (Steam/Sella)',
    category: 'Rice',
    price: '₹85-95 / kg (Bulk)',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536304993881-ffc028db696f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Extra Long Grain (8.35mm avg). Available in Steam, White Sella, and Golden Sella. 95% Purity.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 130, protein: '2.7g', carbs: '28g', fat: '0.3g' },
    specs: { 'HS Code': '1006.30', 'Grain Length': '8.35mm', 'Moisture': '12.5% Max', 'Packaging': '5kg/10kg/25kg BOPP/Non-Woven' },
    reviews: []
  },
  {
    id: 'r2',
    name: 'Sona Masuri Rice',
    category: 'Rice',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    description: 'Medium grain, lightweight aromatic rice. 12+ months old crop. Ideal for daily staples.',
    origin: 'India (Karnataka/AP)',
    nutrition: { servingSize: '100g', calories: 130, protein: '2.5g', carbs: '28g', fat: '0.5g' },
    specs: { 'HS Code': '1006.30', 'Polish': 'Silky / Double Polish', 'Broken': '5% Max', 'Packaging': '25kg PP Bag' },
    reviews: []
  },
  {
    id: 'r3',
    name: 'Matta Rice (Palakkadan)',
    category: 'Rice',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1599581885482-143013b52d9c?q=80&w=800&auto=format&fit=crop',
    description: 'Kerala Rosematta. Parboiled red rice with high nutrient retention. Bold grain.',
    origin: 'India (Kerala)',
    nutrition: { servingSize: '100g', calories: 350, protein: '9g', carbs: '78g', fat: '1g' },
    specs: { 'HS Code': '1006.30', 'Type': 'Vadi / Unda', 'Packaging': '5kg/10kg/25kg/50kg', 'Processing': 'Double Boiled' },
    reviews: []
  },
  {
    id: 'r4',
    name: 'IR64 Parboiled Rice',
    category: 'Rice',
    price: 'Economy Rate',
    image: 'https://images.unsplash.com/photo-1613531338573-984dd08f1b61?q=80&w=800&auto=format&fit=crop',
    description: 'Long grain non-basmati. 5% or 25% broken. High volume export staple for Africa/Gulf.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 130, protein: '2.7g', carbs: '28g', fat: '0.3g' },
    specs: { 'HS Code': '1006.30', 'Broken': '5% / 25%', 'Sortex': '100% / Rejection', 'Packaging': '50kg PP Bag' },
    reviews: []
  },

  // --- 4. GRAINS & MILLETS (Expanded) ---
  {
    id: 'g1',
    name: 'Milling Wheat (Lokwan/Sharbati)',
    category: 'Grains & Millets',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop',
    description: 'Premium Indian Wheat. High gluten (12-13%). Machine cleaned. Suitable for Bakery & Chakki Atta.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 340, protein: '13.2g', carbs: '72g', fat: '2.5g' },
    specs: { 'HS Code': '1001.99', 'Protein': '12.5% Min', 'Moisture': '12% Max', 'Packaging': '50kg Jute/PP Bag' },
    reviews: []
  },
  {
    id: 'g2',
    name: 'Yellow Maize (Corn)',
    category: 'Grains & Millets',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=800&auto=format&fit=crop',
    description: 'For Animal Feed or Starch Industry. High carbohydrate content. Low Aflatoxin.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 365, protein: '9.4g', carbs: '74g', fat: '4.7g' },
    specs: { 'HS Code': '1005.90', 'Moisture': '14% Max', 'Admixture': '2% Max', 'Packaging': 'Bulk / 50kg PP' },
    reviews: []
  },
  {
    id: 'g3',
    name: 'Pearl Millet (Bajra)',
    category: 'Grains & Millets',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1621817292275-52f205a22c57?q=80&w=800&auto=format&fit=crop',
    description: 'Major Millet. Highly nutritious, gluten-free, and rich in iron. Used for flatbreads (Rotla) and porridge.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 378, protein: '11g', carbs: '72g', fat: '4g' },
    specs: { 'HS Code': '1008.21', 'Purity': '99%', 'Color': 'Grey/Green', 'Packaging': '25kg/50kg PP Bag' },
    reviews: []
  },
  {
    id: 'g4',
    name: 'Sorghum (Jowar)',
    category: 'Grains & Millets',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1518567709337-37dfd0800c7e?q=80&w=800&auto=format&fit=crop',
    description: 'White Sorghum. Ancient grain, high in fiber and antioxidants. Staple for Bhakri/Roti and Animal Feed.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 339, protein: '11.3g', carbs: '74.6g', fat: '3.3g' },
    specs: { 'HS Code': '1007.90', 'Type': 'White/Red', 'Moisture': '12% Max', 'Packaging': '50kg Bag' },
    reviews: []
  },
  {
    id: 'g5',
    name: 'Finger Millet (Ragi)',
    category: 'Grains & Millets',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1647420959325-a131804f8615?q=80&w=800&auto=format&fit=crop',
    description: 'Red Millet. Exceptional calcium content. Used for Malt, Dosa, and Porridge. Deep red colour.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 328, protein: '7.3g', carbs: '72g', fat: '1.3g' },
    specs: { 'HS Code': '1008.20', 'Cleaning': 'Machine Cleaned', 'Packaging': '25kg/50kg', 'Grade': 'A' },
    reviews: []
  },
  {
    id: 'g6',
    name: 'Quinoa (White/Red/Tricolor)',
    category: 'Grains & Millets',
    price: 'Premium Rate',
    image: 'https://images.unsplash.com/photo-1586259074092-2637a85de9e0?q=80&w=800&auto=format&fit=crop',
    description: 'Pseudo-millet. Complete protein containing all 9 essential amino acids. Saponin-free/Washed.',
    origin: 'India / Peru',
    nutrition: { servingSize: '100g', calories: 368, protein: '14g', carbs: '64g', fat: '6g' },
    specs: { 'HS Code': '1008.50', 'Type': 'White/Red/Black', 'Purity': '99.9%', 'Packaging': '25kg Paper Bag' },
    reviews: []
  },
  {
    id: 'g7',
    name: 'Foxtail Millet (Kangni)',
    category: 'Grains & Millets',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1662036254426-3041d9990263?q=80&w=800&auto=format&fit=crop',
    description: 'Minor Millet. Ancient grain with low glycemic index. Rich in dietary fiber and minerals. Ideal for diabetic diets.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 331, protein: '12.3g', carbs: '60g', fat: '4.3g' },
    specs: { 'HS Code': '1008.29', 'Purity': '99%', 'Type': 'Unpolished', 'Packaging': '25kg PP Bag' },
    reviews: []
  },
  {
    id: 'g8',
    name: 'Amaranth (Rajgira)',
    category: 'Grains & Millets',
    price: 'Premium Rate',
    image: 'https://images.unsplash.com/photo-1594917426861-5464197c3656?q=80&w=800&auto=format&fit=crop',
    description: 'Pseudo-millet. High protein superfood. Gluten-free and rich in lysine. Used in fasting foods and energy bars.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 371, protein: '14g', carbs: '65g', fat: '7g' },
    specs: { 'HS Code': '1008.90', 'Form': 'Seed / Popped', 'Purity': '99.9%', 'Packaging': '25kg Paper Bag' },
    reviews: []
  },
  {
    id: 'g9',
    name: 'Buckwheat (Kuttu)',
    category: 'Grains & Millets',
    price: 'Premium Rate',
    image: 'https://images.unsplash.com/photo-1506456073173-0370604b6849?q=80&w=800&auto=format&fit=crop',
    description: 'Pseudo-cereal. Fruit seed related to rhubarb. Gluten-free, high fiber. Staple for fasting flour (Kuttu Atta).',
    origin: 'India / Russia',
    nutrition: { servingSize: '100g', calories: 343, protein: '13g', carbs: '71g', fat: '3.4g' },
    specs: { 'HS Code': '1008.10', 'Form': 'Groats / Flour', 'Moisture': '12%', 'Packaging': '25kg Bag' },
    reviews: []
  },

  // --- 5. PULSES & LENTILS ---
  {
    id: 'p1',
    name: 'Toor Dal (Pigeon Peas)',
    category: 'Pulses & Lentils',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe726e?q=80&w=800&auto=format&fit=crop',
    description: 'Fatka / Desi grades. Oily and Non-oily options. High protein content.',
    origin: 'India / Myanmar',
    nutrition: { servingSize: '100g', calories: 343, protein: '22g', carbs: '63g', fat: '1.5g' },
    specs: { 'HS Code': '0713.60', 'Polish': 'Water/Oil', 'Foreign Matter': '1% Max', 'Packaging': '30kg/50kg Bag' },
    reviews: []
  },
  {
    id: 'p2',
    name: 'Kabuli Chana (Chickpeas)',
    category: 'Pulses & Lentils',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=800&auto=format&fit=crop',
    description: 'White Chickpeas. Counts 42-44 / 44-46 (12mm). Creamy texture for Hummus/Curry.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 364, protein: '19g', carbs: '61g', fat: '6g' },
    specs: { 'HS Code': '0713.20', 'Size': '7mm - 12mm', 'Count': '42-44 / 44-46 / 58-60', 'Packaging': '25kg/50kg PP' },
    reviews: []
  },
  {
    id: 'p3',
    name: 'Moong Dal (Yellow Split)',
    category: 'Pulses & Lentils',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1559816656-9a259c238bd7?q=80&w=800&auto=format&fit=crop',
    description: 'Washed and split Mung beans. Quick cooking. Staple for Dal Tadka.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 347, protein: '24g', carbs: '63g', fat: '1.2g' },
    specs: { 'HS Code': '0713.31', 'Purity': '99%', 'Moisture': '12%', 'Packaging': '25kg/50kg' },
    reviews: []
  },

  // --- 6. SPICES ---
  {
    id: 'sp1',
    name: 'Guntur Dry Red Chilli',
    category: 'Spices',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop',
    description: 'Teja S17 / Sanam S4 / Byadgi. High Pungency and Color varieties. Stem/Stemless.',
    origin: 'India (Guntur)',
    nutrition: { servingSize: '100g', calories: 40, protein: '2g', carbs: '9g', fat: '1g' },
    specs: { 'HS Code': '0904.21', 'SHU': '20k - 90k', 'ASTA': '40-100', 'Packaging': '5kg/10kg/25kg Jute Bag' },
    reviews: []
  },
  {
    id: 'sp2',
    name: 'Alleppey Green Cardamom',
    category: 'Spices',
    price: 'Premium Rate',
    image: 'https://images.unsplash.com/photo-1550951663-8a38c2084df8?q=80&w=800&auto=format&fit=crop',
    description: '8mm+ Bold Pods. Intense aroma and bright green color. Handpicked from Idukki.',
    origin: 'India (Kerala)',
    nutrition: { servingSize: '1 pod', calories: 5, protein: '0.1g', carbs: '1g', fat: '0g' },
    specs: { 'HS Code': '0908.31', 'Size': '7mm / 8mm+', 'Litre Weight': '400g+', 'Packaging': '5kg Vacuum Pack' },
    reviews: []
  },
  {
    id: 'sp3',
    name: 'Turmeric Finger (Salem/Erode)',
    category: 'Spices',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1615485925694-a035aa933853?q=80&w=800&auto=format&fit=crop',
    description: 'High Curcumin (3-5%). Double polished fingers. Vibrant yellow color.',
    origin: 'India',
    nutrition: { servingSize: '1 tsp', calories: 8, protein: '0g', carbs: '1g', fat: '0g' },
    specs: { 'HS Code': '0910.30', 'Curcumin': '3% / 5%', 'Polish': 'Single/Double', 'Packaging': '25kg/50kg Jute' },
    reviews: []
  },

  // --- 7. OILS & GHEE ---
  {
    id: 'o1',
    name: 'Refined Sunflower Oil',
    category: 'Edible Oils & Ghee',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1620888200673-827c191a221f?q=80&w=800&auto=format&fit=crop',
    description: 'Imported Origin (Ukraine/Russia) or Domestic. Clear, Lite, Vitamin E fortified.',
    origin: 'Ukraine / Russia / India',
    nutrition: { servingSize: '1 tbsp', calories: 120, protein: '0g', carbs: '0g', fat: '14g' },
    specs: { 'HS Code': '1512.19', 'Packaging': '1L Bottle / 15kg Tin / Flexitank', 'FFA': '0.1% Max' },
    reviews: []
  },
  {
    id: 'o2',
    name: 'Pure Cow/Buffalo Ghee',
    category: 'Edible Oils & Ghee',
    price: 'Premium Rate',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
    description: 'Traditional Danedar texture. Rich aroma. 99.7% Fat. Clarified Butter.',
    origin: 'India',
    nutrition: { servingSize: '1 tbsp', calories: 112, protein: '0g', carbs: '0g', fat: '13g' },
    specs: { 'HS Code': '0405.90', 'Type': 'Cow / Buffalo', 'Packaging': '200ml/500ml/1L/15kg Tin', 'Aroma': 'Rich' },
    reviews: []
  },

  // --- 8. SUGAR & SALT ---
  {
    id: 's1',
    name: 'White Crystal Sugar (S30/M30)',
    category: 'Sugar & Essentials',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1612196603417-22f3e8281313?q=80&w=800&auto=format&fit=crop',
    description: 'ICUMSA < 100. Sulphurless. Sparkling white. Double Refined.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 387, protein: '0g', carbs: '99.9g', fat: '0g' },
    specs: { 'HS Code': '1701.99', 'Grade': 'S30 / M30', 'Polarization': '99.8%', 'Packaging': '50kg PP Bag' },
    reviews: []
  },
  {
    id: 's2',
    name: 'Natural Jaggery (Gur)',
    category: 'Sugar & Essentials',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1629124446545-2e1189d2d095?q=80&w=800&auto=format&fit=crop',
    description: 'Chemical-free. Available in Balls, Cubes, or Powder. Rich in Iron.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 383, protein: '0.4g', carbs: '98g', fat: '0.1g' },
    specs: { 'HS Code': '1701.13', 'Form': 'Solid / Powder', 'Color': 'Golden / Dark Brown', 'Packaging': '10kg/30kg Box' },
    reviews: []
  },

  // --- 9. DRY FRUITS ---
  {
    id: 'df1',
    name: 'Cashew Nuts (W320/W240)',
    category: 'Dry Fruits & Nuts',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1596232501066-673e4a2fb6bc?q=80&w=800&auto=format&fit=crop',
    description: 'Whole White Kernels. Crunchy and Sweet. W320 is standard export grade.',
    origin: 'India / Vietnam',
    nutrition: { servingSize: '30g', calories: 157, protein: '5g', carbs: '9g', fat: '12g' },
    specs: { 'HS Code': '0801.32', 'Grade': 'W180 / W240 / W320', 'Packaging': '10kg Tin / 25lbs Vacuum', 'Moisture': '5% Max' },
    reviews: []
  },
  {
    id: 'df2',
    name: 'Premium Dates (Kimia/Medjool)',
    category: 'Dry Fruits & Nuts',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1563200877-c9183d254353?q=80&w=800&auto=format&fit=crop',
    description: 'Imported from Saudi/UAE/Tunisia/Iran. Soft flesh, dark color, high sweetness.',
    origin: 'Saudi Arabia / Iran / Tunisia',
    nutrition: { servingSize: '100g', calories: 277, protein: '1.8g', carbs: '75g', fat: '0.2g' },
    specs: { 'HS Code': '0804.10', 'Variety': 'Mazafati/Kimia/Medjool', 'Packaging': '500g Box x 12', 'Storage': 'Cold Storage' },
    reviews: []
  },
  
  // --- 10. FROZEN & PROCESSED ---
  {
    id: 'fz1',
    name: 'Frozen Green Peas (IQF)',
    category: 'Frozen & Processed',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1590799797089-2244247596b6?q=80&w=800&auto=format&fit=crop',
    description: 'Farm fresh sweet peas, blanched and IQF frozen. No preservatives.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 81, protein: '5g', carbs: '14g', fat: '0.4g' },
    specs: { 'HS Code': '0710.21', 'Process': 'IQF', 'Packaging': '1kg / 2.5kg / 30kg Bulk', 'Shelf Life': '18 Months' },
    reviews: []
  },
  {
    id: 'fz2',
    name: 'French Fries (Frozen)',
    category: 'Frozen & Processed',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1630384030331-8e662ac516c7?q=80&w=800&auto=format&fit=crop',
    description: 'Shoestring (6mm) or Regular (9mm). Pre-fried. Crisp golden texture.',
    origin: 'India / Imported',
    nutrition: { servingSize: '100g', calories: 150, protein: '2g', carbs: '25g', fat: '5g' },
    specs: { 'HS Code': '2004.10', 'Cut': '6mm / 9mm', 'Packaging': '2.5kg x 5 Bags', 'Grade': 'A' },
    reviews: []
  },

  // --- 11. VALUE ADDED ---
  {
    id: 'va1',
    name: 'Pickles (Mango/Lime)',
    category: 'Value Added & Ancillary',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1621506821957-1b50ab7787a4?q=80&w=800&auto=format&fit=crop',
    description: 'Traditional Indian pickles in oil. Mango, Lime, Mixed Veg options. Bulk or Retail pack.',
    origin: 'India',
    nutrition: { servingSize: '1 tbsp', calories: 25, protein: '0g', carbs: '2g', fat: '2g' },
    specs: { 'HS Code': '2001.90', 'Packaging': '5kg Bucket / 300g Jar', 'Type': 'Spicy / Mild', 'Shelf Life': '12 Months' },
    reviews: []
  },
  {
    id: 'va2',
    name: 'Rice Flour / Spices Mix',
    category: 'Value Added & Ancillary',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=800&auto=format&fit=crop',
    description: 'Fine milled rice flour for food processing. Ready-to-cook spice blends (Masalas).',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 366, protein: '6g', carbs: '80g', fat: '1.4g' },
    specs: { 'HS Code': '1102.90', 'Mesh Size': 'Fine / Coarse', 'Packaging': '1kg / 50kg Bag', 'Purity': '100%' },
    reviews: []
  }
];

export const BUYING_REQUESTS: BuyingRequest[] = [
  { id: 'br1', commodity: '1121 Steam Basmati', volume: '25,000 MT', destination: 'Dammam, Saudi Arabia', postedDate: '2 hours ago', status: 'Urgent' },
  { id: 'br2', commodity: 'Refined Sugar ICUMSA 45', volume: '12,500 MT', destination: 'Mombasa, Kenya', postedDate: '4 hours ago', status: 'Open' },
  { id: 'br3', commodity: 'Yellow Maize (Feed)', volume: '50,000 MT', destination: 'Haiphong, Vietnam', postedDate: '1 day ago', status: 'Closing Soon' },
  { id: 'br4', commodity: 'Frozen Buffalo Meat (98VL)', volume: '2 Containers', destination: 'Kuala Lumpur, Malaysia', postedDate: '1 day ago', status: 'Open' },
  { id: 'br5', commodity: 'Raw Cashew Nuts', volume: '500 MT', destination: 'Mangalore, India', postedDate: '3 hours ago', status: 'Urgent' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "James Anderson",
    role: "Procurement Director, EuroFoods Distribution",
    quote: "CC Group delivers the compliance documentation we need for seamless customs clearance in Europe. Their logistics team is top-tier."
  },
  {
    id: 2,
    name: "Ahmed Al-Fayed",
    role: "Supply Chain Mgr, Grand Hotels Group",
    quote: "We source our entire annual rice and spice requirement through CC Group. Reliable delivery schedules for our GCC operations."
  }
];

export const CERTIFICATIONS = [
  { name: 'FSSAI', description: 'Food Safety and Standards Authority of India' },
  { name: 'APEDA', description: 'Agricultural & Processed Food Products Export Development Authority' },
  { name: 'ISO 22000', description: 'Food Safety Management System' },
  { name: 'HACCP', description: 'Hazard Analysis Critical Control Point' },
  { name: 'Halal', description: 'Certified Halal for GCC/Islamic Markets' },
  { name: 'Spices Board', description: 'Spices Board of India Registered Exporter' }
];

export const MARKET_DATA = [
  { name: 'Rice', value: 400 },
  { name: 'Sugar', value: 350 },
  { name: 'Oils', value: 300 },
  { name: 'Spices', value: 200 },
  { name: 'Frozen', value: 150 },
];
