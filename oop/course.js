
export class Course 
{
    constructor(id,name,description,type,instructorName,totalLength,content)//todo içerik
    {
        this.id=id;
        this.name=name;
        this.description=description;    
        this.type=type;
        this.instructorName= instructorName;
        this.totalLength=totalLength;
        this.content= content;
    }
    print()
    {
        console.log(this);
    }
    printCourseContent()
    {
        console.log(this.content);
    }
 
    
}

export class CourseService
{
    constructor()
    {
        this.courses = [];
    }
    add(course){
        this.courses.push(course);
    }
    listCourses()
    {
       return this.courses;
    } 
    filterCoursesByTeacher(instructorName)
    {
        if(instructorName===undefined)
        {
            return this.courses;
        }
        return this.courses.filter(course=>{
            return course.instructorName===instructorName
        })
    }
    filterCoursesByType(type)
    {
        if(type===undefined)
        {
            return this.courses;
        }
        return this.courses.filter(course=>{
            return course.type===type
        })
    }
    searchCourses(query)
    {

        return this.courses.filter(course=>{
            return course.name.toLowerCase().includes(query.toLowerCase())|| course.description.toLowerCase().includes(query.toLowerCase())
        })
    }
    getCoursesById(id)
    {
        return this.courses.find(course=>course.id===id)
    }
    findEnrolledCourses(coursesIdList) {
        if (coursesIdList === undefined) {
          return "No courses found.Would you like to enroll a course?";
        }
        return coursesIdList.map((courseId) => {
          return this.getCoursesById(courseId);
        });
      }
      getCourseContentWithCourseId(courseId)
      {
        return this.courses.find(course=>course.id===courseId).content
      }  
}
