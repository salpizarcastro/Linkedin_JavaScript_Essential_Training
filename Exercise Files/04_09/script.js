/*
var course = new Object();
course.title = 'My Title'
course.instructor = 'Mr Instructure'
course.level = 1
or
*/

var course = {
  title: 'My Title',
  instructor: 'Mr Instructor',
  level: 1,
  published: true,
  views: 0,
  updateViews: function(){
    return ++course.views;
  }
}

console.log(course);
console.log(course.views);
course.updateViews();
console.log(course);
