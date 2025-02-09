import { useEffect, useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/api/hello').then(r => r.json()).then(data => {
      console.log(data)
      setCount(data.count)
    })
  }, [])

  return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-[url(/mountain-image.jpg)] bg-cover bg-center w-full h-auto">
          <img src={'/oc-logo.png'} className="h-100 w-auto p-10"/>
          <div className="bg-accent p-10 mx-10 mb-10 rounded-box">
            <h1 className="text-center text-5xl font-bold mb-3">FRCC Outdoor Club</h1>
            <p className="text-xl text-center mt-3"><i>The</i> Front Range Community College club for thoses who love the outdoors.</p>
          </div>
        </div>
        <h1 className="text-center text-5xl">{count}</h1>
      </div>
  );
}

export default Home;
