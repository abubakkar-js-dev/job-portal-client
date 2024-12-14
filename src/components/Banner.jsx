import { motion } from "framer-motion";
import team1 from '../assets/images/team1.webp';
import team2 from '../assets/images/team2.webp';
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row-reverse justify-between">
        <div>
        <motion.img
          src={team1}
          className="rounded-t-[30px] rounded-br-[30px] border-l-8 border-b-8 border-blue-400  shadow-2xl w-64"
          animate={{y: [50,100,50]}}
          transition={{duration: 10, repeat: Infinity}}
          
        />
        <motion.img
          src={team2}
          className="rounded-t-[30px] rounded-br-[30px] border-l-8 border-b-8 border-blue-400  shadow-2xl w-64"
          animate={{x: [100,150,100]}}
          transition={{duration: 10, delay: 5, repeat: Infinity}}
          
        />
        </div>
        <div className="overflow-hidden">
          <motion.h2  animate={{ x: 20, transition: {duration: 2}}} className="text-5xl font-bold">
            Latest <motion.span
            animate={{color: ['#ecff33','#33ffe3','#ff6133']}}
            transition={{duration: 1.5, repeat: Infinity}}
            >jobs</motion.span> for you!
          </motion.h2>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
