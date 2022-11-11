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

    // Start Google Chart API
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            var data = google.visualization.arrayToDataTable([
            ['Country', 'Number Of Students'],
            ['Myanmar',     8],
            ['Thailand',      2],
            ['Singapore', 4],
            ['Indonesia', 2],
            ['Srilanka',    8]
            ]);

            var options = {
                title: 'International Students',
                width : 500,
                height : 400
            };

            var chart = new google.visualization.PieChart(document.getElementById('stupiechart'));

            chart.draw(data, options);
        }
    // End Google Chart API

    // Start Footer Section
    var getyear = document.getElementById('getyears');
    var getfullyear = new Date().getUTCFullYear();
    getyear.textContent = getfullyear;
    // End Footer Section

// End Javascript Area


// Start jQuery Area
    
    $(document).ready(function(){
        // start navbar
        $('.navbuttons').click(function(){
            $(this).toggleClass('crossxs')
        });
        // end navbar


        // Start Login Box
        $('#openbtn').click(function(){
            // $('#form-popup').css('display','block');
            $('#form-popup').toggle();
        });
        $('#form-closebtn').click(function(){
            $("#form-popup").hide();
        });
        // End Login Box
    });

   
// End jQuery Area

