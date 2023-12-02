import React from "react";
import { FaCircle, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link>
      <div className="flex flex-col gap-2 min-h-[17rem]">
        <div>
          <img
            src={course.thumbnail}
            alt="course-thumbnail"
            className="w-[100%] object-cover h-[12rem]"
          />
        </div>
        <div className="flex flex-col gap-[0.75rem]">
          <h3 className="text-[20px] font-bold ">{course.name}</h3>
          <div className="flex justify-between items-center">
            <p className="text-neutral-500 font-medium">{course.instructor}</p>
            {course.enrollmentStatus === "Open" && (
              <p className="text-[15px] text-neutral-500 flex gap-[4px] items-center px-6">
                <FaCircle color="#54ff54" className="w-2 h-2" /> Open
              </p>
            )}
          </div>

          <div className="flex items-center ">
            <Rating
              initialRating={course.review}
              fractions={2}
              fullSymbol={<FaStar color="gold" />}
              emptySymbol={<FaStar color="grey" />}
              readonly
            />
            <p>{`(${course.reviewCount})`}</p>
          </div>
          <p className="font-semibold">Rs. {course.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
