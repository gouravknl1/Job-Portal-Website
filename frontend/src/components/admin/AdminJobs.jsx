import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setsearchCompanyByText } from '@/redux/companySlice'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'

function AdminJobs() {
  useGetAllAdminJobs();
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [input,setInput]=useState("")
    useEffect(()=>{
        dispatch(setsearchCompanyByText(input))
    },[input])
  return (
    <div>
    <Navbar />
    <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
            <Input
                className="w-fit"
                placeholder="Filter by name"
                 onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={() => navigate("/admin/job/create")}>New Job</Button>
        </div>
        <AdminJobsTable/>
    </div>
</div>
  )
}

export default AdminJobs