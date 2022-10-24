import { Course, CourseService } from "./course.js";
import { Student, UserService } from "./user.js";
let courseService= new CourseService(); 
let student1 = new Student(1,"Onur",[],courseService);
let student2 = new Student(2,"Ahmet",[]);
let student3 = new Student(3,"Vedat",[]);
let userService = new UserService();
userService.add(student1);
userService.add(student2);
userService.add(student3);
console.log("List of all users");
userService.listUsers();

//student1.print();
let course1 = new Course(1,"Yazılım Geliştirme JavaScript","2 ay sürecek javascript programı","Programlama","Engin Demirog", 16,"Kurs içeriği javascript");
let course2 = new Course(2,"Senior Yazılım Geliştirme Campı(.NET)","Senior yazılım geliştirici yetiştirme kampımızın takip ve dökümanlarını buradan yapacağız.","Programlama","Engin Demirog", 16,"Kurs içeriği .net");

courseService.add(course1)
courseService.add(course2);


console.log("List of all Courses.");
console.log(courseService.listCourses() );
console.log("List of all Courses filtered by teacher name.");
//console.log(courseService.filterCoursesByTeacher());
console.log(courseService.filterCoursesByTeacher('Engin Demirog'));

console.log("List of all Courses filtered by course type.");
//console.log(courseService.filterCoursesByType());
console.log(courseService.filterCoursesByType('Programlama'));

console.log("List of all Courses filtered by search query.");
console.log(courseService.searchCourses('yazılım'));

student1.enrollCourse(1);
student1.enrollCourse(2);
//student1.enrollCourse(32);//Todo check for invalid ids and deny enrollment
console.log("List of courses enrolled by student 1");
console.log(courseService.findEnrolledCourses(student1.courses));

console.log("Show selected course content.");
console.log(courseService.getCourseContentWithCourseId(1));



console.log(userService.findById(1));
