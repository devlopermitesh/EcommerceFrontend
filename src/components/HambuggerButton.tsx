import { motion } from 'framer-motion';
interface Hamburgerprops{
toggleMenu:()=>void;
isMobileMenuopen:boolean
}
const Hamburger :React.FC<Hamburgerprops>= ({ toggleMenu, isMobileMenuopen }) => {
  return (
 <div
      className="relative w-13 h-13 flex items-center justify-center cursor-pointer select-none lg:hidden"
      onClick={toggleMenu}
    >
      {/* Top Line */}
      <motion.span
        className="absolute bg-gray-800 rounded-full"
        style={{ width: '32px', height: '4px' }}
        initial={{ rotate: 0, y: -8 }}
        animate={{
          rotate: isMobileMenuopen ? 45 : 0,
          y: isMobileMenuopen ? 8 : -8,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      ></motion.span>

      {/* Middle Line */}
      <motion.span
        className="absolute bg-gray-800 rounded-full"
        style={{ width: '38px', height: '4px' }}
        initial={{ opacity: 1 }}
        animate={{
          opacity: isMobileMenuopen ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      ></motion.span>

      {/* Bottom Line */}
      <motion.span
        className="absolute bg-gray-800 rounded-full"
        style={{ width: '30px', height: '4px' }}
        initial={{ rotate: 0, y: 8 }}
        animate={{
          rotate: isMobileMenuopen ? -45 : 0,
          y: isMobileMenuopen ? -8 : 8,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      ></motion.span>

      {/* Hover Interaction Overlay */}
      <motion.div
        className="absolute w-full h-full bg-transparent rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuopen ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1, opacity: 0.3 }}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
};

export default Hamburger;
