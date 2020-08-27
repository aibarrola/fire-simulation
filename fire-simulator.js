//=========================
// SIMULATION GLOBAL VARIABLES
//=========================
var x = 500;
var y = 500;
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
        hAxis: {title: '', minValue: 0, maxValue: 1000},
        vAxis: {title: '', minValue: 0, maxValue: 1000},
        legend: 'none',
        colors: ['#FF0000'],
        pointShape: 'triangle',
        pointSize: 15,
        backgroundColor: 'rgb(180, 230, 176)',
    };
    chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
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
    data.addRow([x+Math.floor(Math.random() * w),y+Math.floor(Math.random() * w)]);
    data.addRow([x+Math.floor(Math.random() * w),y-Math.floor(Math.random() * w)]);

    data.addRow([x-Math.floor(Math.random() * w),y+Math.floor(Math.random() * w)]);
    data.addRow([x-Math.floor(Math.random() * w),y-Math.floor(Math.random() * w)]);
}

//SPREAD FIRE ANIMATION
function fireSpreadAnimation(x,y,windSpeed){
    for (i=1; i<windSpeed/10; i++) {
        setTimeout( function timer(){
            fireSpread(x,y,windSpeed);
            chart.draw(data,options);
        }, i*1000 );
    }
    chart.draw(data, options);
}

//ADD FIRE FUNCTION
function addFire(){
    //save inputs
    saveInp();
    data.addRow([x,y]);
    fireSpreadAnimation(x,y,windSpeed);
}

//PUT A RANDOM POINT ON THE CHART
function randStartPoint(num=1){
    saveInp();
    for(var i=0;i<num;i++){
        //gets random x,y
        x = Math.floor(Math.random() * 1000);
        y = Math.floor(Math.random() * 1000);
        data.addRow([x,y]);

        //adds fire spread
        fireSpreadAnimation(x,y,windSpeed);
    }
    

}
