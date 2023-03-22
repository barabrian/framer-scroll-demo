import { motion } from 'framer-motion'

export const FadeInView = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: '25%' }}
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
    viewport={{ once: true, amount: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
)
