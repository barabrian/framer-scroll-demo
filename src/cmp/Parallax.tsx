import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import { DemoImg } from './DemoImg'
import { Title } from './Title'

export const Parallax = () => {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ['start end', 'end start'],
  })
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress1, [0, 1], ['-15%', '15%'])
  const y2 = useTransform(scrollYProgress2, [0, 1], ['15%', '-15%'])

  return (
    <div className="w-full">
      <Title>Parallax</Title>
      <div className="flex items-center gap-8 w-full">
        <motion.div ref={ref1} style={{ y: y1 }} className="w-1/3">
          <DemoImg id="32" />
        </motion.div>
        <motion.div className="flex flex-col gap-8 w-1/3">
          <DemoImg id="34" short />
          <DemoImg id="35" short />
        </motion.div>
        <motion.div ref={ref2} style={{ y: y2 }} className="w-1/3">
          <DemoImg id="33" />
        </motion.div>
      </div>
    </div>
  )
}
