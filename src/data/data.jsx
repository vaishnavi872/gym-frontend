import equipmentImg from '../assets/equipment.jpg';
import nutritionImg from '../assets/nutrition.jpg';
import trainingImg from '../assets/training.jpg';
import customImg from '../assets/custom.jpg';
import yogaImg from '../assets/yoga.jpg';
import cardioImg from '../assets/cardio.jpg'; 


export const pricingPlans = [
    {
      title: "Basic Plan",
      price: "₹999 / month",
      features: ["Access to gym", "1 group class per week", "Locker access"],
      isPopular: false,
    },
    {
      title: "Standard Plan",
      price: "₹1,499 / month",
      features: ["All Basic Plan features", "Unlimited group classes", "1 personal training session"],
      isPopular: true,
    },
    {
      title: "Premium Plan",
      price: "₹2,499 / month",
      features: ["All Standard Plan features", "Weekly personal training", "Diet & fitness guidance"],
      isPopular: false,
    },
  ];

  export const schedule = {
    Monday: [
      { className: "Fitness Class", time: "2:00PM - 3:30PM", trainer: "William G. Stewart" },
      { className: "Yoga Training Class", time: "10:00AM - 11:30AM", trainer: "Hector T. Dalgle" },
    ],
    Tuesday: [
      { className: "Muscle Training", time: "3:00PM - 4:30PM", trainer: "Paul D. Newman" },
      { className: "Advanced Training", time: "5:00PM - 6:30PM", trainer: "Bret D. Bowers" },
    ],
    Wednesday: [
      { className: "Body Building", time: "10:00AM - 11:30AM", trainer: "Boyd C. Harris" },
    ],
    Thursday: [
      { className: "Strength Training", time: "11:00AM - 12:30PM", trainer: "Emily J. Brown" },
      { className: "Weight Loose", time: "4:00PM - 5:00PM", trainer: "Laura K. Dean" },
    ],
    Friday: [
      { className: "HIIT Training", time: "2:00PM - 3:00PM", trainer: "Chris R. Bryant" },
      { className: "CrossFit Session", time: "3:30PM - 4:30PM", trainer: "Natalie R. Clark" },
    ],
  };

  export const servicesData = [
    {
      id: 1,
      title: "Personal Training",
      short: "Click here for more details.",
      description: "Our certified personal trainers design custom workout programs tailored to your fitness goals and physical condition. Includes progress tracking and motivational support.",
      rating: 4.5,
      icon: "fas fa-user-check",
      reviews: [
        { user: "Alice", comment: "Very helpful trainers!" },
        { user: "Bob", comment: "My fitness improved in 2 weeks." }
      ]
    },
    {
      id: 2,
      title: "Nutrition Plans",
      short: "Click here for more details.",
      description: "Get a fully customized nutrition plan based on your body type, metabolism, and workout routine. Ideal for weight loss, muscle gain, or healthy living.",
      rating: 4.2,
      icon: "fas fa-apple-alt",
       reviews: [
        { user: "Rita", comment: "Tasty and effective!" }
      ]
    },
    { 
      id: 3,
      title: "Weight Training",
      short: "Click here for more details.",
      description: "Enhance your strength, sculpt your physique, and build lean muscle with our guided weight training sessions designed for all fitness levels.",
      rating: 4.6,
      icon: "fas fa-dumbbell",
      reviews: [
        { user: "Riya", comment: "Great variety of workouts and excellent coaching!" },
        { user: "Arjun", comment: "I’ve seen a huge improvement in my strength." }
      ]
  
    },
    {
      id: 4,
      title: "Online Classes",
      short: "Click here for more details.",
      description: "Join live or on-demand fitness classes from the comfort of your home. Yoga, HIIT, strength training, and more — anytime, anywhere.",
      rating: 4.3,
      icon: "fas fa-laptop-house",
      reviews: [
        { user: "Maya", comment: "Super convenient and the instructors are amazing!" },
        { user: "Rahul", comment: "Loved the flexibility and class options." }
      ]
    },
  ];

  export const testimonials = [
    {
      name: "Aarav S.",
      feedback: "This gym changed my life! Amazing equipment and staff.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Fitness Enthusiast"
    },
    {
      name: "Priya D.",
      feedback: "The yoga classes are top-notch. I feel stronger and relaxed.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      role: "Yoga Practitioner"
    },
    {
      name: "Carlos M.",
      feedback: "Great atmosphere, friendly trainers, and modern facilities!",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      role: "Personal Trainer"
    },
  ];

  export const teamData = [
    { name: "William G. Stewart", role: "Fitness Coach", image: "/images/trainer1.jpg" },
    { name: "Hector T. Dalgle", role: "Yoga instructor", image: "/images/trainer2.jpg" },
    { name: "Paul D. Newman", role: "Muscle Training Coach", image: "/images/trainer3.jpg" },
    { name: "Bret D. Bowers", role: "Advanced Training Specialist", image: "/images/trainer4.jpg" },
    { name: "Boyd C. Harris", role: "Body Building Coach", image: "/images/trainer5.jpg" },
    { name: "Emily J. Brown", role: "Strength Training Coach", image: "/images/trainer6.jpg" },
    
  ];
  export const featureDetails = {
    equipment: {
      title: 'Modern Equipment',
      description: 'We provide the latest fitness equipment to ensure efficient and safe workouts for every fitness goal.',
      image: equipmentImg,
    },
    nutrition: {
      title: 'Healthy Nutrition Plan',
      description: 'Our certified nutritionists craft meal plans that complement your workouts and improve your results.',
      image: nutritionImg,
    },
    training: {
      title: 'Professional Training Plan',
      description: 'Guided training plans by professional coaches tailored to your needs.',
      image: trainingImg,
    },
    custom: {
      title: 'Unique to Your Needs',
      description: 'Customized plans designed based on your personal fitness goals and body type.',
      image: customImg,
    },
    yoga: {
      title: 'Yoga Training',
      description: 'Improve flexibility and mindfulness through professional yoga sessions.',
      image: yogaImg,
    },
    cardio: {
      title: 'Cardio Training',
      description: 'Boost heart health and burn fat with engaging cardio programs.',
      image: cardioImg,
    },
  };

  export const blogs = [
    { 
      title: 'Top 5 Yoga Poses for Beginners', 
      description: 'Discover the easiest yoga poses...', 
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      title: 'Why You Should Meditate Daily', 
      description: 'Meditation helps with focus and stress...', 
      image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' 
    },
  ];

  export const blogData = [
    {
      id: '1',
      title: 'Top 5 Yoga Poses for Beginners',
      content: 'Here are 5 easy yoga poses for beginners with step-by-step guidance...',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '2',
      title: 'Why You Should Meditate Daily',
      content: 'Daily meditation brings calm, improves focus, and helps reduce stress...',
      image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  export const classesData = [
    {
      title: "Bodybuilding",
      description: "Build strength and sculpt your physique with guided muscle training.",
      image: "/images/bodybuilding.jpg",
      link: "/bodybuilding"
    },
    {
      title: "Cardio",
      description: "Burn calories and boost stamina with heart-pumping cardio sessions.",
      image: "/images/cardio.jpg",
      link: "/cardio"
    },
    {
      title: "Yoga",
      description: "Improve flexibility and find peace with relaxing yoga classes.",
      image: "/images/yoga.jpg",
      link: "/yoga"
    },
  ];

  // src/data/socialLinks.js

export const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      url: "https://facebook.com/yourpage"
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://instagram.com/yourpage"
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "https://twitter.com/yourpage"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://linkedin.com/in/yourpage"
    }
  ];
  // admin/classes/classService.js




export const products = [
  {
    id: 1,
    name: "Whey Protein",
    image: "/assets/wheyProtein.jpg",     
    price:  39.99,
    description: "High-quality whey protein for muscle recovery.",
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    image: "/assets/creatine.jpg",  
    price: 24.99,
    description: "Boost strength and performance.",
  },
  {
    id: 3,
    name: "Yoga Mat",
    image: "/assets/yoga-mat.jpg",
    
    price: 14.99,
    description: "Comfortable and durable yoga mat for daily practice.",
  },
];


