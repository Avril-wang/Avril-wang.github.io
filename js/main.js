var line = d3.line();

var data0 =[
    {x:0,y:0},
    {x:350, y:0},
    {x:650, y:0},
    {x:950, y:0},
];

var data1 =[
    {x:0,y:0},
    {x:350, y:100},
    {x:650, y:50},
    {x:950, y:80},
];

var data2 =[
    {x:0,y:100},
    {x:350, y:80},
    {x:650, y:20},
    {x:950, y:40},
];

var data3 =[
    {x:0,y:20},
    {x:350, y:29},
    {x:650, y:90},
    {x:950, y:190},
];

var data4 =[
    {x:0,y:200},
    {x:350, y:4},
    {x:650, y:100},
    {x:950, y:2},
];

var p = d3.select('#path1');

var area = d3.area()
    .x(function(d){return d.x;})
    .y0(0)
    .y1(function(d){return d.y;});

d3.select('#path1')
.attr('d', line(data1))
.attr('d',area(data1))
.transition()

d3.select('#run1').on('mouseover',function(){
    d3.select('#path1')
    .attr('d', line(data1))
    .attr('d',area(data1))
    .transition()
    .duration(500)
}) 

d3.select('#run2').on('mouseover',function(){
    d3.select('#path1')
    .attr('d', line(data2))
    .attr('d',area(data2))
    .transition()
    .duration(500)
}) 

d3.select('#run3').on('mouseover',function(){
    d3.select('#path1')
    .attr('d', line(data3))
    .attr('d',area(data3))
    .transition()
    .duration(500)
}) 

d3.select('#run4').on('mouseover',function(){
    d3.select('#path1')
    .attr('d', line(data4))
    .attr('d',area(data4))
    .transition()
    .duration(500)
}) 




