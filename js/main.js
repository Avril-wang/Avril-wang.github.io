var line = d3.line();

var data0 =[
    {"x":0,"y":0,"name":"time"},
    {"x":350, "y":0,"name":"Language"},
    {"x":650, "y":0,"name":"Skill"},
    {"x":950, "y":0,"name":"Horizen"},
];

var data1 =[
    {"x":0,"y":0,"name":"time"},
    {"x":350, "y":100,"name":"Language"},
    {"x":650, "y":50,"name":"Skill"},
    {"x":950, "y":80,"name":"Horizen"},
];

var data2 =[
    {"x":0,"y":100,"name":"time"},
    {"x":350, "y":80,"name":"Language"},
    {"x":650, "y":20,"name":"Skill"},
    {"x":950, "y":40,"name":"Horizen"},
];

var data3 =[
    {"x":0,"y":20,"name":"time"},
    {"x":350, "y":29,"name":"Language"},
    {"x":650, "y":90,"name":"Skill"},
    {"x":950, "y":190,"name":"Horizen"},
];

var data4 =[
    {x:0,y:200,name:"time"},
    {x:350, y:4,name:"Language"},
    {x:650, y:100,name:"Skill"},
    {x:950, y:2,name:"Horizen"},
];

var myTool = d3.select('#path1')
             .append('div')
             .attr("class","mytooltip")
             .style("opacity","1")
             .style("display","block");

var area = d3.area()
    .x(function(d){return d.x;})
    .y0(0)
    .y1(function(d){return d.y;});

d3.select('#path1')
.attr('d', line(data0))
.attr('d',area(data0))
.transition()

d3.select('#run1').on('mouseover',function(){
    d3.select('#path1')
    .attr('d', line(data1))
    .attr('d',area(data1))
    .transition()
    .duration(500)
    myTool
    .style("opacity","1")
    .style("display","block");
}) 

d3.select('#run2').on('mouseover',function(){
    d3.select('#path1')
    .attr('d', line(data2))
    .attr('d',area(data2))
    .transition()
    .duration(500)
    myTool
    .style("opacity","1")
    .style("display","block");
}) 

d3.select('#run3').on('mouseover',function(){
    d3.select('#path1')
    .attr('d', line(data3))
    .attr('d',area(data3))
    .transition()
    .duration(500)
    myTool
}) 

d3.select('#run4').on('mouseover',function(){
    d3.select('#path1')
    .attr('d', line(data4))
    .attr('d',area(data4))
    .transition()
    .duration(500)
    myTool
}) 




