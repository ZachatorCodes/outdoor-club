function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-[url(src/assets/mountain-image.jpg)] bg-cover bg-center w-full h-auto">
          <img src="src/assets/oc-logo.png" className="h-100 w-auto p-10"/>
          <div className="bg-blue-100 p-10 mx-10 mb-10 rounded-box">
            <h1 className="text-center text-5xl font-bold mb-3">FRCC Outdoor Club</h1>
            <p className="text-xl text-center mt-3">THE Front Range Community College club for thoses who love the outdoors.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
