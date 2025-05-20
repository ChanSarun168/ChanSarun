import Head from 'next/head';
import Portfolio3D from '@/components/Portfolio3D';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarun - Portfolio</title>
        <meta name="description" content="Sarun's Portfolio with 3D Skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-screen h-screen flex justify-center items-center bg-black font-poppins">
        <div className="w-[85%] max-w-[90%] h-full flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-5xl text-white font-extrabold mb-4">Hi, THERE!</h1>
            <div className="flex items-center mb-6">
              <h1 className="text-[96px] text-white font-extrabold mr-4">
                I&apos;m
              </h1>
              <div className="text-animation-container">
                <h2 className="font-bold text-[96px] stroke-text">
                  Sarun
                </h2>
                <h2 className="font-bold text-[96px] animate-clip">
                  Sarun
                </h2>
              </div>
            </div>
            <h1 className="text-4xl text-white font-bold">Web Developer</h1>
          </div>
          <div className="flex-1 h-full overflow-hidden relative">
            <Portfolio3D />
          </div>
        </div>
      </div>
    </>
  );
}