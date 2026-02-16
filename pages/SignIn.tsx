
import React from 'react';

interface SignInProps {
  onHomeClick: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onHomeClick }) => {
  const LogoBox = () => (
    <div className="border-[2px] border-black p-1.5 inline-block bg-transparent cursor-pointer hover:opacity-70 transition-opacity active:scale-95">
      <h2 className="font-condensed font-black text-lg md:text-xl leading-none text-center tracking-tighter text-black uppercase">
        UNITED<br/>STRANGERS
      </h2>
    </div>
  );

  const FooterLogoBox = () => (
    <div className="border-[2px] border-white p-1 inline-block bg-transparent cursor-pointer hover:opacity-70 transition-opacity">
      <h2 className="font-condensed font-black text-base md:text-lg leading-none text-center tracking-tighter text-white uppercase">
        UNITED<br/>STRANGERS
      </h2>
    </div>
  );

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Section: Form */}
        <div className="flex-1 px-6 md:px-24 py-12 md:py-20 flex flex-col items-center lg:items-start">
          <div className="mb-16 md:mb-24" onClick={onHomeClick}>
            <LogoBox />
          </div>

          <div className="max-w-md w-full space-y-10">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-display text-primary mb-4 leading-tight tracking-tight uppercase">
                Login to become a member
              </h1>
              <p className="text-[15px] md:text-lg text-gray-500 font-sans font-light">
                You're moments away from becoming a member.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-[15px] shadow-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-white border border-gray-200 py-4 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-[15px] shadow-sm" 
                />
              </div>

              <div className="text-left">
                <a href="#" className="text-[13px] text-primary underline font-bold uppercase tracking-wider hover:opacity-60 transition-opacity">Forgot password?</a>
              </div>

              <button type="button" className="w-full bg-primary text-white py-5 rounded-full font-condensed font-black uppercase tracking-widest text-[14px] hover:bg-zinc-800 transition-all shadow-xl active:scale-[0.98]">
                Sign In
              </button>
            </form>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">OR</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-[#1877F2] text-white py-4 px-8 rounded-sm flex items-center justify-center gap-4 hover:opacity-90 transition-opacity shadow-sm">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-5 h-5 invert" alt="FB" />
                <span className="text-[14px] font-bold">Continue with Facebook</span>
              </button>
              <button className="w-full bg-white border border-gray-200 text-primary py-4 px-8 rounded-sm flex items-center justify-center gap-4 hover:bg-gray-50 transition-colors shadow-sm">
                <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                <span className="text-[14px] font-bold">Continue with Google</span>
              </button>
            </div>
            
            <div className="text-center pt-6">
              <p className="text-[13px] text-gray-500">
                Don't have an account? <span className="text-primary font-bold underline cursor-pointer">Sign up</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Image (Hidden on Mobile) */}
        <div className="hidden lg:block flex-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2000&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Sign In Lifestyle" 
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>

      {/* Login Page Footer */}
      <footer className="bg-[#111111] text-white py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-10">
          <div onClick={onHomeClick}>
            <FooterLogoBox />
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <p className="text-[10px] text-gray-600 font-medium tracking-widest">© 2026 UNITED STRANGERS. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
