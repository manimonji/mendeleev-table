let elements = [
    { name: "هیدروژن", chemicalSymbol: "H", atomicNumber: 1, group: 1, period: 1 },
    { name: "هلیم", chemicalSymbol: "He", atomicNumber: 2, group: 18, period: 1 },
    { name: "لیتیم", chemicalSymbol: "Li", atomicNumber: 3, group: 1, period: 2 },
    { name: "بریلیم", chemicalSymbol: "Be", atomicNumber: 4, group: 2, period: 2 },
    { name: "بور", chemicalSymbol: "B", atomicNumber: 5, group: 13, period: 2 }
];

d3.select("body > #table")
  .selectAll("div")
  .data(elements)
  .enter()
  .append("div")
  .classed("element", true)
  .text(d => d.name)
  
   
