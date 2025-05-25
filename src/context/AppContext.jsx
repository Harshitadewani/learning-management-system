import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'

export const AppContext=createContext()

export const AppContextProvider=(props)=>{

  
    
    const currency=import.meta.env.VITE_CURRENCY
    const navigate=useNavigate()

    const [allCourses,setAllCourses]=useState([])
    const [isEducator,setIsEducator]=useState(true)
    
    //Fetch all courses

    const fetchAllCourses=async()=>{
        setAllCourses(dummyCourses)
    }

    //Functions to calculate average rating of course

    const calculateRating=(course)=>{
        if(course.courseRatings.length===0){
            return 0;
        }

        let totalRating=0
        course.courseRatings.forEach(rating=>{
            totalRating+=rating.rating
        })
        return totalRating/ course.courseRatings.length
    }

    // function to caluclate course chapter time

    const calculateChapterTime=(chapter)=>{
        let time=0;
        chapter.chapterContent.map((lecture)=>time+=lectureDuration)
        return humanizeDuration(time*60 *1000,{units:["h","m"]})
    }

    //function to calculate course duration

    const caluclateCourseDuration=(course)=>{
     let time=0;

     course.courseContent.map((chapter)=>chapter.chapterContent.map(
        (lecture)=>time +=lecture.lectureDuration
     ))
      return humanizeDuration(time*60 *1000,{units:["h","m"]})
    }
    
    //function  calculate to no of lectures in the course

    const calculateNoOfLectures=(course)=>{
           let totallectures=0;
           course.courseContent.forEach(chapter=>{
            if(Array.isArray(chapter.chapterContent)){
                totallectures+=chapter.chapterContent.length;
            }
           })
           return totallectures;
    }


    useEffect(()=>{
        fetchAllCourses()
    },[])
 
    const value={
        currency,allCourses,navigate,calculateRating,isEducator,setIsEducator,calculateNoOfLectures,calculateChapterTime,caluclateCourseDuration
 }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}