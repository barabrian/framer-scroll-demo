import { motion } from 'framer-motion'
import { DemoImg } from './DemoImg'
import { Title } from './Title'

export const BasicReveal = () => (
  <div className="w-full">
    <Title>Basic scroll reveal</Title>
    <motion.div
      initial={{ opacity: 0, y: '15%' }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 45,
          damping: 10,
          mass: 1,
        },
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <DemoImg id="55" landscape />
    </motion.div>
  </div>
)
