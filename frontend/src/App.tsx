import { useLayoutEffect, useRef } from "react"
import { Layout } from "./components/Layout"
import { gsap } from "gsap";

function App() {
  // const [isLoading, setIsLoading] = useState(true)
  const loadBox = useRef(null)
  const timeline = gsap.timeline();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      console.log(loadBox.current);
      console.log(gsap);

      timeline.to(loadBox.current, { opacity: 0, duration: 2 });
      // setIsLoading(false)

    }, loadBox); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [])

  return (
    <>
      <div ref={loadBox} className="w-100 h-screen bg-black" />
      <Layout
        headline={`DANIEL <span className="text-outline-white" data-content="PESCADOR">PESCADOR</span>`}
        sub="Frontend developer & UI Designer">
        <p className="text-white italic font-work font-thin tracking-wider antialiased w-full sm:w-2/3 lg:w-1/2 mb-16">Et quibusdam et molestiae atque officiis magni sit. Aut magnam soluta exercitationem et commodi sed veritatis molestiae.</p>
        <div className="w-fill rounded-md h-44 bg-slate-800">
          test
        </div>
      </Layout>
    </>
  )
}

export default App
