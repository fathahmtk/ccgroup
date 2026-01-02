import { Product, Testimonial, BuyingRequest } from './types';

export const CATEGORIES = [
  { 
    id: 'grains', 
    name: 'Grains & Cereals', 
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&auto=format&fit=crop' // Sacks of rice
  },
  { 
    id: 'meat', 
    name: 'Meat & Poultry', 
    icon: '🥩',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=400&auto=format&fit=crop' // Raw meat
  },
  { 
    id: 'seafood', 
    name: 'Seafood', 
    icon: '🐟',
    image: 'https://images.unsplash.com/photo-1534942082298-54b3952f4479?q=80&w=400&auto=format&fit=crop' // Raw fish
  },
  { 
    id: 'oils', 
    name: 'Edible Oils', 
    icon: '🌻',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcdccef?q=80&w=400&auto=format&fit=crop' // Olive oil (industrial context if possible, but this is generic)
  },
  { 
    id: 'dairy', 
    name: 'Dairy Ingredients', 
    icon: '🥛',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=400&auto=format&fit=crop' // Milk/Dairy
  },
  { 
    id: 'spices', 
    name: 'Spices & Herbs', 
    icon: '🌶️',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop' // Spices
  },
  { 
    id: 'sugar', 
    name: 'Sugar & Sweeteners', 
    icon: '🍬',
    image: 'https://images.unsplash.com/photo-1612196603417-22f3e8281313?q=80&w=400&auto=format&fit=crop' // Sugar
  },
];

export const PRODUCTS: Product[] = [
  // MEAT & POULTRY
  {
    id: 'm1',
    name: 'Frozen Chicken Griller (900g-1200g)',
    category: 'Meat & Poultry',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=800&auto=format&fit=crop', // Raw chicken
    description: 'Grade A Frozen Whole Chicken. Halal Certified. Individually Wrapped (IWP).',
    origin: 'Brazil',
    nutrition: { servingSize: '100g', calories: 215, protein: '18g', carbs: '0g', fat: '15g' },
    specs: { 'Freezing': 'IQF / BQF', 'Shelf Life': '24 Months', 'Certifications': 'HALAL, SIF', 'Packaging': '10kg Master Carton', 'MOQ': '27 MT (1x40ft)' },
    reviews: []
  },
  {
    id: 'm2',
    name: 'Boneless Beef Cuts (Forequarters)',
    category: 'Meat & Poultry',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop',
    description: 'Frozen Beef Forequarters. 90VL. Industrial block frozen for processing.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 250, protein: '26g', carbs: '0g', fat: '17g' },
    specs: { 'Lean Content': '90% VL', 'Shelf Life': '18 Months', 'Storage': '-18°C', 'Packaging': '25kg Block / Poly', 'MOQ': '28 MT' },
    reviews: []
  },

  // SEAFOOD
  {
    id: 's1',
    name: 'Vannamei White Shrimp (HLSO)',
    category: 'Seafood',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=800&auto=format&fit=crop', // Raw shrimp
    description: 'Headless Shell-On. Size 21/25. Block Frozen. Aquaculture GAP certified.',
    origin: 'Vietnam',
    nutrition: { servingSize: '100g', calories: 106, protein: '20g', carbs: '0g', fat: '1.7g' },
    specs: { 'Glazing': '5-10%', 'Process': 'Block Frozen', 'Certifications': 'ASC, BRC', 'Packaging': '6x1.8kg Block', 'MOQ': '1 FCL (40ft)' },
    reviews: []
  },
  {
    id: 's2',
    name: 'Atlantic Mackerel (WR)',
    category: 'Seafood',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1534942082298-54b3952f4479?q=80&w=800&auto=format&fit=crop', // Raw fish
    description: 'Whole Round Frozen Mackerel (300-500g). High fat content for smoking/canning.',
    origin: 'Norway',
    nutrition: { servingSize: '100g', calories: 205, protein: '19g', carbs: '0g', fat: '14g' },
    specs: { 'Fat Content': '20%+', 'Catch Method': 'Trawl', 'Season': 'Sep-Nov', 'Packaging': '20kg Master Carton', 'MOQ': '26 MT' },
    reviews: []
  },

  // GRAINS
  {
    id: '1',
    name: 'Royal Basmati Rice 1121',
    category: 'Grains & Cereals',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop', // Sacks
    description: 'Premium 1121 Steam Basmati Rice. Extra Long Grain. 0% broken. Mill direct.',
    origin: 'India',
    nutrition: { servingSize: '100g', calories: 130, protein: '2.7g', carbs: '28g', fat: '0.3g' },
    specs: { 'Grain Length': '8.35mm', 'Moisture': '12% Max', 'Purity': '95%', 'Packaging': '50kg PP Bag', 'MOQ': '25 MT (1x20ft)' },
    reviews: []
  },
  {
    id: '2',
    name: 'Thai Hom Mali Jasmine Rice',
    category: 'Grains & Cereals',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1599581885482-143013b52d9c?q=80&w=800&auto=format&fit=crop', // Raw rice texture
    description: 'New Crop 100% Whole Kernel Jasmine Rice. Certified Thai Hom Mali.',
    origin: 'Thailand',
    nutrition: { servingSize: '100g', calories: 125, protein: '2.5g', carbs: '27g', fat: '0.2g' },
    specs: { 'Crop Year': 'Current', 'Broken': '5% Max', 'Certifications': 'Thai Hom Mali', 'Packaging': '25kg/50kg PP Bag', 'MOQ': '25 MT' },
    reviews: []
  },

  // OILS
  {
    id: '5',
    name: 'Extra Virgin Olive Oil',
    category: 'Edible Oils',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcdccef?q=80&w=800&auto=format&fit=crop',
    description: 'Cold-pressed, Acidity <0.8%. Available in bulk Flexi-tanks for bottling.',
    origin: 'Spain',
    nutrition: { servingSize: '1 tbsp', calories: 119, protein: '0g', carbs: '0g', fat: '14g' },
    specs: { 'Acidity': '<0.8%', 'Extraction': 'Cold Pressed', 'Origin': 'Andalusia', 'Packaging': 'Flexitank (21MT)', 'MOQ': '21 MT' },
    reviews: []
  },
  {
    id: '7',
    name: 'Refined Sunflower Oil',
    category: 'Edible Oils',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1620888200673-827c191a221f?q=80&w=800&auto=format&fit=crop',
    description: 'Winterized, deodorized. ISO 22000 refinery. Bulk or bottled.',
    origin: 'Ukraine',
    nutrition: { servingSize: '1 tbsp', calories: 120, protein: '0g', carbs: '0g', fat: '14g' },
    specs: { 'FFA': '0.1% Max', 'Color': 'Golden Yellow', 'Refining': 'Winterized', 'Packaging': 'Flexitank / 5L PET', 'MOQ': '1 FCL' },
    reviews: []
  },

  // SPICES
  {
    id: '9',
    name: 'Black Pepper GL 550',
    category: 'Spices & Herbs',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1564858880650-67123aa24032?q=80&w=800&auto=format&fit=crop', // Peppercorns
    description: 'Garbled Light 550g/l. Machine Cleaned. High Piperine content.',
    origin: 'Vietnam',
    nutrition: { servingSize: '1 tsp', calories: 6, protein: '0.2g', carbs: '1g', fat: '0g' },
    specs: { 'Density': '550g/l', 'Moisture': '13% Max', 'Admixture': '1% Max', 'Packaging': '50kg Jute Bag', 'MOQ': '14 MT' },
    reviews: []
  },

  // SUGAR
  {
    id: '23',
    name: 'Refined Sugar ICUMSA 45',
    category: 'Sugar & Sweeteners',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1612196603417-22f3e8281313?q=80&w=800&auto=format&fit=crop', // White sugar
    description: 'White Refined Cane Sugar. ICUMSA 45. Highly refined. Vessel/Container loads.',
    origin: 'Brazil',
    nutrition: { servingSize: '100g', calories: 400, protein: '0g', carbs: '100g', fat: '0g' },
    specs: { 'Polarization': '99.80%', 'Ash Content': '0.04% Max', 'Color': 'Sparkling White', 'Packaging': '50kg PP Bag', 'MOQ': '260 MT (10 Containers)' },
    reviews: []
  },

  // DAIRY
  {
    id: '24',
    name: 'Milk Powder (FCMP)',
    category: 'Dairy Ingredients',
    price: 'Market Rate',
    image: 'https://images.unsplash.com/photo-1626127117387-9d769e574c82?q=80&w=800&auto=format&fit=crop', // Powder
    description: 'Full Cream Milk Powder 26-28% Fat. Spray dried. For reconstitution/bakery.',
    origin: 'New Zealand',
    nutrition: { servingSize: '100g', calories: 500, protein: '24g', carbs: '38g', fat: '26g' },
    specs: { 'Fat': '26% Min', 'Protein': '24% Min', 'Solubility': '99%', 'Packaging': '25kg Multi-ply Paper Bag', 'MOQ': '16 MT' },
    reviews: []
  }
];

