import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";



const HotJobs = () => {
    const [jobs,setJobs] = useState([]);
    console.log(jobs);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=> res.json())
        .then(data=> setJobs(data));
    },[])
    return (
        <div className="container mx-auto mt-24">
            <h2 className="text-3xl  md:text-4xl text-center mb-12">Available Jobs</h2>
            <div className="flex flex-col gap-4">
                {jobs.map(job=> <HotJobCard key={jobs._id} job={job} />)}
            </div>
        </div>
    );
};

export default HotJobs;