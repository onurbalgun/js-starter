import { CourseService } from "./course.js";

export class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  print() {
    return this.name;
  }
}

export class Student extends User {
  constructor(id, name, courses) {
    super(id, name);
    this.courses = courses;
  }
  print() {
   return `This is ${super.print()} and these are the courses i have enrolled ${this.courses}`
   
  }
  enrollCourse(courseId) {
    this.courses.push(courseId);
  }
}
export class Teacher extends User {
  constructor(id, name, courses) {
    super(id, name);
    this.courses = courses;
  }
  print() {
    console.log(
      `This is ${super.print()} and these are the courses i  teach ${
        this.courses
      }`
    );
  }
}

export class UserService {
  constructor() {
    this.users = [];
  }
  add(user) {
    this.users.push(user);
  }
  listUsers() {
    return this.users;
  }
  findById(id) {
    return this.users.find((user) => {
      return user.id === id;
    });
  }
}
