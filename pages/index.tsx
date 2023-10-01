import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[#009FF8] min-h-screen">
      <Head>
        <title>AMS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      {/* <div className="flex px-5 py-4 bg-black space-x-4">
      <Link href="/" className="flex  bg-black space-x-4">
      <img
            className=" h-8 w-auto"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjmL38K-8tCjcNKGjvAGHeVHkyN8t1lo68bXI2oqe2WVp8RVuF9ombU-79T9guiG2Z4FRk18nhzTWz5-ZkPpy993uWl7D59MyfLyfz0I5d4fKH2XuKhSC0h9SqofVdxzM-lplb8s_pCCZk3sUyccrZEL3uWAkliNXGUWWX_uCg6txRFRASiN-24sUvaUT0"
            alt="Workflow"
          />
        <p className="font-semibold text-white text-xl"> JEC-AMS</p>
        </Link>
      </div> */}
   
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
        <div className="mx-auto bg-white max-w-2xl pt-5">
        <img
            className="mx-auto h-28 my-2 w-auto"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjmL38K-8tCjcNKGjvAGHeVHkyN8t1lo68bXI2oqe2WVp8RVuF9ombU-79T9guiG2Z4FRk18nhzTWz5-ZkPpy993uWl7D59MyfLyfz0I5d4fKH2XuKhSC0h9SqofVdxzM-lplb8s_pCCZk3sUyccrZEL3uWAkliNXGUWWX_uCg6txRFRASiN-24sUvaUT0"
            alt="Workflow"
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              JEC - AMS
            </h1>
            <div className='bg-[#009FF8] example2 mt-10 px-10 p-12  '>
            <p className="mt-1 pt-3  text-lg text-gray-300">
            A seamless platform for faculties to record and manage student attendance. With JEC-AMS, tracking daily attendance and generating reports becomes effortless. Whether you're a faculty member uploading daily records or a department head overseeing attendance metrics, our system is designed to provide a streamlined experience, ensuring accuracy and efficiency.


            </p>

            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Link
                href="/Login"
                className="rounded-2xl bg-[#4F14FF] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </Link>
              <Link href="/Register" className="rounded-2xl bg-[#DC2626] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                Register
              </Link>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
