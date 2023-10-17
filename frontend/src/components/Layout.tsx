import { ReactNode } from 'react'
import { Headline } from './Headline';

export interface ILayout {
  children: ReactNode;
  headline?: string;
  sub?: string;
}
export const Layout = ({ children, headline, sub }: ILayout) => {
  return (
    <div className='w-full h-screen px-4 sm:px-8 md:px-10 lg:px-16 relative'>
      <div className={`h-72 sm:h-1/2 md:h-1/2`}>
        {headline && <Headline headline={headline} sub={sub || ''} />}
      </div>
      <div className={`w-full ${sub ? 'pt-9' : 'pt-6'}`}>
        {children}
      </div>
    </div>
  )
}
