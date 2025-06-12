import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-blue-500/10 dark:border-blue-800/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm text-muted-foreground text-center md:text-left"
            whileHover={{ scale: 1.01 }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </motion.p>

        </motion.div>
      </div>
    </footer>
  );
}
