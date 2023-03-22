import { motion } from 'framer-motion'
import { DemoImg } from './DemoImg'
import { Title } from './Title'

const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: '15%' },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 45,
      damping: 10,
      mass: 1,
    },
  },
}

export const StaggerReveal = () => (
  <div className="w-full">
    <Title>Stagger reveal</Title>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="flex gap-10"
    >
      <motion.div variants={item} className="w-1/4">
        <DemoImg id="45" />
      </motion.div>
      <motion.div variants={item} className="w-1/4">
        <DemoImg id="49" />
      </motion.div>
      <motion.div variants={item} className="w-1/4">
        <DemoImg id="50" />
      </motion.div>
      <motion.div variants={item} className="w-1/4">
        <DemoImg id="55" />
      </motion.div>
    </motion.div>
  </div>
)
