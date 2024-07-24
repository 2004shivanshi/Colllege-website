import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
export default function RoleSelectionForm() {

    const [role, setRole] = useState('')
    const years = Array.from({length: 36}, (_, index) => 1990 + index);
    console.log(years);
    // for (let year = 1960; year <= 2024; year++) {
    //     document.write('<option value="' + year + '">' + year + '</option>');
    // }
console.log(role)
  return (
 <>
   <header className="h-fit
     w-full flex flex-col md:flex-row md:px-8 items-center justify-center md:items-center md:justify-between p-2 gap-8">
        <img src={logo} alt="Logo" className="w-full max-w-sm"/>
        <button className="w-fit border rounded-md px-4 py-1 flex gap-1 items-center text-xs font-semibold" ><span className="h-6  w-6 bg-slate-400 rounded-full"></span> Logout</button>
    </header>
    <div className=" w-full h-20 bg-[#122254]"></div>
    <div className="-mt-16 flex justify-center items-center w-full px-2 py-8">
        <form className="md:w-[80%] w-full space-y-4  max-w-[800px]  h-fit bg-white shadow-md p-4 md:p-8 border border-[#dddddd]  rounded-[6px] custom-shadow">
            <h2 className="text-base md:text-2xl my-2">Add your role details in - IPS ACADEMY</h2>
            <p className="text-sm my-2"> Fields marked <span className="required"><span className="text-red-600">*</span></span> are necessary</p>
            <div className="bg-[#f1f1f1] p-4 space-y-6  h-full rounded-[8px] px-4 py-8 ">
                <div className="flex gap-6 flex-col md:flex-row mb-4">
                    <div className=" flex flex-col flex-1">
                        <label className='text-xs sm:text-sm text-neutral-700' htmlFor="role">Role <span className="text-red-600">*</span></label>
                        <select onChange={(e)=> setRole(e.target.value) } id="role" name="role" value={role} className="text-xs sm:text-sm py-1 border-b-2 border-[#ccc] transition-all duration-300 focus-visible:border-blue-600 bg-transparent outline-none">
                        <option value="" disabled  hidden>Select your Option</option>
                            <option value="current-student">Current Student</option>
                            <option value="alumni_past_student">Alumni (Past student)</option>
                            <option value="faculty">Faculty</option>
                        </select>
                    </div>
                    {
                        role !== '' && (
                          <div className="flex flex-col flex-1">
                        <label className='text-xs sm:text-sm text-neutral-700' htmlFor="yearOfjoining">Year of Joining <span className="text-red-600">*</span></label>
                        
                            <select id="yearOfjoining" name="yearOfjoining" className="text-xs sm:text-sm py-1 border-b-2 border-[#ccc] transition-all duration-300 focus-visible:border-blue-600 bg-transparent outline-none">
                                <option value="" disabled selected hidden>Enter your Year of Joining</option>
                               {
years.map((year) => <option key={year} value={year}>{year}</option>)
                               }
                            </select>
                       
                    </div>   
                        )
                    }
                    
                   
                    
                </div>
               {
                role !== '' && (
                    <>
                     <div className="flex gap-5 flex-col md:flex-row mb-4">
                    <div className=" flex flex-col flex-1">
                        <label className='text-xs sm:text-sm text-neutral-700' htmlFor="clg_email">Enter your College Email <span className="text-red-600">*</span></label>
                        <input type="text" id="clg_email" name="clg_email" className="text-xs sm:text-sm py-1 border-b-2 border-[#ccc] transition-all duration-300  focus-visible:border-blue-600 bg-transparent outline-none" placeholder="Enter your College Email"/>
                    </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row mb-4">
                    <div className=" flex flex-col flex-1">
                        <label className='text-xs sm:text-sm text-neutral-700' htmlFor="type_of_job">Type of Job <span className="text-red-600">*</span></label>
                        <select id="type_of_job" name="type_of_job" className="text-xs sm:text-sm py-1 border-b-2 border-[#ccc] transition-all duration-300 focus-visible:border-blue-600 bg-transparent outline-none">
                            <option value="" disabled selected hidden>Select your Option</option>
                            <option value="option1">Faculty on Contract</option>
                            <option value="option2">Faculty on Regular</option>
                            
                        </select>
                    </div>
                    
                    
                </div>
                <div className="flex gap-5 flex-col md:flex-row mb-4">
                    <div className=" flex flex-col flex-1">
                        <label className='text-xs sm:text-sm text-neutral-700' htmlFor="section7">Date of Joining <span className="text-red-600">*</span></label>
                        <input type="text" id="section7" name="section7" className="text-xs sm:text-sm py-1 border-b-2 border-[#ccc] transition-all duration-300 focus-visible:border-blue-600 bg-transparent outline-none" placeholder="Date of Joining"/>
                    </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row mb-4">
                    <div className=" flex flex-col flex-1">
                        <label className='text-xs sm:text-sm text-neutral-700' htmlFor="section7">In Which Department (Applicable For Faculty on Regular)</label>
                        <input type="text" id="section7" name="section7" className="text-xs sm:text-sm py-1 border-b-2 border-[#ccc] transition-all duration-300 focus-visible:border-blue-600 bg-transparent outline-none" placeholder="In Which Department (Applicable For Faculty on Regular)"/>
                    </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row mb-4">
                    <div className=" flex flex-col">
                        <label className='text-xs sm:text-sm text-neutral-700' htmlFor="section7">Current Designation (Applicable For Faculty on Regular)</label>
                        <input type="text" id="section7" name="section7" className="text-xs sm:text-sm py-1 border-b-2 border-[#ccc] transition-all duration-300 focus-visible:border-blue-600 bg-transparent outline-none" placeholder="Current Designation (Applicable For Faculty on Regular)"/>
                    </div>
                </div>
                    </>
                )
               }
            </div>
            <NavLink to={'/directory'} type="submit" className="px-6 py-2 bg-blue-600 hover:shadow-xl hover:bg-blue-700 transition-all duration-200 rounded-md text-white w-fit self-end">Join Alumni Network</NavLink>
            <p className="text-xs text-center">By clicking on “Join Alumni Network” button, you agree to our <a className="text-blue-600 font-semibold" href="#">privacy policy</a> & <a className="text-blue-600 font-semibold"  href="#">terms & conditions</a>.</p>
        </form>
    </div>
    </>
  )
}
