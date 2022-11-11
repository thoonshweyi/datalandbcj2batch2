// Start Js Area
    // Start Header Section
    // Start Navbar
    function faqdrop(){
        document.getElementById('mydropdown').classList.toggle('show');
    }

    function filter(){
        var getsearch = document.getElementById('search');
        var filtervalue = getsearch.value.toUpperCase();
        // console.log(filtervalue);
        var getdropdown = document.getElementById('mydropdown');
        var getlinks = getdropdown.getElementsByTagName('a');
        // console.log(getlinks);

        for(var i = 0; i < getlinks.length ; i++){
            var linkvalue = getlinks[i].textContent || getlinks[i].innerText;

            if(linkvalue.toUpperCase().indexOf(filtervalue) > -1){
                getlinks[i].style.display = "block";
            }else{
                getlinks[i].style.display = "none";
            }
        }
    }
    // End Navbar

    // Start Banner

    //Method 1
    // function* genfun(){
    //     var index = 8;
        
    //     while(true){
    //         yield index++;
    //         if(index > 13){
    //             index = 8;
    //         }
    //     }
    // }
    // var getgen = genfun();
    // // console.log(getgen.next().value);
    // // console.log(getgen.next().value);
    // // console.log(getgen.next().value);
    // // console.log(getgen.next().value);
    // // console.log(getgen.next().value);
    // // console.log(getgen.next().value);
    // // console.log(getgen.next().value);
    // // console.log(getgen.next().value);
    // var getheader = document.querySelector('header');
    // getheader.style.backgroundImage = `url('./assets/img/banner/banner${getgen.next().value}.jpg')`; 

    // function autobackground(){
    //     getheader.style.backgroundImage = `url('./assets/img/banner/banner${getgen.next().value}.jpg')`;
    // }
    // setInterval(autobackground,2500);

    // Method2
    var currentbgidx = 8;

    var getheader = document.querySelector('header');
    getheader.style.backgroundImage = `url('./assets/img/banner/banner${currentbgidx}.jpg')`;
    function autobackground(){
        currentbgidx++;
        if(currentbgidx > 13){
            currentbgidx = 8;
        }
        getheader.style.backgroundImage = `url('./assets/img/banner/banner${currentbgidx}.jpg')`;
        console.log(currentbgidx);
    }
    setInterval(autobackground,2500);

    // End Banner
    // End Header Section
// End Js Area


// Start  jQuery Area
$(document).ready(function(){
    // console.log('hi');
    // Start Room Section
    $('.roompopup').magnificPopup({
        type: 'image'
    });
    // End Room Section
});
// End jQuery Area