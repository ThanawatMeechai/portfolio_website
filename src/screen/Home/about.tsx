import React from "react";
import { motion } from "framer-motion";

type Props = {
  name: string | null;
};

const About: React.FC<Props> = ({ name }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      
      style={{ marginTop: "500px" }}
    >
      <p>{name}</p>
      
    </motion.div>
  );
};

export default About;
