//=========================
// SIMULATION GLOBAL VARIABLES
//=========================
var x = 0;
var y = 0;
var windDirection = 0;
var windSpeed = 10;
var data = [];
var chart;
var options = {}




//DRAW THE CHART 
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    data = google.visualization.arrayToDataTable([
        ['X', 'Y'],
        [ x,      y],
    ]);
    
    options = {
        title: 'Fire Spread Simulation',
        hAxis: {title: 'X-axis', minValue: 0, maxValue: 1000},
        vAxis: {title: 'Y-axis', minValue: 0, maxValue: 1000},
        legend: 'none'
    };
    chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

//PUT A RANDOM POINT ON THE CHART
function randStartPoint(){
    saveInp();
    x = Math.floor(Math.random() * 1000);
    y = Math.floor(Math.random() * 1000);

    data.addRow([x,y]);
    fireSpread(x,y,windSpeed)

    chart.draw(data, options);
}


//TO SAVE THE INPUT FROM THE FORM 
function saveInp(){
    x = parseInt(document.getElementById("x").value);
    y = parseInt(document.getElementById("y").value);
    // windDirection = parseInt(document.getElementById("wind-direction").value);
    windSpeed = parseInt(document.getElementById("wind-speed").value);
}
//CHECK AND SHOW INPUT VALUES
function showInput(){
    console.log(x);console.log(y);console.log(windDirection);console.log(windSpeed);
}

//SPREAD FIRE
function fireSpread(x,y,w){
    data.addRow([x+Math.floor(Math.random() * w),y]);
    data.addRow([x,y+Math.floor(Math.random() * w)]);
    data.addRow([x-Math.floor(Math.random() * w),y]);
    data.addRow([x,y-Math.floor(Math.random() * w)]);
}

//ATTEMPT RECURSIVE 
function fireSpread2(x,y){
    data.addRow([fireSpread(x,y)]);
    data.addRow([fireSpread(x,y)]);
    data.addRow([fireSpread(x,y)]);
    data.addRow([fireSpread(x,y)]);
}



//=================
//MAIN FUNCTION
//================= 
function startSimulation(){
    //save inputs
    saveInp();
    data.addRow([x,y]);
    fireSpread(x,y,windSpeed)
    //draw chart
    chart.draw(data, options);
    google.charts.setOnLoadCallback(drawChart);

    
}

