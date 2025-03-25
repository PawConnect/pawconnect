export const users = [
  {
    id: "user1",
    name: "Alex Johnson",
    username: "alexj",
    avatar: "/placeholder.svg",
    coverImage: "/placeholder.svg?height=300&width=800",
    bio: "Dog lover and outdoor enthusiast. My pets are my family!",
    location: "San Francisco, CA",
    posts: 42,
    followers: 1250,
    following: 365,
    pets: [
      {
        id: "pet1",
        name: "Max",
        species: "Dog",
        breed: "Golden Retriever",
        age: 3,
        gender: "Male",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
      },
      {
        id: "pet2",
        name: "Luna",
        species: "Cat",
        breed: "Siamese",
        age: 2,
        gender: "Female",
        image: "/placeholder.svg?height=200&width=300",
        available: false,
      },
    ],
  },
  {
    id: "user2",
    name: "Samantha Lee",
    username: "samlee",
    avatar: "/placeholder.svg",
    coverImage: "/placeholder.svg?height=300&width=800",
    bio: "Cat mom and veterinary student. Passionate about animal welfare.",
    location: "Boston, MA",
    posts: 87,
    followers: 2340,
    following: 512,
    pets: [
      {
        id: "pet3",
        name: "Oliver",
        species: "Cat",
        breed: "Maine Coon",
        age: 4,
        gender: "Male",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
      },
      {
        id: "pet4",
        name: "Bella",
        species: "Cat",
        breed: "Ragdoll",
        age: 1,
        gender: "Female",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
      },
    ],
  },
]

// Modify the posts array to make For You and Following sections more distinct
export const posts = [
    {
        id: "post4",
        user: {
            id: "user4",
            name: "Emma Davis",
            avatar: "/placeholder.svg",
        },
        content:
            "Just adopted this beautiful rescue puppy! Meet Bella, our newest family member. She's already made herself at home. ❤️",
        image: "/placeholder.svg?height=400&width=600",
        likes: 103,
        comments: 31,
        timeAgo: "3 hours ago",
        isFollowing: false,
    },
    {
        id: "post1",
        user: {
            id: "user3",
            name: "Mike Wilson",
            avatar: "/placeholder.svg",
        },
        content:
            "Anyone have recommendations for a good vet in the Chicago area? My rabbit needs a checkup.",
        image: null,
        likes: 15,
        comments: 23,
        timeAgo: "1 day ago",
        isFollowing: false,
    },
    {
        id: "post2",
        user: {
            id: "user1",
            name: "Alex Johnson",
            avatar: "/placeholder.svg",
        },
        content:
            "Max had the best time at the dog park today! Made so many new friends. #DogsOfPawConnect",
        image: "/placeholder.svg?height=400&width=600",
        likes: 42,
        comments: 7,
        timeAgo: "4 hours ago",
        isFollowing: true,
    },
    {
        id: "post3",
        user: {
            id: "user2",
            name: "Samantha Lee",
            avatar: "/placeholder.svg",
        },
        content:
            "Oliver is enjoying his new cat tree! Best purchase ever. #CatsOfPawConnect",
        image: "/placeholder.svg?height=400&width=600",
        likes: 78,
        comments: 12,
        timeAgo: "5 hours ago",
        isFollowing: true,
    },
    {
        id: "post5",
        user: {
            id: "user1",
            name: "Alex Johnson",
            avatar: "/placeholder.svg",
        },
        content:
            "Luna is not impressed with her new toy. Back to the drawing board!",
        image: "/placeholder.svg?height=400&width=600",
        likes: 36,
        comments: 4,
        timeAgo: "2 days ago",
        isFollowing: true,
    },
    {
        id: "post6",
        user: {
            id: "user5",
            name: "David Chen",
            avatar: "/placeholder.svg",
        },
        content:
            "My cat figured out how to open the treat drawer. I'm both impressed and concerned about my future food security.",
        image: "/placeholder.svg?height=400&width=600",
        likes: 67,
        comments: 19,
        timeAgo: "6 hours ago",
        isFollowing: false,
    },
];

// Mock data for mating pets
export const matingPets = [
  {
    id: "mate1",
    name: "Rocky",
    species: "Dog",
    breed: "German Shepherd",
    age: 3,
    gender: "Male",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Energetic and friendly German Shepherd looking for a mate. AKC registered with excellent health records.",
    traits: ["Friendly", "Energetic", "Trained", "Healthy"],
    distance: 5,
  },
  {
    id: "mate2",
    name: "Daisy",
    species: "Dog",
    breed: "Labrador Retriever",
    age: 2,
    gender: "Female",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Sweet and gentle Labrador with a great temperament. Looking for a compatible mate with similar traits.",
    traits: ["Gentle", "Playful", "Healthy", "Good with kids"],
    distance: 12,
  },
  {
    id: "mate3",
    name: "Whiskers",
    species: "Cat",
    breed: "Persian",
    age: 3,
    gender: "Male",
    image: "/placeholder.svg?height=200&width=300",
    description: "Award-winning Persian cat with beautiful coat. Looking for a female Persian or similar breed.",
    traits: ["Calm", "Pedigree", "Show quality", "Healthy"],
    distance: 8,
  },
  {
    id: "mate4",
    name: "Bella",
    species: "Dog",
    breed: "Poodle",
    age: 4,
    gender: "Female",
    image: "/placeholder.svg?height=200&width=300",
    description: "Intelligent and elegant standard Poodle. Health tested and ready for mating.",
    traits: ["Intelligent", "Elegant", "Health tested", "Trained"],
    distance: 15,
  },
  {
    id: "mate5",
    name: "Leo",
    species: "Cat",
    breed: "Maine Coon",
    age: 3,
    gender: "Male",
    image: "/placeholder.svg?height=200&width=300",
    description: "Large and friendly Maine Coon with excellent lineage. Looking for a compatible female.",
    traits: ["Friendly", "Large", "Pedigree", "Healthy"],
    distance: 20,
  },
  {
    id: "mate6",
    name: "Coco",
    species: "Dog",
    breed: "French Bulldog",
    age: 2,
    gender: "Female",
    image: "/placeholder.svg?height=200&width=300",
    description: "Healthy French Bulldog with excellent temperament. Looking for a compatible mate.",
    traits: ["Playful", "Healthy", "Good temperament", "Pedigree"],
    distance: 7,
  },
]

