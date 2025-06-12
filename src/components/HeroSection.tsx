import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin, File, FileText, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left order-1 md:order-1">
            <motion.h1
              className="text-4xl font-bold mb-2 text-blue-500"
              variants={childVariants}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-2"
              variants={childVariants}
            >
              I am an iOS Engineer building dreams, one app at a time.
            </motion.p>

            <motion.p
              className="text-sml text-muted-foreground mb-6"
              variants={childVariants}
            >
              Welcome to my brag page
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                 {personalInfo.location}
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Mail className="h-4 w-4 mr-2" />
                 {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="h-4 w-4 mr-2" />
                 GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <TwitterIcon className="h-4 w-4 mr-2" />
                 Twitter / X
              </motion.a>

              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <FileText className="h-4 w-4 mr-2" />
                 Resume
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center order-2 md:order-2"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/profile.png" target="_blank" rel="noopener noreferrer" className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile.png"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-blue-500/50 dark:ring-blue-500/50"
                style={{ objectFit: "cover" }}
              />
            </a>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-700/10 dark:from-blue-500/10 dark:to-blue-700/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-blue-500/20 dark:border-blue-500/20 shadow-sm">
            <p className="text-muted-foreground pl-4 py-2 mb-4 relative">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-500 dark:to-blue-700 rounded-full"></span>
              I am a software developer specializing in iOS mobile development.
              I have a passion for the intersection of technology and accessibility.
              I believe there is a lot of room in technology for more universal design. 
              I am currently working full time remote as a Technical Quality Assurance Supervisor for Uni Industries.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
