import { useScroll, useTransform, motion } from 'framer-motion'

export const Progress = () => {
  const { scrollYProgress } = useScroll()

  const scaleX = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#FF6347', '#663399']
  )

  return (
    <motion.div
      style={{ scaleX, backgroundColor }}
      className="z-50 fixed h-5 w-full top-0 left-0 origin-left"
    />
  )
}
