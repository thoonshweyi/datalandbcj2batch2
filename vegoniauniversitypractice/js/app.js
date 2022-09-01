// Start Javascript Area
    // Start Student Counter Section
    var getcountervalues = document.querySelectorAll('.countervalues');
    getcountervalues.forEach(function(getcountervalue){
        getcountervalue.textContent = '0';
        // console.log(getcountervalue);
        const targetvalue = getcountervalue.getAttribute('data-target');
        const incvalue = targetvalue / 100;

        updateCounter();
        
        function updateCounter(){
            var currentvalue =  +getcountervalue.textContent;
            
            if(currentvalue < targetvalue){
                getcountervalue.textContent = currentvalue + incvalue;
    
                setTimeout(updateCounter,100);
            }
        }


    });
    

    // End Student Counter Section

// End Javascript Area


// Start jQuery Area
    // start navbar
    $(document).ready(function(){
        $('.navbuttons').click(function(){
            $(this).toggleClass('crossxs')
        });
    });
    // end navbar
// End jQuery Area