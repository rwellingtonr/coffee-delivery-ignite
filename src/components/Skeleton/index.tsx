import { SkeletonContainer } from "./styles"

type SkeletonProps = {
  h: string
  w: string
}

export function Skeleton({ h, w }: SkeletonProps) {
  return <SkeletonContainer $height={h} $width={w} />
}