import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import AvatarBadge from "@/components/AvatarBadge";
import avatarImage from "@/assets/avatar.png";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="relative flex flex-col items-center">
        {/* Avatar Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 relative"
        >
          {/* Barber Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -45 }}
            animate={{ opacity: 1, x: 0, rotate: -12 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -left-12 md:-left-20 top-1/2 -translate-y-1/2 text-primary/80 z-10"
          >
            <Scissors className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 45 }}
            animate={{ opacity: 1, x: 0, rotate: 12 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -right-12 md:-right-20 top-1/2 -translate-y-1/2 text-primary/80 z-10"
          >
            <Scissors className="w-8 h-8 md:w-12 md:h-12 transform scale-x-[-1]" />
          </motion.div>

          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
          <AvatarBadge
            imageSrc={avatarImage}
            showBadge={false}
            className="w-32 h-32 md:w-40 md:h-40"
            imageClassName="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/50"
          />
        </motion.div>

        {/* Text Animation */}
        <div className="flex flex-col items-center gap-2">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold text-white tracking-wider"
          >
            MJ BARBER
          </motion.h1>

          <motion.span
            initial={{ y: 20, opacity: 0, rotate: -8 }}
            animate={{ y: 0, opacity: 1, rotate: -8 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-2xl md:text-3xl font-script text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary inline-block"
          >
            Chez Junior
          </motion.span>
        </div>

        {/* Loading Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 0.2, duration: 2.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-12 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
