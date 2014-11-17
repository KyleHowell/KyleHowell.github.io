d3.select("body").append("h2").text("Upfront Monthly Cost");

serverType = ["t2.mirco", "t2.small", "t2.medium", "m3.medium", "m3.large", "m3.xlarge"];
upfrontCost = [68, 136, 272, 222, 443, 886];
hourlyCost = [0.004, 0.008, 0.016, 0.029, 0.057, 0.113];

var svgWidth = 900;
var svgHeight = 200;
var barPadding = 5;
var svgUpfront = d3.select("body").append("svg").attr("width", svgWidth).attr("height", svgHeight)
  .style("display", "block").style("margin", "auto");

svgUpfront.selectAll("rect").data(upfrontCost).enter()
  .append("rect")
  .attr("x", function(d,i){
    return i * (svgWidth / upfrontCost.length);
  })
  .attr("y", function(d){
    return svgHeight - (d/5);
  })
  .attr("width", svgWidth / upfrontCost.length - barPadding)
  .attr("height", function(d){
    return d / 5;
  })
  .attr("fill", function(d){
    return "rgb(" + Math.floor(d /2)  + ",0,0)";
  });

svgUpfront.selectAll("text").data(upfrontCost).enter()
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

d3.select("body").append("h2").text("Hourly Cost per Month");

var svgHourly = d3.select("body").append("svg").attr("width", svgWidth).attr("height", svgHeight)
  .style("display", "block").style("margin", "auto");

svgHourly.selectAll("rect").data(hourlyCost).enter()
  .append("rect")
  .attr("x", function(d,i){
    return i * (svgWidth / hourlyCost.length);
  })
  .attr("y", function(d){
    return svgHeight - (d*1500);
  })
  .attr("width", svgWidth / upfrontCost.length - barPadding)
  .attr("height", function(d){
    return d * 1500;
  })
  .attr("fill", function(d){
    return "rgb(" + Math.floor(d * 6000) + ",0,0)";
  });

svgHourly.selectAll("text").data(hourlyCost).enter()
   .append("text")
   .text(function(d, i){
    return serverType[i] + " $" + Math.floor(d*730.484);
   })
   .attr("x", function(d,i){
    return i * (svgWidth / hourlyCost.length);
  })
  .attr("y", function(d){
    return svgHeight - 180;
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "15px")
  .attr("fill", "purple");
