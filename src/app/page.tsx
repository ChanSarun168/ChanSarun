import Portfolio3D from "@/components/Portfolio3D";
import { Particles } from "@/components/Particles";

export default function Home() {
  return (
    <div>
      <section id="home">
        <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
          <div className="w-[85%] max-w-[90%] h-full flex items-center justify-between mx-auto">
            <div className="flex-1 w-full">
              <h1 className="text-5xl text-white font-extrabold mb-4 animate-fadeIn">
                Hi, THERE!
              </h1>
              <div className="flex items-center mb-6">
                <h1 className="text-[96px] text-white font-extrabold mr-4 animate-slideInLeft">
                  I&apos;m
                </h1>
                <div className="text-animation-container relative">
                  <h2 className="font-bold text-[96px] stroke-text animate-strokeFill">
                    Sarun
                  </h2>
                  <h2 className="font-bold text-[96px] absolute top-0 left-0 animate-clip">
                    Sarun
                  </h2>
                </div>
              </div>
              <h1 className="text-4xl text-white font-bold animate-fadeInUp">
                Web Developer
              </h1>
            </div>
            <div className="flex-1 w-full h-full relative flex items-center justify-center">
              <Portfolio3D />
            </div>
            <a
              href="#about"
              className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center text-white group"
            >
              <div className="w-6 h-10 rounded-full border-2 border-[#00FF5E] flex items-start justify-center p-1 group-hover:border-[#00FF5E] transition-colors">
                <div className="w-1 h-2 bg-[#00FF5E] rounded-full animate-scroll group-hover:bg-[#00FF5E]" />
              </div>
              <span className="mt-2 text-sm group-hover:text-[#00FF5E] transition-colors">
                Explore
              </span>
            </a>
          </div>
          <Particles />
        </div>
      </section>
      <section id="about">
        <div className="relative min-h-screen pt-20 w-[85%] max-w-[90%] mx-auto">
          <h1 className="text-center font-extrabold text-[48px] text-[#00FF5E] ">
            ABOUT
          </h1>
          <p className="text-center text-white mb-10">
            A passionate developer focused on creating innovative and impactful
            solutions through code.
          </p>
          <div>
            <div className="flex items-end">
              <h1 className="font-medium text-[#696969] text-[24px]">
                PERSONAL
              </h1>
              <div className="w-[182px] h-[1px] bg-[#00FF5E] relative bottom-2 ml-3"></div>
            </div>
            <div className="w-full bg-[#252525] rounded-lg">
              <h1 className="text-white text-[36px] font-extrabold p-4">
                PERSONAL DATA
              </h1>
              <div className="flex justify-between">
                <div className="w-[25%] flex justify-center">
                  <img src="profile_image.png" alt="Profile" />
                </div>
                <div className="w-[72%] flex">
                  <div className="flex flex-col justify-between w-[50%] h-full">
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        FULL NAME :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">
                        Chan Sarun
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        GENDER :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">
                        Male
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        AGE :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">21</p>
                    </div>
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        DATE OF BIRTH :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">
                        22 March 2004
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        PLACE OF BIRTH :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">
                        Svay Rieng
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        MARRIED STATUS :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">
                        Single
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-[50%] h-full">
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        PHONE :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">
                        097 841 9624 / 096 916 8624
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        EMAIL :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">
                        chansarun0@gmail.com
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        TELEGRAM :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">t.me/SARUNCHAN</p>
                    </div>
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        DEGREE :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">
                        Bachelor’s Degree
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        FREELANCE :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">
                        Available
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src="Vector.svg" alt="" />
                      <h1 className="text-[20px] font-extrabold ml-4 text-white">
                        CURRENT ADDRESS :
                      </h1>
                      <p className="text-white font-xl text-[20px] ml-3">
                        Phnom Penh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 text-white font-light text-[16px] mt-2">
                <p>
                  I am an aspiring Front-End Developer with a passion for
                  creating engaging and user-friendly web interfaces. My
                  experience with modern technologies such as React.js, Next.js,
                  and TailwindCSS has equipped me with the skills to design and
                  develop responsive, visually appealing, and
                  performance-optimized applications. While my primary focus is
                  on frontend development, I also have a foundational
                  understanding of backend technologies, enabling effective
                  collaboration on full-stack projects. I am dedicated to
                  solving design challenges and continuously enhancing user
                  experiences through innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
