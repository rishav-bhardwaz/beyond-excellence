import React from 'react';
import { Link } from 'react-router-dom';
import courseitems from './coursedetail.json';

const CourseCard = () => {
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 p-0">
      <div className="h-auto">
        <div className="max-w-full mx-auto flex flex-wrap justify-center">
          {courseitems.map((course, index) => (
            <div key={index} className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden m-4">
              <Link  to={`/course-details-${course.index}`} className="block focus:outline-none focus-visible:ring-2">
                <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={course.image} width="320" height="180" alt="Course" />
                </figure>
              </Link>
              <div className="flex-grow flex flex-col p-5">
                <div className="flex-grow">
                  <header className="mb-3">
                    <Link  to={`/course-details-${course.index}`} className="block focus:outline-none focus-visible:ring-2">
                      <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">{course.title}</h3>
                    </Link>
                  </header>
                  <div className="mb-8">
                    <p>{course.description}</p>
                  </div>
                </div>
                <div className="flex justify-between space-x-2">
                  <a className="font-medium text-[24px] inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-black hover:underline focus:outline-none focus-visible:ring-2" href="#0">&#8377;{course.price}</a>
                  <Link to={`/course-details-${course.index}`} className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-theme-200 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white">Buy Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
