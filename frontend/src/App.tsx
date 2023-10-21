import { Layout } from "./components/Layout"
import { LoadingPage } from "./components/LoadingPage"
import { gsap } from "gsap";

function App() {
  // const [isLoading, setIsLoading] = useState(true)
  const timeline = gsap.timeline();
  return (
    <>
      <LoadingPage timeline={timeline}/>
      <Layout
        timeline={timeline}
        // headline={`DANIEL PESCADOR`}
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
