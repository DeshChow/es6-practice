class Student{
    constructor(sId,sName)
    {
        this.Id = sId;
        this.Name = sName;
        this.Gender = "Male";
    }
}

const student1 = new Student("1","Desh");
const student2 = new Student("2","Shojib");

console.log(student1,student2);