// console.log('YO');

const wrapper = document.querySelector('.sliderWrapper');

// wrapper.style.transform = "translateX(-100vw)";
const menuItem = document.querySelectorAll('.menuItem');

const products =[
    {
        id : 1 ,
        title : 'AIR FORCE',
        price : '14,999' ,
        colors :[
            {
                code : 'black',
                img : './images/air.png'
            },
            {
                code : 'darkblue',
                img : './images/air2.png'
            }
        ]
    },
    
    {
        id : 2 ,
        title : 'JORDAN',
        price : '19,999' ,
        colors :[
            {
                code : 'white',
                img : './images/jordan.png'
            },
            {
                code : 'green',
                img : './images/jordan2.png'
            }
        ]
    },

    {
        id : 1 ,
        title : 'BLAZZER',
        price : '10,699' ,
        colors :[
            {
                code : 'white',
                img : './images/blazer.png'
            },
            {
                code : 'green',
                img : './images/blazer2.png'
            }
        ]
    },

    {
        id : 1 ,
        title : 'CRATER',
        price : '21,299' ,
        colors :[
            {
                code : 'black',
                img : './images/crater.png'
            },
            {
                code : 'white',
                img : './images/crater2.png'
            }
        ]
    },

    {
        id : 1 ,
        title : 'HIPPIE',
        price : '9,199' ,
        colors :[
            {
                code : 'gray',
                img : './images/hippie.png'
            },
            {
                code : 'rgb(48, 48, 48)',
                img : './images/hippie2.png'
            }
        ]
    }
];


let choosenproduct = products[0];

const pimg = document.querySelector('.productImg');
const title = document.querySelector('.productTitle');
const price = document.querySelector('.productPrice');
const colorsProduct = document.querySelectorAll('.color');
const sizeProduct = document.querySelectorAll('.size');

menuItem.forEach((item , index) => {
    item.addEventListener('click' , () => {
        // console.log('CLICKED' + index);
        wrapper.style.transform = `translateX(${index * -100}vw)`;

        choosenproduct = products[index];
        title.innerHTML = choosenproduct.title;
        price.innerHTML = choosenproduct.price;

        console.log(choosenproduct.colors[0].img);
        pimg.src = choosenproduct.colors[0].img;

        // sizeProduct[1].style.backgroundColor = "black";
        // sizeProduct[1].style.color = "white";

        colorsProduct.forEach((it , id) => {
            it.style.backgroundColor = choosenproduct.colors[id].code;

            it.addEventListener('click' , () => {
                console.log(choosenproduct.colors[id].img);
                pimg.src = choosenproduct.colors[id].img;
            });
        });
    });
});

colorsProduct.forEach((it , id) => {

    it.addEventListener('click' , () => {
        console.log(choosenproduct.colors[id].img);
        pimg.src = choosenproduct.colors[id].img;
    });
});

sizeProduct.forEach((size , index) => {
    size.addEventListener('click' , () => {
        sizeProduct.forEach((size1 , index1) => {
            size1.style.backgroundColor = "transparent";
            size1.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const openPayment = document.querySelector('.buyProduct');

const closePayment = document.querySelector('.cross');

const paymentForm = document.querySelector('.payment');

openPayment.addEventListener('click' , () => {
    paymentForm.style.display = "flex";
});

closePayment.addEventListener('click' , () => {
    paymentForm.style.display = "none";
});
