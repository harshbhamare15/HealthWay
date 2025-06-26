// import React from "react";
// import LeftSidebar from "./LeftSidebar";
// import Navbar from "./Navbar";

// function SignIn() {
//   return (
//     <div className="flex">
//       <Navbar/>
//       <LeftSidebar />

//       <div className="flex-grow flex items-center justify-center min-h-screen bg-gray-50">
//         <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
//           <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Email Address
//           </label>
//           <input
//             type="email"
//             className="w-full mb-4 p-2 border rounded"
//             placeholder="Enter your email"
//           />

//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             className="w-full mb-4 p-2 border rounded"
//             placeholder="Enter your password"
//           />

//           <div className="flex items-center justify-between mb-4">
//             <label className="flex items-center text-sm">
//               <input type="checkbox" className="mr-2" />
//               Remember me
//             </label>
//             <a href="#" className="text-sm text-blue-600 hover:underline">
//               Forgot password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 cursor-pointer"
//           >
//             Sign In
//           </button>

//           <p className="text-center text-sm text-gray-600 mt-4">
//             Don’t have an account?{" "}
//             <a href="/register" className="text-blue-600 hover:underline">
//               Register here
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignIn;




import React from "react";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar";

function SignIn() {
  return (
    <div className="flex">
      <Navbar/>
      <LeftSidebar />

      <div className="flex-grow flex items-center justify-center min-h-screen bg-gray-50">
        <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="w-full mb-4 p-2 border rounded"
            placeholder="Enter your email"
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full mb-4 p-2 border rounded"
            placeholder="Enter your password"
          />

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 cursor-pointer"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
