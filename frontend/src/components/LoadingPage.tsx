import { useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";

export const LoadingPage = ({ timeline }: { timeline: gsap.core.Timeline }) => {
  const topBlackBox = useRef(null)
  const botBlackBox = useRef(null)
  const topMainBox = useRef(null)
  const botMainBox = useRef(null)


  useLayoutEffect(() => {
    const blackAnimation = { display: 'none', duration: 0.8, delay: 1, ease: "none" }
    const mainAnimation = { display: 'none', duration: 0.7, delay: 1.1, ease: "none" }
    const ctx = gsap.context(() => {
      timeline
        .to(topBlackBox.current, { height: 0, ...blackAnimation }, 'start')
        .to(botBlackBox.current, { scaleY: 0, ...blackAnimation }, 'start')
        .to(topMainBox.current, { height: 0, ...mainAnimation }, 'start')
        .to(botMainBox.current, { scaleY: 0, ...mainAnimation }, 'start');

    }, [topBlackBox, botBlackBox, topMainBox, botMainBox ]); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [])

  return (
    <>
      <div ref={topBlackBox} className="w-full h-1/2 bg-black absolute top-0 left-0 z-50" />
      <div ref={botBlackBox} className="w-full h-1/2 bg-black absolute top-1/2 left-0 z-50 origin-bottom" />
      {/* <div className='z-40'> */}
      <div ref={topMainBox} className="w-full h-1/2 bg-main absolute top-0 left-0 z-40" />
      <div ref={botMainBox} className="w-full h-1/2 bg-main absolute top-1/2 left-0 z-40 origin-bottom" />
      {/* </div> */}
    </>
  )
}
