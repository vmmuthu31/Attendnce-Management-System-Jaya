import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'; 

export default function Dashboard() {
    const email = useSelector(state => state.auth.email);
    const department = useSelector(state => state.auth.department); 
  
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>JEC-AMS/Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <div className="relative isolate ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto bg-[#009FF8] border-b-white border-b-2 max-w-2xl pt-5">
        <img
            className="mx-auto h-28 my-2 w-auto"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjmL38K-8tCjcNKGjvAGHeVHkyN8t1lo68bXI2oqe2WVp8RVuF9ombU-79T9guiG2Z4FRk18nhzTWz5-ZkPpy993uWl7D59MyfLyfz0I5d4fKH2XuKhSC0h9SqofVdxzM-lplb8s_pCCZk3sUyccrZEL3uWAkliNXGUWWX_uCg6txRFRASiN-24sUvaUT0"
            alt="Workflow"
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
              JEC - AMS
            </h1>
            <div className='bg-white example2 mt-10 px-10 p-12  '>
      <p className='text-3xl font-bold'>Welcome <br/>{email?.slice(0,-10)}</p>
      <p className='text-3xl mt-10 font-bold'>Faculty of <br/> {department}</p>
        </div>
          </div>
          <div>
            <div className='bg-white'>
                <div className='mx-10'>
                <Link href="/GetAttendance">     <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Attendance
              </button>
              </Link>
              <p className='text-center text-2xl py-2 font-semibold'>Or</p>
              <Link href="/AddAttendance">   <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
             Put Attendance
              </button>
              </Link>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
