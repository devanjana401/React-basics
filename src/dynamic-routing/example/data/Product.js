import gallery1 from '../images/gallery1.jpg';
import gallery2 from '../images/gallery2.jpg';
import gallery3 from '../images/gallery3.jpg';
import gallery4 from '../images/gallery4.jpg';

export const products = [
    {
        id:3,
        image:gallery3,
        title:"Yoga Pose 3",
        category:'intermediate',
        price:4000,
        oldPrice:5000,
        rating:4,
        offer:25,
        description:"This is the yoga class for intermediate",
        gallery:[gallery1,gallery2,gallery3,gallery4]
    },
    {
        id:4,
        image:gallery4,
        title:"Yoga Pose 4",
        category:'advanced',
        price:4000,
        oldPrice:5000,
        rating:4,
        offer:25,
        description:"This is the yoga class for advanced",
        gallery:[gallery1,gallery2,gallery3,gallery4]
    }
]