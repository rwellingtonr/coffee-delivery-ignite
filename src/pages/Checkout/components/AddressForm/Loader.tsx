import { Skeleton } from "~/components/Skeleton"

export function Loader() {
  return <>
    <Skeleton h='2.65rem' w='100%'
    />
    <div className="additional-address">
      <Skeleton h='2.65rem' w='100%' />
      <Skeleton h='2.65rem' w='100%' />
    </div>
    <div className="city-address">
      <Skeleton h='2.65rem' w='100%' />
      <Skeleton h='2.65rem' w='100%' />
      <Skeleton h='2.65rem' w='100%' />
    </div>
  </>
}