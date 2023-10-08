import { ReactElement } from 'react'
import { Headline } from './Headline';

export interface ILayout {
  children: ReactElement;
  headline?: string;
  sub?: string;
}
export const Layout = ({ children, headline, sub }: ILayout) => {
  return (
    <div className='w-full px-4 sm:px-8 md:px-10 lg:px-16 relative'>
      {headline && <Headline headline={headline} sub={sub || ''} />}
      <div className='w-full absolute -top-1/3'>
        {children}
      </div>
    </div>
  )
}