export const BUYING_REQUESTS: BuyingRequest[] = [
  { id: 'br1', commodity: 'White Rice 5% Broken', volume: '12,500 MT', destination: 'Cotonou, Benin', postedDate: '2 hours ago', status: 'Urgent' },
  { id: 'br2', commodity: 'Refined Sunflower Oil', volume: '500 MT', destination: 'Mersin, Turkey', postedDate: '5 hours ago', status: 'Open' },
  { id: 'br3', commodity: 'Yellow Maize (Animal Feed)', volume: '50,000 MT', destination: 'Qingdao, China', postedDate: '1 day ago', status: 'Closing Soon' },
  { id: 'br4', commodity: 'Frozen Chicken Paws', volume: '27 MT (1 FCL)', destination: 'Haiphong, Vietnam', postedDate: '1 day ago', status: 'Open' },
  { id: 'br5', commodity: 'Raw Cashew Nuts', volume: '1000 MT', destination: 'Cochin, India', postedDate: '3 hours ago', status: 'Urgent' },
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
  { name: 'IEC', description: 'Import Export Code (Govt of India)' },
  { name: 'ISO 22000', description: 'Food Safety Management System' },
  { name: 'HACCP', description: 'Hazard Analysis Critical Control Point' },
  { name: 'Halal', description: 'Certified Halal for GCC/Islamic Markets' }
];

export const MARKET_DATA = [
  { name: 'Rice', value: 400 },
  { name: 'Sugar', value: 350 },
  { name: 'Oils', value: 300 },
  { name: 'Spices', value: 200 },
  { name: 'Frozen', value: 150 },
];