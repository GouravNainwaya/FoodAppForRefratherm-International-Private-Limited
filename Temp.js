// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let list = [
  {
    id: 3,
    title: 'Spaghetti Carbonara',
    description:
      'Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
    specialties: ['Italian'],
    rating: 4.5,
    isVegetarian: false,
    price: '$15.99',
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pecorino Cheese',
      'Pancetta',
      'Black Pepper',
    ],
    reviews: [
      {
        id: 103,
        rating: 4.8,
        comment: 'Creamy and flavorful!',
      },
    ],
    similarItems: [
      {
        id: 1,
        title: 'Margherita Pizza',
        description:
          'Classic Italian pizza with tomato, mozzarella, and basil.',
        rating: 4.8,
        isVegetarian: true,
        price: '$12.99',
      },
      {
        id: 6,
        title: 'Chicken Alfredo',
        description: 'Creamy pasta with grilled chicken and Alfredo sauce.',
        rating: 4.7,
        isVegetarian: false,
        price: '$16.99',
      },
    ],
  },
  {
    id: 7,
    title: 'Sushi Platter',
    description: 'Assorted sushi rolls with fresh fish and vegetables.',
    specialties: ['Japanese'],
    rating: 4.9,
    isVegetarian: false,
    price: '$24.99',
    ingredients: [
      'Sushi Rice',
      'Fresh Fish',
      'Nori Seaweed',
      'Cucumber',
      'Avocado',
    ],
    reviews: [
      {
        id: 107,
        rating: 5,
        comment: 'Incredibly fresh and tasty!',
      },
    ],
    similarItems: [
      {
        id: 8,
        title: 'Tempura Udon',
        description:
          'Japanese noodle soup with tempura-battered shrimp and vegetables.',
        rating: 4.4,
        isVegetarian: false,
        price: '$14.99',
      },
      {
        id: 1,
        title: 'Margherita Pizza',
        description:
          'Classic Italian pizza with tomato, mozzarella, and basil.',
        rating: 4.8,
        isVegetarian: true,
        price: '$12.99',
      },
    ],
  },
  // Add more items...
  {
    id: 28,
    title: 'Tofu Stir-Fry',
    description:
      'Healthy stir-fry with tofu, assorted vegetables, and soy sauce.',
    specialties: ['Asian', 'Vegetarian'],
    rating: 4.3,
    isVegetarian: true,
    price: '$10.99',
    ingredients: ['Tofu', 'Broccoli', 'Bell Peppers', 'Carrots', 'Soy Sauce'],
    reviews: [
      {
        id: 128,
        rating: 4.5,
        comment: 'Perfect balance of flavors!',
      },
    ],
    similarItems: [
      {
        id: 29,
        title: 'Pad Thai',
        description:
          'Thai stir-fried rice noodles with shrimp, eggs, and peanuts.',
        rating: 4.7,
        isVegetarian: false,
        price: '$13.99',
      },
      {
        id: 30,
        title: 'Spring Rolls',
        description:
          'Fresh Vietnamese spring rolls with shrimp, herbs, and rice noodles.',
        rating: 4.6,
        isVegetarian: false,
        price: '$8.99',
      },
    ],
  },
  {
    id: 29,
    title: 'Pad Thai',
    description: 'Thai stir-fried rice noodles with shrimp, eggs, and peanuts.',
    specialties: ['Thai'],
    rating: 4.7,
    isVegetarian: false,
    price: '$13.99',
    ingredients: ['Rice Noodles', 'Shrimp', 'Eggs', 'Peanuts'],
    reviews: [
      {
        id: 129,
        rating: 4.8,
        comment: 'Authentic and delicious!',
      },
    ],
    similarItems: [
      {
        id: 28,
        title: 'Tofu Stir-Fry',
        description:
          'Healthy stir-fry with tofu, assorted vegetables, and soy sauce.',
        rating: 4.3,
        isVegetarian: true,
        price: '$10.99',
      },
      {
        id: 30,
        title: 'Spring Rolls',
        description:
          'Fresh Vietnamese spring rolls with shrimp, herbs, and rice noodles.',
        rating: 4.6,
        isVegetarian: false,
        price: '$8.99',
      },
    ],
  },
  {
    id: 30,
    title: 'Spring Rolls',
    description:
      'Fresh Vietnamese spring rolls with shrimp, herbs, and rice noodles.',
    specialties: ['Vietnamese'],
    rating: 4.6,
    isVegetarian: false,
    price: '$8.99',
    ingredients: ['Rice Paper', 'Shrimp', 'Herbs', 'Rice Noodles'],
    reviews: [
      {
        id: 130,
        rating: 4.4,
        comment: 'Light and refreshing!',
      },
    ],
    similarItems: [
      {
        id: 28,
        title: 'Tofu Stir-Fry',
        description:
          'Healthy stir-fry with tofu, assorted vegetables, and soy sauce.',
        rating: 4.3,
        isVegetarian: true,
        price: '$10.99',
      },
      {
        id: 29,
        title: 'Pad Thai',
        description:
          'Thai stir-fried rice noodles with shrimp, eggs, and peanuts.',
        rating: 4.7,
        isVegetarian: false,
        price: '$13.99',
      },
    ],
  },
  {
    id: 1,
    title: 'Margherita Pizza',
    description: 'Classic Italian pizza with tomato, mozzarella, and basil.',
    specialties: ['Italian'],
    rating: 4.8,
    isVegetarian: true,
    price: '$12.99',
    ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Fresh Basil'],
    reviews: [
      {
        id: 101,
        rating: 4.5,
        comment: 'Delicious and cheesy!',
      },
    ],
    similarItems: [
      {
        id: 2,
        title: 'Pepperoni Pizza',
        description:
          'Pizza topped with pepperoni slices and mozzarella cheese.',
        rating: 4.6,
        isVegetarian: false,
        price: '$14.99',
      },
      {
        id: 5,
        title: 'Vegetarian Calzone',
        description: 'Folded pizza with assorted vegetables and cheese.',
        rating: 4.2,
        isVegetarian: true,
        price: '$11.99',
      },
    ],
  },
  {
    id: 28,
    title: 'Tofu Stir-Fry',
    description:
      'Healthy stir-fry with tofu, assorted vegetables, and soy sauce.',
    specialties: ['Asian', 'Vegetarian'],
    rating: 4.3,
    isVegetarian: true,
    price: '$10.99',
    ingredients: ['Tofu', 'Broccoli', 'Bell Peppers', 'Carrots', 'Soy Sauce'],
    reviews: [
      {
        id: 128,
        rating: 4.5,
        comment: 'Perfect balance of flavors!',
      },
    ],
    similarItems: [
      {
        id: 29,
        title: 'Pad Thai',
        description:
          'Thai stir-fried rice noodles with shrimp, eggs, and peanuts.',
        rating: 4.7,
        isVegetarian: false,
        price: '$13.99',
      },
      {
        id: 30,
        title: 'Spring Rolls',
        description:
          'Fresh Vietnamese spring rolls with shrimp, herbs, and rice noodles.',
        rating: 4.6,
        isVegetarian: false,
        price: '$8.99',
      },
    ],
  },
  // Add more items...
  {
    id: 31,
    title: 'BBQ Ribs',
    description:
      'Smoky and tender BBQ ribs served with coleslaw and baked beans.',
    specialties: ['American'],
    rating: 4.9,
    isVegetarian: false,
    price: '$18.99',
    ingredients: ['Pork Ribs', 'BBQ Sauce', 'Coleslaw', 'Baked Beans'],
    reviews: [
      {
        id: 131,
        rating: 5,
        comment: 'Finger-licking good!',
      },
    ],
    similarItems: [
      {
        id: 32,
        title: 'Fried Chicken',
        description: 'Crispy fried chicken with a blend of spices.',
        rating: 4.7,
        isVegetarian: false,
        price: '$16.99',
      },
      {
        id: 35,
        title: 'Pulled Pork Sandwich',
        description: 'Slow-cooked pulled pork on a soft bun with BBQ sauce.',
        rating: 4.6,
        isVegetarian: false,
        price: '$9.99',
      },
    ],
  },
  {
    id: 32,
    title: 'Fried Chicken',
    description: 'Crispy fried chicken with a blend of spices.',
    specialties: ['American'],
    rating: 4.7,
    isVegetarian: false,
    price: '$16.99',
    ingredients: ['Chicken', 'Flour Coating', 'Spices'],
    reviews: [
      {
        id: 132,
        rating: 4.8,
        comment: 'Absolutely addictive!',
      },
    ],
    similarItems: [
      {
        id: 31,
        title: 'BBQ Ribs',
        description:
          'Smoky and tender BBQ ribs served with coleslaw and baked beans.',
        rating: 4.9,
        isVegetarian: false,
        price: '$18.99',
      },
      {
        id: 35,
        title: 'Pulled Pork Sandwich',
        description: 'Slow-cooked pulled pork on a soft bun with BBQ sauce.',
        rating: 4.6,
        isVegetarian: false,
        price: '$9.99',
      },
    ],
  },
  {
    id: 33,
    title: 'Miso Soup',
    description:
      'Traditional Japanese soup with tofu, seaweed, and green onions.',
    specialties: ['Japanese', 'Vegetarian'],
    rating: 4.2,
    isVegetarian: true,
    price: '$4.99',
    ingredients: ['Tofu', 'Seaweed', 'Green Onions', 'Miso Paste'],
    reviews: [
      {
        id: 133,
        rating: 4.3,
        comment: 'Comforting and flavorful!',
      },
    ],
    similarItems: [
      {
        id: 34,
        title: 'Sushi Boat',
        description:
          'Assorted sushi rolls and sashimi served on a wooden boat.',
        rating: 4.8,
        isVegetarian: false,
        price: '$32.99',
      },
      {
        id: 36,
        title: 'Teriyaki Tofu Bowl',
        description: 'Grilled tofu with teriyaki sauce, served over rice.',
        rating: 4.4,
        isVegetarian: true,
        price: '$9.99',
      },
    ],
  },
  {
    id: 34,
    title: 'Sushi Boat',
    description: 'Assorted sushi rolls and sashimi served on a wooden boat.',
    specialties: ['Japanese'],
    rating: 4.8,
    isVegetarian: false,
    price: '$32.99',
    ingredients: ['Assorted Sushi Rolls', 'Sashimi', 'Wasabi', 'Soy Sauce'],
    reviews: [
      {
        id: 134,
        rating: 4.9,
        comment: 'A feast for the eyes and palate!',
      },
    ],
    similarItems: [
      {
        id: 33,
        title: 'Miso Soup',
        description:
          'Traditional Japanese soup with tofu, seaweed, and green onions.',
        rating: 4.2,
        isVegetarian: true,
        price: '$4.99',
      },
      {
        id: 36,
        title: 'Teriyaki Tofu Bowl',
        description: 'Grilled tofu with teriyaki sauce, served over rice.',
        rating: 4.4,
        isVegetarian: true,
        price: '$9.99',
      },
    ],
  },
  {
    id: 35,
    title: 'Pulled Pork Sandwich',
    description: 'Slow-cooked pulled pork on a soft bun with BBQ sauce.',
    specialties: ['American'],
    rating: 4.6,
    isVegetarian: false,
    price: '$9.99',
    ingredients: ['Pulled Pork', 'Soft Bun', 'BBQ Sauce'],
    reviews: [
      {
        id: 135,
        rating: 4.7,
        comment: 'A delightful BBQ experience!',
      },
    ],
    similarItems: [
      {
        id: 31,
        title: 'BBQ Ribs',
        description:
          'Smoky and tender BBQ ribs served with coleslaw and baked beans.',
        rating: 4.9,
        isVegetarian: false,
        price: '$18.99',
      },
      {
        id: 32,
        title: 'Fried Chicken',
        description: 'Crispy fried chicken with a blend of spices.',
        rating: 4.7,
        isVegetarian: false,
        price: '$16.99',
      },
    ],
  },
  {
    id: 36,
    title: 'Teriyaki Tofu Bowl',
    description: 'Grilled tofu with teriyaki sauce, served over rice.',
    specialties: ['Japanese', 'Vegetarian'],
    rating: 4.4,
    isVegetarian: true,
    price: '$9.99',
    ingredients: ['Tofu', 'Teriyaki Sauce', 'Rice'],
    reviews: [
      {
        id: 136,
        rating: 4.5,
        comment: 'Healthy and satisfying!',
      },
    ],
    similarItems: [
      {
        id: 33,
        title: 'Miso Soup',
        description:
          'Traditional Japanese soup with tofu, seaweed, and green onions.',
        rating: 4.2,
        isVegetarian: true,
        price: '$4.99',
      },
      {
        id: 34,
        title: 'Sushi Boat',
        description:
          'Assorted sushi rolls and sashimi served on a wooden boat.',
        rating: 4.8,
        isVegetarian: false,
        price: '$32.99',
      },
    ],
  },
];
let filteredIgredients = []
let filteredRatings = []
let filtredVegetarian = []


const applyFiletrs = (selectedIngredients, ratings, vergetarian) => {
  let showIncredients = false;
  let showRatings = false;
  let showVergetarian = false;

  console.log('called', selectedIngredients, ratings, vergetarian);

  if (selectedIngredients?.length) {
    filteredIgredients = list.filter(item => {
      return selectedIngredients.some(ingredient => item.specialties.includes(ingredient)); // if you  want all incredents so you can do every
    });
    showIncredients = true
  }

  if (ratings) {
    filteredRatings = list.filter(item => {
      return item?.rating == ratings
    });
    showRatings = true
  }
  
  if (vergetarian) {
    filtredVegetarian = filteredIgredients = list.filter(item => {
      return item?.isVegetarian == vergetarian
    });
    showVergetarian = true
  }

  if(showIncredients || showRatings || showVergetarian){
    list = [...filteredIgredients, ...filteredRatings, ...filtredVegetarian]
    return
  }
};

applyFiletrs([], 4.2, "");
console.log('Welcome to Programiz!', list);
//   console.log("Welcome to Programiz!", list?.filter((item) => item?.title?.includes("Pork")));
