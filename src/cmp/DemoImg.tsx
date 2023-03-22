import Image from 'next/image'
export const DemoImg = ({
  id,
  short,
  landscape,
}: {
  id: string
  short?: boolean
  landscape?: boolean
}) => {
  if (short) {
    return (
      <div className="pt-[96.54255319%] relative">
        <Image
          alt=""
          fill
          src={`https://picsum.photos/id/${id}`}
          loader={({ width, src }) => {
            return `${src}/${width}/${Math.round(0.9654255319 * width)}`
          }}
          sizes="20vw"
          className="rounded-lg"
        />
      </div>
    )
  }
  if (landscape) {
    return (
      <div className="pt-[42.85714286%] relative">
        <Image
          alt=""
          fill
          src={`https://picsum.photos/id/${id}`}
          loader={({ width, src }) => {
            return `${src}/${width}/${Math.round(0.4285714286 * width)}`
          }}
          sizes="95vw"
          className="rounded-lg"
        />
      </div>
    )
  }
  return (
    <div className="pt-[153.45744681%] relative">
      <Image
        alt=""
        fill
        src={`https://picsum.photos/id/${id}`}
        loader={({ width, src }) => {
          return `${src}/${width}/${Math.round(1.5345744681 * width)}`
        }}
        sizes="20vw"
        className="rounded-lg"
      />
    </div>
  )
}
