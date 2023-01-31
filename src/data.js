import tour1pic from './images/tour-1.jpeg';
import tour2pic from './images/tour-2.jpeg';
import tour3pic from './images/tour-3.jpeg';
import tour4pic from './images/tour-4.jpeg';
import tour5pic from './images/tour-5.jpeg';
import tour6pic from './images/tour-6.jpeg';

export const pageLinks = [
    {
        id : 1, 
        href : '#home',
        text: 'home',
    },
    {
        id : 2,
        href : '#about',
        text : 'about',
    },
    {
        id : 3,
        href : '#services',
        text : 'services',
    },
    {
        id : 4,
        href : '#tours',
        text : 'tours',
    }
];

export const socialLinks = [
    {
        id : 1,
        href : 'https://www.facebook.com',
        icon : 'fab fa-facebook',
    },
    {
        id : 2,
        href : 'https://www.twitter.com',
        icon : 'fab fa-twitter',
    },
    {
        id : 3,
        href : 'https://www.squarespace.com',
        icon : 'fab fa-squarespace',
    }
]

export const serviceData = [
    {
        id : 1,
        icon : 'fas fa-wallet fa-fw',
        title : 'Saving Money',
        text : 'The cheapest options available! We are the best option to save you money!',
    },
    {
        id : 2,
        icon : 'fas fa-tree fa-fw',
        title : 'Endless Hiking',
        text : 'Love hiking? We specialize in the most beautiful hikes in the world!',
    },
    {
        id : 3,
        icon : 'fas fa-socks fa-fw',
        title : 'Amazing Comfort',
        text : 'Comfort is where we excel! You will experience the most comfortable stays imaginable!',
    }
];

export const tourData = [
    {
        id : 1,
        img : tour1pic,
        date : 'august 26th, 2020',
        title : 'Tibet Adventure',
        text : 'Come Explore Tibet!!!',
        location : 'China',
        length : 6,
        price : 2100,
    },
    {
        id : 2,
        img : tour2pic,
        date : 'October 1st, 2020',
        title : 'Best of Java',
        text : 'Come Explore Indonesia!!!',
        location : 'Indonesia',
        length : 11,
        price : 1400,
    },
    {
        id : 3,
        img : tour3pic,
        date : 'September 15th, 2020',
        title : 'Explore Hong Kong',
        text : 'Come Explore Hong Kong!!!',
        location : 'Hong Kong',
        length : 8,
        price : 5000,
    },
    {
        id : 4,
        img : tour4pic,
        date : 'December 5th, 2019',
        title : 'Kenya Highlights',
        text : 'Come Explore Kenya!!!',
        location : 'Kenya',
        length : 20,
        price : 3300,
    },
    {
        id : 5,
        img : tour5pic,
        date : 'July 9th, 2022',
        title : 'Australian Safari',
        text : 'Come see beautiful Australia!!!',
        location : 'Australia',
        length : 18,
        price : 5700,
    },
    {
        id : 6,
        img : tour6pic,
        date : 'January 14th, 2021',
        title : 'Indian Adventure',
        text : 'Come see Agra and the Taj Mahal!!!',
        location : 'Agra, India',
        length : 14,
        price : 4500,
    }
]