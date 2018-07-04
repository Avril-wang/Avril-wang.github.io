var data = [20,141,50,100,80];
var svg_height = 220;
var svg_width = 1000;
var d = svg_width / data.length;
//比例尺
var scale = d3.scaleLinear().domain([0, d3.max(data)]).range([0, svg_height]);
//折线生成函数
var line_generator = function(x,i) {
  var offset = -1;
  var line_data = data.map( function(y) {
    offset ++;
    return { y: svg_height - scale(y), x: offset * d };
  } );
  var lineFunction = d3.line().x(function(d){return d.x;}).y(function(d){return d.y;});
  return lineFunction(line_data);
};
//区域生成函数
var area_generator = function(x,i) {
  var offset = -1;
  var area_data = data.map( function(y) {
    offset ++;
    return [offset * d, svg_height - scale(y)];
  } );
  var area = d3.area().y0(svg_height);
  return area(area_data);
};
setTimeout( function() {
  // line
  d3.select('#chart')
    .data(data)         //数据驱动：根据data的长度去生成对应的path
    .append('path')
      .attr('stroke', 'rgb(66, 132, 243)')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('d', line_generator);
  // area
  d3.select('#chart')
    .data(data)
    .append('path')
      .attr('stroke', 'none')
      .attr('fill', 'rgba(66, 132, 243, 0.2)')
      .attr('d', area_generator);
  }, 300 );