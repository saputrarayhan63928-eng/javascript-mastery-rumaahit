export function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject("User ID tidak boleh kosong");
      } else {
        resolve({
          id,
          name: "User-" + id,
          role: "student"
        });
      }
    }, 1000);
  });
}
export function fetchUserCourses(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { courseId: 101, title: "JavaScript Dasar", userId },
        { courseId: 102, title: "HTML & CSS", userId },
        { courseId: 103, title: "Async Programming", userId }
      ]);
    }, 1000);
  });
}