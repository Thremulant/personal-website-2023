import parse, { HTMLReactParserOptions } from 'html-react-parser';
export interface IHeadline { headline: string, sub: string}
export const Headline = ({ headline, sub }: IHeadline) => {
  const options: HTMLReactParserOptions = {
    trim: true,
  };
  const parsedHeadlineContent = parse(headline, options);
  const parsedSubContent = parse(sub, options);
  const headlineStyles = `antialiased leading-10 sm:leading-[80px] md:leading-[80px] lg:leading-[105px] text-white text-5xl sm:text-8xl md:text-8xl lg:text-9xl font-neue font-bold w-full break-words`
  const subStyles = `antialiased italic tracking-[0.15em] font-thin text-main text-sm sm:text-2xl md:text-2xl lg:text-4xl font-work w-full break-words`
  return (
    <div className={`h-full flex flex-col justify-end items-start w-full relative break-words`}>
      <h1 className={headlineStyles}>{parsedHeadlineContent}</h1>
      {sub !== '' && <h3 className={subStyles}>{parsedSubContent}</h3>}

    </div>
  )
}
