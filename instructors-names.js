const instructorWithLongestName = function(instructors) {
  let winner = {
    name: "",
    course: ""
  };
  instructors.forEach(function (element) {
    if (element.name.length > winner.name.length) {
      winner = element;
    }  
  });
  return winner;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));