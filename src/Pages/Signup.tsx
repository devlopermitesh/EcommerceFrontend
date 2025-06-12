import SignupForm from "@/components/SignupForm";
import Signupslide from "@/assets/SignInside.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Signup = () => {
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
    <div className="flex flex-row w-full h-full bg-white my-10 px-20 md:px-0 ">
      {/* Image Animation */}
      <div className="md:flex flex-1 hidden relative">
        <motion.img
          src={Signupslide}
          alt="Signup"
          initial={{ x: -300, rotate: 0 }} // Slide in from the left
          animate={controls}
          className="h-3/4 w-1/2  object-contain absolute bottom-0 right-0"
        />
      </div>

      {/* Signup Form */}
      <div className="flex-1">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
