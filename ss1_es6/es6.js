let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];
// Yêu cầu 1: Sử dụng cú pháp ES6 để xuất ra màn hình 
// danh sách các bài đăng có rating ≥ 4 
const result = courses.filter((object) => {
  return object.rating >= 4;
})

console.log(result);
// Yêu cầu 2: Sử dụng cú pháp ES6 để xuất ra màn hình 
// danh sách các bài đăng có rating < 4 
// với yêu cầu giá trị các phần tử của mảng mới có định dạng:
/* <id> - <title> - <rating>  */
const result2 = courses.filter((object) => {
  return object.rating < 4;
}).map((ob) => {
  return ob.id + ' - ' + ob.title + ' - ' + ob.rating;
});

console.log(result2);

// Yêu cầu 3: Sử dụng cú pháp ES6 đã học viết hàm trả về một mảng mới 
// gộp 2 mảng courses và addedCourses
let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  }
];

const newCourses = [...courses, ...addedCourses];
console.log(newCourses);

