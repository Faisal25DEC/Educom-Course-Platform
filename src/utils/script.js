export const loadScript = (src, callback) => {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
};

export const getReviewForCourse = (courses, courseId) => {
  const foundCourse = courses.find((course) => course.id === courseId);

  return foundCourse.review; // Return the review if the course is found
};
export const checkReviewed = (courses, courseId) => {
  const foundCourse = courses.find((course) => course.id === courseId);
  return foundCourse.review !== 0;
};
