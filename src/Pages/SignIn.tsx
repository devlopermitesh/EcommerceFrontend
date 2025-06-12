import Signupslide from "@/assets/Signupside.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import SignInForm from "@/components/SignInForm";

const SignIn = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0,
      rotate: 10,
      transition: {
        type: "spring",
        duration: 2,
        bounce: 0.3,
      },
    });
  }, [controls]);

  return (
    <div className="flex flex-row w-full h-full bg-white my-10 px-20 md:px-0">
           {/* Form on the right */}
      <div className="flex-1  z-50">
        <SignInForm />
      </div>
      {/* Image Animation: slide in from right to left */}
      <div className="md:flex flex-1 hidden relative">
        <motion.img
          src={Signupslide}
          alt="Signup"
          initial={{ x: 300, rotate: 0 }} // Start off-screen right
          animate={controls}
          className="h-full w-1/2 object-contain absolute bottom-0 left-0  z-10" // position left now
        />
      </div>

   
    </div>
  );
};

export default SignIn;
