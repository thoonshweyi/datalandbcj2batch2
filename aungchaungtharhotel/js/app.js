// Start jQuery Area
$(document).ready(function(){
    // Start Room Section
    $('.roompopup').magnificPopup({type : 'image'});
    // End Room Section
});
// End jQuery Area

// Start Javascript Area
// Start Header

// start nav bar
function dropbtn(e){
    // document.getElementById('mydropdown').classList.toggle('show');
    
    // undefined
    // console.log(this);
    // console.log(e);

    // console.log(e.target);
    // console.log(e.target.nextElementSibling);

    e.target.nextElementSibling.classList.toggle('show');
}

function dropfilter(){
    var getsearch,filter,getdropdiv,getlinks,linkvalue;
    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById('mydropdown');
    // getlinks = document.getElementsByTagName('a');

    getlinks = document.querySelectorAll('.mydropdowns a');

    for(var x = 0 ; x < getlinks.length ; x++){
        // linkvalue = getlinks[x].textContent;
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        // console.log(linkvalue);

        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            // getlinks[x].style.display = "";
            getlinks[x].style.display = "block";
        }else{
            getlinks[x].style.display = "none";
        }


    }
}

// end nav bar

// start auto background
function* genfun(){
    var index = 8;
    while(true){
        yield index++;
        if(index > 13){
            index = 8;
        }
    }
}
var getgen = genfun();
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);



var getheader = document.querySelector('header');
// ***
getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;

function autoload(){
    getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
}
setInterval(autoload,2500);
// end auto background

// End Header

// Start Testimonials Section
const getcompanyname = document.querySelector('.companyname');
const getrole = document.querySelector('.role');
const gettestimonial = document.querySelector('.testimonial');

const testimonialdatas = [
    {
        name : "Rich Star Restaurant",
        position : "Our Outlet",
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name : "48 Sky Bar Cafe",
        position : "Our Partner",
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name : "52 Beach Hotel",
        position : "Our Branch",
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name : "Cool Land Swimming Pool",
        position : "Our Outlet",
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name : "Chaung Thar SPA",
        position : "Our Business",
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];
let idx = 0;

// console.log(testimonialdatas[idx]);
// console.log(testimonialdatas[idx].name);
// console.log(testimonialdatas[idx].position);
// console.log(testimonialdatas[idx].text);

function updatetestimonial(){
    // getcompanyname.textContent = testimonialdatas[idx].name;
    // getrole.textContent = testimonialdatas[idx].position;
    // gettestimonial.textContent = testimonialdatas[idx].text;

    const {name,position,text} = testimonialdatas[idx];
    // console.log(name);
    // console.log(position);
    // console.log(text);

    getcompanyname.textContent = name;
    getrole.textContent = position;
    gettestimonial.textContent = text;



    idx++;
    if(idx > testimonialdatas.length - 1){
        idx = 0;
    }
}
updatetestimonial();
setInterval(updatetestimonial,10000);
// End Testimonials Section

// End Javascript Area