// Mock data for walk buddies
export const walkBuddies = [
  {
    id: "buddy1",
    name: "Chris Parker",
    avatar: "/placeholder.svg",
    location: "Downtown, San Francisco",
    distance: 2,
    bio: "Morning walker with my Golden Retriever. Looking for regular walking buddies in the downtown area.",
    petType: "dog",
    pets: [
      {
        name: "Buddy",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    preferences: ["Morning walks", "Weekdays", "Dog-friendly parks"],
  },
  {
    id: "buddy2",
    name: "Emma Wilson",
    avatar: "/placeholder.svg",
    location: "Marina District, San Francisco",
    distance: 5,
    bio: "Evening dog walker with two friendly Labradors. Love meeting new dogs and their humans!",
    petType: "dog",
    pets: [
      {
        name: "Charlie",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Lucy",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    preferences: ["Evening walks", "Weekends", "Beach walks"],
  },
  {
    id: "buddy3",
    name: "David Kim",
    avatar: "/placeholder.svg",
    location: "Mission District, San Francisco",
    distance: 3,
    bio: "Cat owner who takes my Bengal for leashed walks in quiet areas. Looking for other adventure cat owners.",
    petType: "cat",
    pets: [
      {
        name: "Simba",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    preferences: ["Quiet areas", "Afternoons", "Short walks"],
  },
  {
    id: "buddy4",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg",
    location: "Pacific Heights, San Francisco",
    distance: 7,
    bio: "Dog trainer with a well-behaved Border Collie. Happy to help with training tips during walks!",
    petType: "dog",
    pets: [
      {
        name: "Rex",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    preferences: ["Any time", "Training focused", "Active walks"],
  },
]

// Mock data for walk events
export const walkEvents = [
  {
    id: "event1",
    title: "Golden Retriever Meetup",
    date: "Mar 30, 2025",
    time: "10:00 AM",
    location: "Golden Gate Park, SF",
    image: "/placeholder.svg?height=200&width=400",
    description: "Monthly meetup for Golden Retrievers and their owners. Come join us for fun and games!",
    attendees: [
      { name: "Alex", avatar: "/placeholder.svg" },
      { name: "Emma", avatar: "/placeholder.svg" },
      { name: "John", avatar: "/placeholder.svg" },
      { name: "Sarah", avatar: "/placeholder.svg" },
      { name: "Mike", avatar: "/placeholder.svg" },
      { name: "Lisa", avatar: "/placeholder.svg" },
      { name: "Tom", avatar: "/placeholder.svg" },
    ],
  },
  {
    id: "event2",
    title: "Small Dogs Playdate",
    date: "Apr 5, 2025",
    time: "3:00 PM",
    location: "Dolores Park, SF",
    image: "/placeholder.svg?height=200&width=400",
    description: "A special playdate for small dogs under 20 pounds. Safe environment with separate area.",
    attendees: [
      { name: "Jessica", avatar: "/placeholder.svg" },
      { name: "David", avatar: "/placeholder.svg" },
      { name: "Amy", avatar: "/placeholder.svg" },
      { name: "Robert", avatar: "/placeholder.svg" },
    ],
  },
  {
    id: "event3",
    title: "Beach Walk & Cleanup",
    date: "Apr 12, 2025",
    time: "9:00 AM",
    location: "Ocean Beach, SF",
    image: "/placeholder.svg?height=200&width=400",
    description: "Combine a fun beach walk with your dog and help clean up the environment. Bags provided!",
    attendees: [
      { name: "Chris", avatar: "/placeholder.svg" },
      { name: "Olivia", avatar: "/placeholder.svg" },
      { name: "James", avatar: "/placeholder.svg" },
      { name: "Sophia", avatar: "/placeholder.svg" },
      { name: "Daniel", avatar: "/placeholder.svg" },
      { name: "Emily", avatar: "/placeholder.svg" },
    ],
  },
  {
    id: "event4",
    title: "Adventure Cats Exploration",
    date: "Apr 18, 2025",
    time: "4:00 PM",
    location: "Sutro Heights Park, SF",
    image: "/placeholder.svg?height=200&width=400",
    description: "For trained cats on leashes who enjoy outdoor adventures. Quiet environment, slow pace.",
    attendees: [
      { name: "David", avatar: "/placeholder.svg" },
      { name: "Mia", avatar: "/placeholder.svg" },
      { name: "Noah", avatar: "/placeholder.svg" },
    ],
  },
]

// Mock data for conversations
export const conversations = [
  {
    id: "conv1",
    user: {
      id: "user2",
      name: "Samantha Lee",
      avatar: "/placeholder.svg",
      isOnline: true,
    },
    lastMessage: "Would you be interested in arranging a playdate for our cats?",
    lastMessageTime: "10 min ago",
    unreadCount: 2,
    startDate: "March 15, 2025",
    messages: [
      {
        id: "msg1",
        content: "Hi Alex! I saw your profile and noticed you have a Siamese cat too.",
        sender: "them",
        timestamp: "Mar 15, 10:30 AM",
      },
      {
        id: "msg2",
        content: "Hey Samantha! Yes, Luna is a Siamese. Your Oliver is gorgeous!",
        sender: "me",
        timestamp: "Mar 15, 10:35 AM",
      },
      {
        id: "msg3",
        content: "Thanks! Oliver is very social with other cats. How old is Luna?",
        sender: "them",
        timestamp: "Mar 15, 10:38 AM",
      },
      {
        id: "msg4",
        content: "Luna is 2 years old. She's a bit shy at first but warms up quickly.",
        sender: "me",
        timestamp: "Mar 15, 10:40 AM",
      },
      {
        id: "msg5",
        content: "Would you be interested in arranging a playdate for our cats?",
        sender: "them",
        timestamp: "10 min ago",
      },
    ],
  },
  {
    id: "conv2",
    user: {
      id: "user3",
      name: "Mike Wilson",
      avatar: "/placeholder.svg",
      isOnline: false,
    },
    lastMessage: "I found a great vet in your area. I'll send you the details.",
    lastMessageTime: "2 hours ago",
    unreadCount: 0,
    startDate: "March 10, 2025",
    messages: [
      {
        id: "msg1",
        content: "Hey, do you know any good vets in San Francisco?",
        sender: "me",
        timestamp: "Mar 10, 3:15 PM",
      },
      {
        id: "msg2",
        content: "I'm actually looking for one too for my rabbit!",
        sender: "them",
        timestamp: "Mar 10, 3:20 PM",
      },
      {
        id: "msg3",
        content: "Let me know if you find a good one. Max needs his annual checkup.",
        sender: "me",
        timestamp: "Mar 10, 3:22 PM",
      },
      {
        id: "msg4",
        content: "I found a great vet in your area. I'll send you the details.",
        sender: "them",
        timestamp: "2 hours ago",
      },
    ],
  },
  {
    id: "conv3",
    user: {
      id: "user4",
      name: "Emma Davis",
      avatar: "/placeholder.svg",
      isOnline: true,
    },
    lastMessage: "Max and Rex got along so well at the park yesterday!",
    lastMessageTime: "Yesterday",
    unreadCount: 1,
    startDate: "March 5, 2025",
    messages: [
      {
        id: "msg1",
        content: "Hi Alex! I'm Emma, I saw you at the dog park yesterday with your Golden Retriever.",
        sender: "them",
        timestamp: "Mar 5, 5:30 PM",
      },
      {
        id: "msg2",
        content: "Hi Emma! Yes, that was me and Max. Did you have the Border Collie?",
        sender: "me",
        timestamp: "Mar 5, 5:35 PM",
      },
      {
        id: "msg3",
        content: "Yes, that's Rex! He's 2 years old and full of energy.",
        sender: "them",
        timestamp: "Mar 5, 5:38 PM",
      },
      {
        id: "msg4",
        content: "Max is 3 and also very energetic. They seemed to play well together!",
        sender: "me",
        timestamp: "Mar 5, 5:40 PM",
      },
      {
        id: "msg5",
        content: "Max and Rex got along so well at the park yesterday!",
        sender: "them",
        timestamp: "Yesterday",
      },
    ],
  },
  {
    id: "conv4",
    user: {
      id: "user5",
      name: "David Chen",
      avatar: "/placeholder.svg",
      isOnline: false,
    },
    lastMessage: "Thanks for the mating info. I'll think about it and get back to you.",
    lastMessageTime: "2 days ago",
    unreadCount: 0,
    startDate: "February 28, 2025",
    messages: [
      {
        id: "msg1",
        content: "Hello, I'm interested in your Golden Retriever for mating with my female.",
        sender: "them",
        timestamp: "Feb 28, 10:15 AM",
      },
      {
        id: "msg2",
        content: "Hi David! Max is AKC registered and has all his health clearances. Can you tell me about your dog?",
        sender: "me",
        timestamp: "Feb 28, 10:30 AM",
      },
      {
        id: "msg3",
        content: "She's a 3-year-old Golden named Bella, also AKC registered with OFA hip and elbow clearances.",
        sender: "them",
        timestamp: "Feb 28, 10:45 AM",
      },
      {
        id: "msg4",
        content: "Sounds promising! I'd be happy to discuss further. Max has a great temperament and is very healthy.",
        sender: "me",
        timestamp: "Feb 28, 11:00 AM",
      },
      {
        id: "msg5",
        content: "Thanks for the mating info. I'll think about it and get back to you.",
        sender: "them",
        timestamp: "2 days ago",
      },
    ],
  },
]

// Mock data for notifications
export const notifications = [
  {
    id: "notif1",
    name: "Samantha Lee",
    avatar: "/placeholder.svg",
    content: "liked your post about Max at the dog park.",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: "notif2",
    name: "Mike Wilson",
    avatar: "/placeholder.svg",
    content: 'commented on your photo: "Luna looks so cute!"',
    time: "15 minutes ago",
    read: false,
  },
  {
    id: "notif3",
    name: "Emma Davis",
    avatar: "/placeholder.svg",
    content: "sent you a message.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "notif4",
    name: "PawConnect",
    avatar: "/placeholder.svg",
    content: 'A new walk event was created near you: "Golden Retriever Meetup"',
    time: "2 hours ago",
    read: true,
  },
  {
    id: "notif5",
    name: "David Chen",
    avatar: "/placeholder.svg",
    content: "is interested in mating with your pet Max.",
    time: "Yesterday",
    read: true,
  },
  {
    id: "notif6",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg",
    content: "wants to connect as a walk buddy.",
    time: "2 days ago",
    read: true,
  },
  {
    id: "notif7",
    name: "PawConnect",
    avatar: "/placeholder.svg",
    content: "Your pet profile for Max has been viewed 15 times this week!",
    time: "3 days ago",
    read: true,
  },
  {
    id: "notif8",
    name: "Chris Parker",
    avatar: "/placeholder.svg",
    content: "started following you.",
    time: "4 days ago",
    read: true,
  },
  {
    id: "notif9",
    name: "PawConnect",
    avatar: "/placeholder.svg",
    content: "Welcome to PawConnect! Complete your profile to get started.",
    time: "1 week ago",
    read: true,
  },
]

// Mock data for adoption pets
export const adoptionPets = [
  {
    id: "adopt1",
    name: "Charlie",
    species: "Dog",
    breed: "Mixed Breed",
    age: 2,
    gender: "Male",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Charlie is a sweet, energetic mixed breed who loves to play fetch and go for long walks. He's great with kids and other dogs.",
    location: "San Francisco, CA",
    shelter: "Happy Tails Rescue",
    traits: ["Friendly", "Energetic", "Good with kids", "Vaccinated"],
    contactName: "Maria Rodriguez",
    contactEmail: "maria@happytails.org",
    contactPhone: "(415) 555-1234",
    postedDate: "2 weeks ago",
    urgent: false,
  },
  {
    id: "adopt2",
    name: "Mittens",
    species: "Cat",
    breed: "Domestic Shorthair",
    age: 3,
    gender: "Female",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Mittens is a calm and affectionate cat who loves to curl up in laps. She's litter trained and good with other cats.",
    location: "Oakland, CA",
    shelter: "Feline Friends Rescue",
    traits: ["Calm", "Affectionate", "Litter trained", "Spayed"],
    contactName: "James Wilson",
    contactEmail: "james@felinefriends.org",
    contactPhone: "(510) 555-5678",
    postedDate: "1 week ago",
    urgent: false,
  },
  {
    id: "adopt3",
    name: "Rex",
    species: "Dog",
    breed: "German Shepherd",
    age: 5,
    gender: "Male",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Rex is a trained police dog looking for retirement in a loving home. He's protective, loyal, and well-behaved.",
    location: "San Jose, CA",
    shelter: "Second Chance K9 Rescue",
    traits: ["Trained", "Protective", "Loyal", "Neutered"],
    contactName: "Officer David Chen",
    contactEmail: "david@secondchancek9.org",
    contactPhone: "(408) 555-9012",
    postedDate: "3 days ago",
    urgent: false,
  },
  {
    id: "adopt4",
    name: "Whiskers",
    species: "Cat",
    breed: "Maine Coon",
    age: 1,
    gender: "Male",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Whiskers is a playful Maine Coon kitten who loves toys and climbing. He's very social and gets along with other pets.",
    location: "Berkeley, CA",
    shelter: "Berkeley Animal Shelter",
    traits: ["Playful", "Social", "Vaccinated", "Neutered"],
    contactName: "Lisa Thompson",
    contactEmail: "lisa@berkeleyshelter.org",
    contactPhone: "(510) 555-3456",
    postedDate: "5 days ago",
    urgent: false,
  },
  {
    id: "adopt5",
    name: "Bella",
    species: "Dog",
    breed: "Labrador Retriever",
    age: 4,
    gender: "Female",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Bella is a gentle Labrador who needs a new home due to her owner's relocation. She's great with children and loves water.",
    location: "Marin, CA",
    shelter: "Private Adoption",
    traits: ["Gentle", "Trained", "Good with kids", "Loves water"],
    contactName: "Michael Brown",
    contactEmail: "michael@email.com",
    contactPhone: "(415) 555-7890",
    postedDate: "1 day ago",
    urgent: true,
  },
  {
    id: "adopt6",
    name: "Oliver",
    species: "Rabbit",
    breed: "Holland Lop",
    age: 1,
    gender: "Male",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Oliver is a friendly Holland Lop rabbit who enjoys being handled. He's litter trained and would make a great indoor pet.",
    location: "San Francisco, CA",
    shelter: "Small Friends Rescue",
    traits: ["Friendly", "Litter trained", "Indoor", "Neutered"],
    contactName: "Sarah Johnson",
    contactEmail: "sarah@smallfriends.org",
    contactPhone: "(415) 555-2345",
    postedDate: "1 week ago",
    urgent: false,
  },
  {
    id: "adopt7",
    name: "Max",
    species: "Dog",
    breed: "Beagle",
    age: 6,
    gender: "Male",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Max is a sweet Beagle who needs a home where someone is around most of the day. He loves companionship and short walks.",
    location: "San Francisco, CA",
    shelter: "Bay Area Pet Rescue",
    traits: ["Sweet", "Loyal", "House-trained", "Senior-friendly"],
    contactName: "Jennifer Lee",
    contactEmail: "jennifer@bayareapets.org",
    contactPhone: "(415) 555-6789",
    postedDate: "2 days ago",
    urgent: true,
  },
  {
    id: "adopt8",
    name: "Luna",
    species: "Cat",
    breed: "Siamese",
    age: 2,
    gender: "Female",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Luna is a vocal Siamese cat who loves attention. She's playful, affectionate, and would do best as an only pet.",
    location: "Palo Alto, CA",
    shelter: "Peninsula Cat Rescue",
    traits: ["Vocal", "Affectionate", "Playful", "Spayed"],
    contactName: "Robert Kim",
    contactEmail: "robert@peninsulacats.org",
    contactPhone: "(650) 555-0123",
    postedDate: "4 days ago",
    urgent: false,
  },
]

// Mock data for veterinarians
export const veterinarians = [
  {
    id: "vet1",
    name: "Dr. Emily Chen",
    clinic: "Pacific Heights Veterinary Hospital",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "Small Animal Medicine",
    address: "2340 Pacific Ave, San Francisco, CA 94115",
    phone: "(415) 555-1234",
    email: "info@pacificheightsvet.com",
    website: "www.pacificheightsvet.com",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm, Sun: Closed",
    rating: 4.8,
    reviewCount: 156,
    distance: 1.2,
    emergency: true,
    services: ["Wellness Exams", "Vaccinations", "Surgery", "Dental Care", "Emergency Services", "Boarding"],
    description:
      "Pacific Heights Veterinary Hospital provides comprehensive care for dogs, cats, and small mammals. Our state-of-the-art facility offers advanced diagnostics and treatment options.",
  },
  {
    id: "vet2",
    name: "Dr. James Wilson",
    clinic: "Mission Pet Hospital",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "Feline Medicine",
    address: "720 Valencia St, San Francisco, CA 94110",
    phone: "(415) 555-5678",
    email: "appointments@missionpet.com",
    website: "www.missionpet.com",
    hours: "Mon-Fri: 9am-7pm, Sat-Sun: 10am-4pm",
    rating: 4.6,
    reviewCount: 203,
    distance: 2.5,
    emergency: false,
    services: [
      "Wellness Exams",
      "Vaccinations",
      "Surgery",
      "Dental Care",
      "Nutrition Counseling",
      "Behavior Consultation",
    ],
    description:
      "Mission Pet Hospital specializes in feline medicine, offering cat-friendly facilities and handling techniques to reduce stress during veterinary visits.",
  },
  {
    id: "vet3",
    name: "Dr. Sarah Johnson",
    clinic: "Golden Gate Veterinary Specialists",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "Veterinary Surgery",
    address: "1501 Sloat Blvd, San Francisco, CA 94132",
    phone: "(415) 555-9012",
    email: "referrals@ggvs.com",
    website: "www.ggvs.com",
    hours: "Mon-Fri: 8am-8pm, Sat: 9am-5pm, Sun: 10am-4pm",
    rating: 4.9,
    reviewCount: 178,
    distance: 3.8,
    emergency: true,
    services: [
      "Orthopedic Surgery",
      "Soft Tissue Surgery",
      "Neurosurgery",
      "Oncology",
      "Advanced Diagnostics",
      "Rehabilitation",
    ],
    description:
      "Golden Gate Veterinary Specialists is a referral-only practice offering advanced surgical procedures and specialized care for complex cases.",
  },
  {
    id: "vet4",
    name: "Dr. Michael Brown",
    clinic: "Marina District Animal Hospital",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "General Practice",
    address: "2200 Chestnut St, San Francisco, CA 94123",
    phone: "(415) 555-3456",
    email: "info@marinavet.com",
    website: "www.marinavet.com",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-3pm, Sun: Closed",
    rating: 4.5,
    reviewCount: 142,
    distance: 1.8,
    emergency: false,
    services: ["Wellness Exams", "Vaccinations", "Dental Care", "Microchipping", "Spay/Neuter", "Geriatric Care"],
    description:
      "Marina District Animal Hospital provides compassionate care for dogs and cats in a friendly, low-stress environment. We focus on preventative care and client education.",
  },
  {
    id: "vet5",
    name: "Dr. Lisa Thompson",
    clinic: "SOMA Exotic Pet Hospital",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "Exotic Animal Medicine",
    address: "350 Townsend St, San Francisco, CA 94107",
    phone: "(415) 555-7890",
    email: "appointments@somaexotic.com",
    website: "www.somaexotic.com",
    hours: "Mon-Fri: 10am-7pm, Sat: 10am-5pm, Sun: Closed",
    rating: 4.7,
    reviewCount: 98,
    distance: 2.9,
    emergency: false,
    services: [
      "Exotic Pet Wellness",
      "Avian Medicine",
      "Reptile Care",
      "Small Mammal Medicine",
      "Nutritional Counseling",
      "Specialized Surgery",
    ],
    description:
      "SOMA Exotic Pet Hospital specializes in the care of birds, reptiles, amphibians, and small mammals. Our team has specialized training in exotic animal medicine.",
  },
  {
    id: "vet6",
    name: "Dr. Robert Kim",
    clinic: "Richmond 24/7 Emergency Vet",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "Emergency & Critical Care",
    address: "5320 Geary Blvd, San Francisco, CA 94121",
    phone: "(415) 555-0123",
    email: "emergency@richmondvet.com",
    website: "www.richmondvet.com",
    hours: "Open 24/7",
    rating: 4.9,
    reviewCount: 215,
    distance: 4.2,
    emergency: true,
    services: [
      "Emergency Surgery",
      "Critical Care",
      "Blood Transfusions",
      "Oxygen Therapy",
      "Trauma Care",
      "Intensive Monitoring",
    ],
    description:
      "Richmond 24/7 Emergency Vet provides round-the-clock emergency and critical care services for pets in crisis. Our facility is equipped to handle all types of veterinary emergencies.",
  },
  {
    id: "vet7",
    name: "Dr. Jennifer Lee",
    clinic: "Noe Valley Veterinary Clinic",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "Holistic & Integrative Medicine",
    address: "1200 Church St, San Francisco, CA 94114",
    phone: "(415) 555-6789",
    email: "info@noevalleyvet.com",
    website: "www.noevalleyvet.com",
    hours: "Mon-Fri: 9am-6pm, Sat: 10am-4pm, Sun: Closed",
    rating: 4.7,
    reviewCount: 132,
    distance: 2.3,
    emergency: false,
    services: [
      "Acupuncture",
      "Herbal Medicine",
      "Chiropractic Care",
      "Nutritional Therapy",
      "Conventional Medicine",
      "Preventative Care",
    ],
    description:
      "Noe Valley Veterinary Clinic offers an integrative approach to pet health, combining conventional veterinary medicine with evidence-based complementary therapies.",
  },
  {
    id: "vet8",
    name: "Dr. David Chen",
    clinic: "Sunset Pet Wellness Center",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "Preventative Care",
    address: "2025 Irving St, San Francisco, CA 94122",
    phone: "(415) 555-4567",
    email: "appointments@sunsetpetwellness.com",
    website: "www.sunsetpetwellness.com",
    hours: "Mon-Fri: 8am-7pm, Sat: 9am-4pm, Sun: Closed",
    rating: 4.6,
    reviewCount: 167,
    distance: 3.5,
    emergency: false,
    services: [
      "Wellness Exams",
      "Vaccinations",
      "Dental Care",
      "Nutrition Counseling",
      "Parasite Prevention",
      "Senior Pet Care",
    ],
    description:
      "Sunset Pet Wellness Center focuses on preventative care to keep your pets healthy throughout their lives. We emphasize client education and early disease detection.",
  },
]

// Adding marketplace items to the existing mock-data.ts file
export const marketplaceItems = [
  {
    id: "item1",
    title: "Premium Dog Bed - Memory Foam",
    price: 89.99,
    description: "Orthopedic memory foam dog bed, perfect for medium to large dogs. Removable, washable cover.",
    category: "beds",
    condition: "new",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      id: "user1",
      name: "Alex Johnson",
      rating: 4.8,
    },
    postedDate: "2 days ago",
    tags: ["memory foam", "orthopedic", "large dogs"],
  },
  {
    id: "item2",
    title: "Cat Tree with Scratching Posts",
    price: 65.0,
    description: "Multi-level cat tree with sisal scratching posts, plush perches, and a cozy hideaway.",
    category: "furniture",
    condition: "likeNew",
    location: "Oakland, CA",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      id: "user2",
      name: "Samantha Lee",
      rating: 4.9,
    },
    postedDate: "1 week ago",
    tags: ["cat tree", "scratching post", "multi-level"],
  },
  {
    id: "item3",
    title: "Automatic Pet Feeder",
    price: 45.5,
    description: "Programmable automatic pet feeder with timer. Dispenses up to 4 meals per day.",
    category: "accessories",
    condition: "good",
    location: "San Jose, CA",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      id: "user3",
      name: "Mike Wilson",
      rating: 4.6,
    },
    postedDate: "3 days ago",
    tags: ["automatic", "feeder", "timer"],
  },
  {
    id: "item4",
    title: "Premium Organic Dog Treats",
    price: 18.99,
    description:
      "Handmade organic dog treats. No preservatives or artificial ingredients. Great for dogs with allergies.",
    category: "food",
    condition: "new",
    location: "Berkeley, CA",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      id: "user4",
      name: "Emma Davis",
      rating: 5.0,
    },
    postedDate: "1 day ago",
    tags: ["organic", "treats", "handmade", "allergen-free"],
  },
  {
    id: "item5",
    title: "Interactive Dog Puzzle Toy",
    price: 24.95,
    description: "Mental stimulation puzzle toy for dogs. Helps prevent boredom and encourages problem-solving skills.",
    category: "toys",
    condition: "likeNew",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      id: "user5",
      name: "David Chen",
      rating: 4.7,
    },
    postedDate: "5 days ago",
    tags: ["interactive", "puzzle", "mental stimulation"],
  },
  {
    id: "item6",
    title: "Professional Pet Grooming Kit",
    price: 79.99,
    description: "Complete professional grooming kit with clippers, scissors, combs, and nail trimmers.",
    category: "grooming",
    condition: "new",
    location: "Marin, CA",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      id: "user1",
      name: "Alex Johnson",
      rating: 4.8,
    },
    postedDate: "1 week ago",
    tags: ["grooming", "professional", "clippers"],
  },
  {
    id: "item7",
    title: "Cat Carrier - Airline Approved",
    price: 35.0,
    description: "Soft-sided, airline-approved pet carrier for cats and small dogs. Comfortable and secure.",
    category: "accessories",
    condition: "good",
    location: "Palo Alto, CA",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      id: "user2",
      name: "Samantha Lee",
      rating: 4.9,
    },
    postedDate: "2 weeks ago",
    tags: ["carrier", "travel", "airline approved"],
  },
  {
    id: "item8",
    title: "Dog Training Clicker Set",
    price: 12.99,
    description: "Set of 3 training clickers with wrist straps. Perfect for positive reinforcement training.",
    category: "accessories",
    condition: "new",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      id: "user3",
      name: "Mike Wilson",
      rating: 4.6,
    },
    postedDate: "4 days ago",
    tags: ["training", "clicker", "positive reinforcement"],
  },
  {
    id: "item9",
    title: "Premium Catnip Toys - Set of 5",
    price: 15.5,
    description: "Handmade catnip toys in various shapes. Made with organic catnip and durable materials.",
    category: "toys",
    condition: "new",
    location: "Oakland, CA",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      id: "user4",
      name: "Emma Davis",
      rating: 5.0,
    },
    postedDate: "3 days ago",
    tags: ["catnip", "toys", "organic", "handmade"],
  },
]

