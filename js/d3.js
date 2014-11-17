d3.select("body").append("h2").text("Upfront Monthly Cost");

serverType = ["t2.mirco", "t2.small", "t2.medium", "m3.medium", "m3.large", "m3.xlarge", "m3.2xlarge"];
upfrontCost = [68, 136, 272, 222, 443, 886, 1772];
hourlyCost = [0.004, 0.008, 0.016, 0.029, 0.057, 0.113, 0.228];

var svgWidth = 900;
var svgHeight = 200;
var barPadding = 5;
var svg = d3.select("body").append("svg").attr("width", svgWidth).attr("height", svgHeight)
  .style("display", "block").style("margin", "auto");

svg.selectAll("rect").data(upfrontCost).enter()
  .append("rect")
  .attr("x", function(d,i){
    return i * (svgWidth / upfrontCost.length);
  })
  .attr("y", function(d){
    return svgHeight - (d/10);
  })
  .attr("width", svgWidth / upfrontCost.length - barPadding)
  .attr("height", function(d){
    return d / 10;
  })
  .attr("fill", function(d){
    return "rgb(" + d + ",0,0)";
  });

svg.selectAll("text").data(upfrontCost).enter()
   .append("text")
   .text(function(d, i){
    return serverType[i] + " " + d + "$";
   })
   .attr("x", function(d,i){
    return i * (svgWidth / upfrontCost.length);
  })
  .attr("y", function(d){
    return svgHeight - 180;
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "15px")
  .attr("fill", "purple");

d3.select("body").append("h2").text("Hourly Cost");
