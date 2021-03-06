$(document).ready(function () {
    // $(".departmentSelect").one("select2:open", function (e) {
    //     $("input.select2-search__field").prop("placeholder", "Search here...")
    // })
    $(".tagsSelect").select2()

    $(".genderSelect").select2({
        minimumResultsForSearch: -1,
    })
    $(".departmentSelect").select2()
})

var table = $("table").DataTable({
    scrollY: "300px",
    scrollX: true,
    scrollCollapse: true,
    paging: true,
})

// CHARTJS
var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

new Chart("multipleLines", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
                borderColor: "#321fdb",
                fill: false,
            },
            {
                data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
                borderColor: "#39f",
                fill: false,
            },
            {
                data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
                borderColor: "#8a93a2",
                fill: false,
            },
        ],
    },
    options: {
        legend: { display: false },
    },
})
