const Contact = () => {
  return (
    <>
      <div className="bg-sky-950 h-screen pt-32">
        <div className="container  px-6 mx-auto flex align-center">
          {/* Section: Design Block */}
          <section className="mb-32 text-gray-800 text-center">
            <div className="px-6 py-12 md:px-12">
              <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-2 items-center">
                  <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                    <div
                      className="block rounded-lg shadow-lg px-6 py-12 md:-px-12 md:mx-12 lg:mr-14 "
                      style={{
                        background: "hsla(0, 0%, 100%, 0.55)",
                        backdropFilter: "blur(30px)",
                        height: "500px",
                      }}
                    >
                      <h2 className="text-3xl font-bold mb-12 text-white">
                        Contact us
                      </h2>
                      <form
                        className="mr-6"
                        action="https://formsubmit.co/82793b9738b7a90677d01ff1a3f0100a"
                        method="POST"
                      >
                        <div className="form-group mb-6">
                          <input
                            type="text"
                            name="name"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput7"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="form-group mb-6">
                          <input
                            type="email"
                            name="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                            placeholder="Email address"
                          />
                        </div>
                        <div className="form-group mb-6">
                          <textarea
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Message"
                            name="message"
                          ></textarea>
                          <input
                            type="hidden"
                            name="_next"
                            value="http://localhost:5174/thanks"
                          ></input>
                        </div>
                        <div className="form-group form-check text-center mb-6"></div>
                        <button
                          type="submit"
                          className="w-full px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-slate-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="md:mb-12 lg:mb-0">
                    <div
                      className="shadow-lg relative rounded-lg"
                      style={{ height: "500px", width: "600px" }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.5354067533694!2d13.484024016176763!3d52.52374647981498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e9ab1163a17%3A0x700b4ec74a47a34d!2sDCI%20-%20Digital%20Career%20Institute%20gGmbH!5e0!3m2!1sen!2sde!4v1660665758019!5m2!1sen!2sde"
                        className="left-0 top-0 h-full w-full absolute rounded-lg"
                        frameBorder="0"
                        allowFullscreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
