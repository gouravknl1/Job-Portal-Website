import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCourse from './CategoryCourse'
import LatestJobs from './Latestjobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  useGetAllJobs()
  const {user}=useSelector(store=>store.auth)
 const navigate=useNavigate()
 useEffect(() => {
  if (user?.role === 'recruiter') {
    navigate("/admin/companies");
  }
}, []);
  return (
    <div>
        <Navbar/>
        <HeroSection></HeroSection>
        <CategoryCourse></CategoryCourse>
        <LatestJobs></LatestJobs>
        <Footer></Footer>
    </div>
  )
}

export default Home