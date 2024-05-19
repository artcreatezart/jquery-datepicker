// Document Ready function - ensure the HTML is full loaded before trying to use any JS
// $ = getElement or querySelector

// Grab the document (HTML) and check it is ready:
$(document).ready(function () {
    // ALL JS is placed inside here

    // chnage background colour of all the p tags to red once document is ready

    $("p").css("color", "violet"); // all p tags
    $("#one").css("color", "blue"); // all first p tag
    $("#two").css("color", "purple");
    $("#three").css("color", "turquoise");
    $("#four").css("color", "orange");
    $("#five").css("color", "red"); // all first p tag

    //  body bg-color to off black
    $("body").css("background-color", "#1f1f1f"); //  body

    // Click events:

    // click event to hide p tags
    $("#hideButton").click(function () {
        // my js for the click event:
        $("p").hide();
    })

    // click event to show p tags
    $("#showButton").click(function () {
        // my js for the click event:
        $("p").show();
    })

    // alert button pops up an alert:
    $("#alertButton").click(function () {
        alert("alert button works");
    })

    // onchange of the username update the userResult
    $("#usernameInput").change(function (event) {
        $("#usernameResult").html = event.target.value; //chnage html inside of the p tag
    })

    //  onchange of the password update the passwordResult
    $("#passwordInput").change(function (event) {
        $("#passwordResult").html(event.target.value);
    })


    /** -------- DATE PICKER -------- */

    // Initalise date picker on the input
    $("#startDate").datepicker({
        // yy-mm-dd
        dateFormat: "dd-mm-yy",
        onSelect: function () {
            const startDate = $("#startDate").datepicker("getDate");
            console.log(startDate);
            // run calculate function:
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    $("#endDate").datepicker({
        dateFormat: "dd-mm-yy",
        onSelect: function () {
            const startDate = $("#endDate").datepicker("getDate");
            console.log(startDate);
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    // Calculate the difference between the two dates:
    function calculateDays() {
        const startDate = $("#startDate").datepicker("getDate");
        const endDate = $("#endDate").datepicker("getDate");

        // check if we have a start date and an end date
        if (startDate && endDate) {
            // calculate the difference:
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()) // make sure the number is a positive number
            console.log(timeDiff);

            // 1000 milliseconds per second
            // 3600 seconds per hour
            // 24 hours in a day

            // 1000 * 3600 * 24 = number of milliseconds in a day
            // timeDiff / number of millisecond in day = number of days
            // make sure number of days is a whole number - we use Math.ceil()

            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);

            // update number of days span
            $("#numberOfDays").text(diffDays);
            return diffDays;


        } else {
            // make sure number of days is empty
            $("#numberOfDays").text(""); // set it to empty text
        }
    }

    /** -------- Example of using date to filter ------- */

    const hotels = [{
            id: 1,
            name: "Hotel 1",
            minStay: 3,
            maxStay: 10,
        },
        {
            id: 2,
            name: "Hotel 2",
            minStay: 1,
            maxStay: 5,
        },
        {
            id: 3,
            name: "Hotel 3",
            minStay: 5,
            maxStay: 8,
        },
        {
            id: 4,
            name: "Hotel 4",
            minStay: 4,
            maxStay: 6,
        },
        {
            id: 5,
            name: "Hotel 5",
            minStay: 4,
            maxStay: 9,
        },
    ];

    function populateResults(diffDays) {

        $("#results"), html = '';
        // run a for loop over the htoel array to do this for each hotel:
        hotels.forEach(hotel => {
            if (diffDays >= hotel.minStay && diffDays <= hotel.maxStay) {
                $("#results").append(`<p>${hotel.name}</p>`);
            } else {
                $("#results").append(`<p>${hotel.name}</p>`);
            }
        })
    }

});