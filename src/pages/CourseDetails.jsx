import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import Rating from "react-rating";
import { FaCalendar, FaCircle, FaGlobe, FaStar } from "react-icons/fa";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  useEffect(() => {
    const getCourse = async () => {
      try {
        const courseRef = doc(db, "courses", courseId);
        const courseSnapshot = await getDoc(courseRef);
        if (courseSnapshot.exists()) {
          const courseData = courseSnapshot.data();
          setCourse(courseData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCourse();
  }, [courseId]);

  return (
    <div className="w-[100%] ">
      <section
        className={`w-[100%] bg-[#454655] min-h-[40vh] max-h-[70vh] text-white`}
      >
        <div className="w-[80%] m-auto flex justify-between items-end h-[100%] ">
          <div className="flex flex-col gap-[10px] pb-12 w-[70%]">
            <h1 className="text-[48px] font-semibold leading-normal ">
              {course?.name}
            </h1>
            <p className="text-neutral-200 font-light  text-[24px]">
              {course?.description}
            </p>
            <p className="text-neutral-200 font-medium  text-[18px] flex items-center gap-2">
              <FaCalendar /> Duration {course?.duration}
            </p>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-[1px]">
                <Rating
                  initialRating={course?.review}
                  fractions={2}
                  fullSymbol={<FaStar color="gold" />}
                  emptySymbol={<FaStar color="grey" />}
                  readonly
                />
                <p className="pb-[4px]">
                  {`(${course?.reviewCount})`}{" "}
                  <span className="text-neutral-200 text-sm">Reviews</span>
                </p>
              </div>
              <div className="">
                <p className="font-bold">{course?.students?.length} Students</p>
              </div>
            </div>
            <div>
              <p>
                Taught By{" "}
                <span className=" font-semibold underline">
                  {course?.instructor}
                </span>
              </p>
            </div>
            <div className=" flex items-center justify-between">
              <p className="flex items-center gap-[4px] pt-2">
                <FaGlobe /> English
              </p>
              {course?.enrollmentStatus === "Open" && (
                <p className="text-[15px] text-neutral-200 flex gap-[4px] items-center px-6">
                  <span className="pr-2">Enrollments</span>
                  <FaCircle color="#54ff54" className="w-2 h-2" /> Open
                </p>
              )}
              {course?.enrollmentStatus === "Closed" && (
                <p className="text-[15px] text-neutral-200 flex gap-[4px] items-center px-6">
                  <span className="pr-2">Enrollments</span>{" "}
                  <FaCircle color="red" className="w-2 h-2" /> Closed
                </p>
              )}
              {course?.enrollmentStatus === "Progress" && (
                <p className="text-[15px] text-neutral-200 flex gap-[4px] items-center px-6">
                  <span className="pr-2">Enrollments</span>
                  <FaCircle color="orange" className="w-2 h-2" /> In Progress
                </p>
              )}
            </div>
          </div>
          <div className=" w-[24rem] h-[30rem] flex justify-start items-end">
            <img
              src={course?.thumbnail}
              alt="course-thumbnail"
              className="object-cover h-[18rem] rounded-t-[1.5rem] "
            />
          </div>
        </div>
      </section>
      <section className="w-[80%] m-auto flex justify-between ">
        <div className="pt-4 ">
          <div className="flex flex-col gap-2 py-8">
            <h1 className="text-[28px] text-neutral-800 font-semibold">
              Course Pre-requisites
            </h1>
            <ul className=" list-disc pl-6">
              {course.prerequisites?.map((item) => {
                return <li className="p-2">{item}</li>;
              })}
            </ul>
          </div>

          <h1 className="text-[36px] text-neutral-800 font-semibold">
            Course Content
          </h1>
        </div>
        <div className="w-[24rem] flex flex-col justify-center gap-[12px] p-2">
          <h1 className="text-[32px] text-neutral-900 font-medium">
            {course.name}
          </h1>
          <p className="text-[24px] text-neutral-900 font-medium">
            Rs. {course.price}/-
          </p>
          <button className="mt-2 bg-neutral-800 text-[24px] font-medium rounded-[5rem] text-white border-none p-[10px] hover:bg-opacity-75">
            Enroll Now
          </button>
          <button className="mt-2 border-[1px] border-neutral-800 text-[24px] font-medium rounded-[5rem] text-neutral-800 p-[10px] hover:bg-neutral-200">
            Add To Cart
          </button>
          <p className="text-sm text-lightgray text-center">
            30 Days Money Back Guarantee
          </p>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
