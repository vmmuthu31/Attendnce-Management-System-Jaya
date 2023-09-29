import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddAttendace() {
    const router = useRouter();
  const [formData, setFormData] = useState({
    date: "",
    class: "I",
    total: "",
    present: "",
    year: "1",
    absent:"",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Signup Successfull Please Login!")
    
    
    } else {
      console.error("Sign-in failed");
      toast.error("Signup Failed!")
    }
  };
  return (
    <div>
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-16 w-auto"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjmL38K-8tCjcNKGjvAGHeVHkyN8t1lo68bXI2oqe2WVp8RVuF9ombU-79T9guiG2Z4FRk18nhzTWz5-ZkPpy993uWl7D59MyfLyfz0I5d4fKH2XuKhSC0h9SqofVdxzM-lplb8s_pCCZk3sUyccrZEL3uWAkliNXGUWWX_uCg6txRFRASiN-24sUvaUT0"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up here!</h2>
         
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-400 mx-8 rounded-md py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
    <label htmlFor="year" className="block text-sm font-medium text-black">
        Year
    </label>
    <div className="mt-1">
    <select
    id="year"
    name="year"
    autoComplete="year"
    required
    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    value={formData.year}
    onChange={handleInputChange}
>
    <option value="" disabled>Select Year</option> {/* Add this line */}
    <option value="faculty">I</option>
    <option value="head">II</option>
    <option value="head">III</option>
    <option value="head">IV</option>
</select>
    </div>
</div>

{/* Conditionally render secret code input based on role */}
{formData.role === 'head' && (
    <div className="mt-4">
        <label htmlFor="secretCode" className="block text-sm font-medium text-black">
            Secret Pin
        </label>
        <div className="mt-1">
            <input
                id="secretCode"
                name="secretCode"
                type="text"
                autoComplete="off"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.secretCode || ''}
                onChange={handleInputChange}
            />
        </div>
    </div>
)}
            <div>
              <label htmlFor="class" className="block text-sm font-medium text-black">
              Total
              </label>
              <div className="mt-1">
                <input
                  id="total"
                  name="total"
                  type="number"
                  autoComplete="total"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.total}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-black">
                Department
              </label>
              <div className="mt-1">
                <input
                  id="department"
                  name="department"
                  type="text"
                  autoComplete="department"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.department}
                  onChange={handleInputChange}
                />
              </div>
            </div>
           


            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
           <Link href="/Login"> <p className="flex justify-end pt-5 text-blue-800 font-semibold">Existing User?</p></Link>
          </form>
          <ToastContainer />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAttendace