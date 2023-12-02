export const loadScript = (src, callback) => {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
};

export const getReviewForCourse = (courses, courseId) => {
  const foundCourse = courses.find((course) => course.id === courseId);

  return foundCourse.review;
};
export const checkReviewed = (courses, courseId) => {
  const foundCourse = courses.find((course) => course.id === courseId);
  return foundCourse.review !== 0;
};

export const getProgress = (courses, courseId) => {
  const foundCourse = courses.find((course) => course.id === courseId);
  return foundCourse.progress;
};
