// Start jQuery Area
$(document).ready(function(){

    // Start Header
        // Start Nav Bar
        $('.navbuttons').click(function(){
            $(this).toggleClass('crossxs');
        });
        // End Nav Bar
    // End Header


});


// End jQuery Area

// Start Js Area
    // Start Students Counter Section
    var getcountervalues = document.querySelectorAll('.countervalues');
    // console.log(getcountervalues);
    getcountervalues.forEach(function(getcountervalue){
        // console.log(getcountervalue);
        getcountervalue.textContent  = 0;

        const updatecounter = function(){
            // console.log('i am working');

            const getcttarget = + getcountervalue.getAttribute('data-target');
            // console.log(typeof getcttarget,getcttarget);
        
            const getctcontent = +getcountervalue.innerText;
            // console.log(typeof getctcontent,getctcontent);

            const incnumber = getcttarget / 100;
            // console.log(incnumber);

            if(getctcontent < getcttarget){
                getcountervalue.textContent = getctcontent+incnumber;
                setTimeout(updatecounter,100);
            }

        }

        updatecounter();
    });
    // End Students Counter Section

// End Js Area


// 25CT