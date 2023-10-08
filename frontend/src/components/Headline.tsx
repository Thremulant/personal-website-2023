import parse, { HTMLReactParserOptions } from 'html-react-parser';
export interface IHeadline { headline: string, sub: string}
export const Headline = ({ headline, sub }: IHeadline) => {
  const options: HTMLReactParserOptions = {
    trim: true,
  };
  const parsedHeadlineContent = parse(headline, options);
  const parsedSubContent = parse(sub, options);
  const headlineStyles = `text-white text-4xl sm:text-8xl md:text-8xl lg:text-9xl font-neue font-bold w-full absolute top-1/3`
  const subStyles = `text-main text-4xl sm:text-8xl md:text-8xl lg:text-9xl font-neue font-bold w-full absolute top-1/3`
  return (
    <div className='h-screen w-full relative'>
      <h1 className={headlineStyles}>{parsedHeadlineContent}</h1>
      {sub !== '' && <h3 className={subStyles}>{parsedSubContent}</h3>}
    </div>
  )
}
