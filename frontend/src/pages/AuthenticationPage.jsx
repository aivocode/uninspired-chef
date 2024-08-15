// import { useState } from 'react';
// import { Header } from "../components/Header/Header";
// import '../static/AuthenticationPage.css'; // Assuming you have this CSS file

// export const AuthenticationPage = () => {
//   const [isLogin, setIsLogin] = useState(false);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="auth-container">      //added
//       <Header className="auth-header" />   //added

//       <div className={`auth-form ${isLogin ? 'login' : 'signup'}`}>
//         <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

//         {!isLogin && (
//           <input type="text" placeholder="Name" className="auth-input" />
//         )}
//         <input type="email" placeholder="Email" className="auth-input" />
//         <input type="password" placeholder="Password" className="auth-input" />

//         <button className="auth-button">
//           {isLogin ? 'Login' : 'Sign Up'}
//         </button>

//         <p onClick={toggleForm} className="auth-toggle">
//           {isLogin ? "Don't have an account? Sign Up!" : "Already have an account? Login!"}
//         </p>
//       </div>
//     </div>
//   );
// };
