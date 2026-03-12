/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { getDoctors } from "@/app/(commonLayout)/consultation/_actions"
import { useQuery } from "@tanstack/react-query"

const DoctorsList = () => {
    const { data } = useQuery({
        queryKey: ["doctors"],
        queryFn: () => getDoctors()
    })
    console.log(data);
    return (
    <div>{data.data.map((doctor:any)=>(
        <div key={doctor.id}>
            <h2>{doctor.name}</h2>
            <p>{}</p>
        </div>
    ))}</div>
  )
}

export default DoctorsList
