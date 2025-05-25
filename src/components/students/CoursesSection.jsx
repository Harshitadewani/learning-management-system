import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext)

  return (
    <div className='md:px-40 px-8 py-8'> {/* ✅ `py-16` -> `py-8` kiya taake heading upar aaye */}
      <h2 className='text-3xl font-medium text-gray-800 mb-2'>Learn from the best</h2> {/* ✅ `mb-2` diya spacing adjust karne ke liye */}

      <p className='text-sm md:text-base text-gray-500 mt-2'> {/* ✅ ClassName properly diya */}
        Discover our top-rated courses across various categories. From coding and design to <br />
        business and wellness, our courses are crafted to deliver results.
      </p>

      <div className='grid grid-cols-auto px-4 md:px-0 md:my-12 my-8 gap-4'> {/* ✅ `my-16` -> `my-12` taake spacing thodi kam ho */}
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link 
        to={'/course-list'} 
        onClick={() => scrollTo(0, 0)} 
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>
        Show all courses
      </Link>
    </div>
  )
}

export default CoursesSection
