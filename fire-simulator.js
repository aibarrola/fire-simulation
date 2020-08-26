//=========================
// SIMULATION GLOBAL VARIABLES
//=========================
var x = 50;
var y = 50;
var windDirection;
var windSpeed;
var data = [];
var chart;
var options = {}




//DRAW THE CHART 
google.charts.load('current', {'packages':['corechart']});
function drawChart() {

    data = google.visualization.arrayToDataTable([
        ['X', 'Y'],
        [ x,      y],
    ]);
    
    options = {
        title: 'Fire Spread Simulation',
        hAxis: {title: 'X-axis', minValue: 0, maxValue: 100},
        vAxis: {title: 'Y-axis', minValue: 0, maxValue: 100},
        legend: 'none'
    };
    chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}


//TO SAVE THE INPUT FROM THE FORM 
function saveInp(){
    x = parseInt(document.getElementById("x").value);
    y = parseInt(document.getElementById("y").value);
    windDirection = document.getElementById("wind-direction").value;
    windSpeed = document.getElementById("wind-speed").value;
}
//CHECK AND SHOW INPUT VALUES
function showInput(){
    console.log(x);console.log(y);console.log(windDirection);console.log(windSpeed);
}

//ADD DATA POINT TO CHART
function addChart(){
    data.addRows([
        [4,9]
    ]);
    chart.draw(data, options);
}






google.charts.setOnLoadCallback(drawChart);
//=================
//MAIN FUNCTION
//================= 
function startSimulation(){
    //save inputs
    saveInp();
    showInput();

    //draw chart
    google.charts.setOnLoadCallback(drawChart);

    
}

