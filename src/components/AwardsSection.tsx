import React from "react";
import { accolades } from "@/lib/data";
import { Mic } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function AccoladesSection() {
  return (
    <section
      id="accolades"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-8">Accolades</h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {accolades.map((accolade, index) => (
            <MotionWrapper key={accolade.name + accolade.date} delay={index * 0.1}>
              <GlassCard className="p-4 dark:border-gray-500/10 hover:border-gray-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-1.5 mr-2"
                  >
                    <Mic className="h-4 w-4 text-white" />
                  </motion.div>
                  <h3 className="font-medium">{accolade.name}</h3>
                </div>
                <div className="text-sm text-muted-foreground">{accolade.issuer}</div>
                <div className="flex flex-col space-y-2 mt-auto">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">{accolade.date}</div>
                    <motion.span
                      className="text-xs px-2 py-1 bg-gray-500/10 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {accolade.position}
                    </motion.span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {accolade.type === "International" ? "International" : "National"}
                  </div>
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
