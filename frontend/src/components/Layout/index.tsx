import { ReactNode, useLayoutEffect, useRef } from 'react'
import parse, { HTMLReactParserOptions } from 'html-react-parser';
import SplitType from 'split-type'
import { gsap } from "gsap";

export interface ILayout {
  children: ReactNode;
  headline: string;
  sub?: string;
  timeline: gsap.core.Timeline
}
export const Layout = ({ children, headline, sub, timeline }: ILayout) => {
  const headlineStyles = `text-clip overflow-hidden antialiased leading-10 sm:leading-[80px] md:leading-[80px] lg:leading-[105px] text-white text-5xl sm:text-8xl md:text-8xl lg:text-9xl font-neue font-bold w-full break-words`
  const subStyles = `antialiased italic tracking-[0.15em] font-thin text-main text-sm sm:text-2xl md:text-2xl lg:text-4xl font-work w-full break-words`
  const options: HTMLReactParserOptions = {
    trim: true,
  };
  const parsedHeadlineContent = parse(headline, options);
  const parsedSubContent = parse(sub || '', options);

  useLayoutEffect(() => {
    const splitHeadline = SplitType.create('h1', { types: 'chars', charClass: 'h1-chars' })
    const splitCover = SplitType.create('h1 span', { types: 'chars', charClass: 'h1-covers' })

    const common = {
      opacity: 0,
      y: 200,
      duration: 0.5,
      stagger: { amount: 0.5 },
      ease: "sine.out",
    }

    const ctx = gsap.context(() => {
      timeline
        .from(splitHeadline.chars, {
          ...common,
          onComplete: () => splitHeadline.revert(),
        }, 'headline')
        .from(splitCover.chars, {
          ...common,
          delay: 1.4,
          onComplete: () => splitCover.revert(),
        }, 'headline2')
    }, splitHeadline); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [])

  return (
    <div className='w-full h-screen px-4 sm:px-8 md:px-10 lg:px-16 relative z-10'>
      <div className={`h-72 sm:h-1/2 md:h-1/2`}>
        <div className={`h-full flex flex-col justify-end items-start w-full relative break-words`}>
          <div className='relative'>
            <h1 className={headlineStyles}>{parsedHeadlineContent}</h1>
          </div>
          {sub !== '' && <h3 className={subStyles}>{parsedSubContent}</h3>}
        </div>
      </div>
      <div className={`w-full ${sub ? 'pt-9' : 'pt-6'}`}>
        {children}
      </div>
    </div>
  )
}
