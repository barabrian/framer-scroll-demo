import { FadeInView } from './FadeInView'

export const Title = ({
  children,
  big,
}: {
  children: string
  big?: boolean
}) => (
  <FadeInView>
    <h2
      className={`capitalize text-center text-7xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent mb-16 pb-2 ${
        big ? 'text-9xl' : 'text-7xl'
      }`}
    >
      {children}
    </h2>
  </FadeInView>
)
