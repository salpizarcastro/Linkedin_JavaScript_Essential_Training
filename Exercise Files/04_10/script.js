/*
var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);

var currentDate = new Date();

*/

function Course(title, instructor, level, published, views){
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
      return ++course.views;
  };
}

//var course01 = new Course('My Title', 'Mr Instructor', 1, true, 0);
//var course02 = new Course('My Title JS', 'Mr Instructor Jr', 1, true, 66);
//console.log(course01);
//console.log(course02);

var courses =  [
  new Course('My Title', 'Mr Instructor', 1, true, 0),
  new Course('My Title JS', 'Mr Instructor Jr', 1, true, 66)
]
console.log(courses[1].instructor);
