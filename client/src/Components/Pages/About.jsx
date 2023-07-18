const About = () => {
  return (
    <>
      <div className="py-20 bg-sky-950 h-full sm:h-screen">
        <div className="xl:container mx-auto px-6 md:px-12">
          <div className="mb-16 md:w-2/3 lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-white dark:text-white md:text-4xl">
              Game Craze Tech
            </h2>
            <p className="text-white dark:text-gray-300">
              Welcome to Gamecraze Tech, a dynamic team of web wizards dedicated
              to creating extraordinary digital experiences for gamers. With a
              passion for gaming and a good understanding of web development, we
              have joined forces to build a platform that caters to the unique
              needs of gamers worldwide.
            </p>
          </div>
          <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative rounded-3xl h-[28rem] w-[16rem] space-y-6 overflow-hidden">
              <img
                className="mx-auto  w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://res.cloudinary.com/gct3/image/upload/v1684487875/About%20Us%20Page/Satyajit_wsdrlt_vrky6g.jpg"
                alt="Satyajit image"
                loading="lazy"
                // width="640"
                // height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-lg font-semibold dark:text-gray-700 text-white">
                    Satyajit Jadeja
                  </h4>
                  <span className="block text-xs text-gray-500">
                    The Full-Stack Dynamo
                  </span>
                </div>
                <p className="mt-8 text-sm text-gray-300 dark:text-gray-600">
                  Satyajit is our versatile full-stack developer, proficient in
                  both front-end and back-end technologies.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl h-[28rem] w-[16rem] space-y-6 overflow-hidden">
              <img
                className="mx-auto w-full h-[22rem] grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://res.cloudinary.com/gct3/image/upload/v1684487874/About%20Us%20Page/Moataz_amsvxj_tvpu9k.jpg"
                alt="Moataz image"
                loading="lazy"
                // width="640"
                // height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-lg font-semibold dark:text-gray-700 text-white">
                    Moataz Hassanein
                  </h4>
                  <span className="block text-xs text-gray-500">
                    The Front-End-Guru
                  </span>
                </div>
                <p className="mt-8 text-sm text-gray-300 dark:text-gray-600">
                  Moataz is our front-end specialist, with an innate talent for
                  creating captivating user interfaces.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl h-[28rem] w-[16rem] space-y-6 overflow-hidden">
              <img
                className="mx-auto w-full h-[22rem] grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://res.cloudinary.com/gct3/image/upload/v1684487876/About%20Us%20Page/Mouhammad_pi6htt_do1sfv.png"
                alt="Mohammad image"
                loading="lazy"
                // width="640"
                // height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-lg font-semibold dark:text-gray-700 text-white">
                    Mohammad Alsbinati
                  </h4>
                  <span className="block text-xs text-gray-500">
                    Frontend Developer
                  </span>
                </div>
                <p className="mt-8 text-sm text-gray-300 dark:text-gray-600">
                  Mohammad is our talented frontend developer who brings
                  creativity and user-centric design to Gamecraze Tech.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl h-[28rem] w-[16rem] space-y-6 overflow-hidden">
              <img
                className="mx-auto w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://res.cloudinary.com/gct3/image/upload/v1684487874/About%20Us%20Page/me2_fe5km0_ltsnjp.jpg"
                alt="Fakhara Image"
                loading="lazy"
                // width="640"
                // height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-lg font-semibold dark:text-gray-700 text-white">
                    Fakhara Farhan
                  </h4>
                  <span className="block text-xs text-gray-500">
                    Backend Developer
                  </span>
                </div>
                <p className="mt-8 text-sm text-gray-300 dark:text-gray-600">
                  Fakhara is our backend developer and responsible for the
                  smooth operation of data storage and management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
