import React from 'react'
import { Badge } from './ui/badge'

function LatestJobCards({job}) {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer'>
        <div>
        <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
        <h1 className='font-medium text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.discription}</p>
        </div>
        <div>
        <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position}position
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
        </div>
    </div>
  )
}

export default LatestJobCards