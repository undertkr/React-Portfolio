import Ubuntu from "../components/ubuntu";
import Meta from "../components/SEO/Meta";

// Remove Google Analytics (ReactGA) initialization
// const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;
// ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;
