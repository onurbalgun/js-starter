
//Kurs
//KursService
//Student
class Course 
{
    constructor(name,type,instructorName,totalLength,content)//todo içerik
    {
        this.name=name;
        this.type=type;
        this.instructorName= instructorName;
        this.totalLength=totalLength;
        this.content= content;
    }
    print()
    {
        console.log(this);
    }
    
    
}
class CourseService
{
    constructor()
    {
        this.courses = [];
    }
    add(course){
        this.courses.push(course);
    }   
}

class Student
{
    constructor()
    {

    }
}
Kurs1 = new Course("Yazılım Geliştirme JavaScript","Programlama","Engin Demirog", 16,
[{title:"1. gün içeriği",content:"1. gün kurs içeriği"},
{title:"2. gün içeriği",content:"2. gün kurs içeriği"},
{title:"3. gün içeriği",content:"3. gün kurs içeriği"},
]);

let kursService 