import React from "react";
import Footer from '../Components/Footer'
function OurBlog() {
  return (
    <>
      <div className="container-fluid py-6 px-5 mt-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="text-6xl mb-0 font-Arial font-medium">
            Latest Blog Post
          </h1>
        </div>
        <div className="inline-grid grid-cols-3 gap-4">
          <div className="col-lg-4">
            <div className="blog-item bg-white rounded shadow flex flex-col justify-between">
              <div className="position-relative overflow-hidden">
                <img
                  className="rounded-top"
                  src="https://transitionscoachingservices.com/wp-content/uploads/2022/04/Transitions-Coaching-Blog-Image-2-700x466.jpg"
                  alt=""
                />
                <div className="overlay absolute top-0 start-0 w-full h-full"></div>
              </div>
              <div className="p-4">
                <div style={{backgroundColor:"slateblue", borderRadius:"4px"}}  className="text-dark rounded-pill inline-block px-3 py-1 mb-3">
                  <span>01 Jan 2022</span>
                </div>
                <h5 className="text-uppercase mb-3 font-Franklin_Gothic font-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    CAREER COACHING
                  </a>
                </h5>
                <p className="text-muted">
                  {" "}
                  Our experienced coaches can help you identify your strengths,
                  set goals, and develop a roadmap to achieve your career
                  objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-item bg-white rounded shadow flex flex-col justify-between">
              <div className="position-relative overflow-hidden">
                <img
                  className="rounded-top"
                  src="https://img.grouponcdn.com/deal/ozQ5WcRoygLhd5iBL4cx/Ze-2048x1242/v1/t600x362.jpg"
                  alt=""
                />
                <div className="overlay absolute top-0 start-0 w-full h-full"></div>
              </div>
              <div className="p-4">
                <div style={{backgroundColor:"slateblue", borderRadius:"4px"}}  className="bg-primary text-dark rounded-pill inline-block px-3 py-1 mb-3">
                  <span>17 Feb 2023</span>
                </div>
                <h5 className="text-uppercase mb-3 font-Franklin_Gothic font-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    GRAPHIC DESIGN
                  </a>
                </h5>
                <p className="text-muted">
                  Your CV is often the first impression you make on potential
                  employers, so it's essential that it stands out. Our team of
                  professional writers can help you create a tailored.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-item bg-white rounded shadow flex flex-col justify-between">
              <div className="position-relative overflow-hidden">
                <img
                  className="rounded-top"
                  src="https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="overlay absolute top-0 start-0 w-full h-full"></div>
              </div>
              <div className="p-4">
                <div style={{backgroundColor:"slateblue", borderRadius:"4px"}}  className="bg-primary text-dark rounded-pill inline-block px-3 py-1 mb-3">
                  <span>17 Feb 2023</span>
                </div>
                <h5 className="text-uppercase mb-3 font-Franklin_Gothic font-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    DIGITAL MARKETING
                  </a>
                </h5>
                <p className="text-muted">
                  Your CV is often the first impression you make on potential
                  employers, so it's essential that it stands out. Our team of
                  professional writers can help you create a tailored.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-item bg-white rounded shadow flex flex-col justify-between">
              <div className="position-relative overflow-hidden">
                <img
                  className="rounded-top"
                  src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="overlay absolute top-0 start-0 w-full h-full"></div>
              </div>
              <div className="p-4">
                <div style={{backgroundColor:"slateblue", borderRadius:"4px"}}  className="bg-primary text-dark rounded-pill inline-block px-3 py-1 mb-3">
                  <span>17 Feb 2023</span>
                </div>
                <h5 className="text-uppercase mb-3 font-Franklin_Gothic font-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    MOBILE APPS
                  </a>
                </h5>
                <p className="text-muted">
                  Your CV is often the first impression you make on potential
                  employers, so it's essential that it stands out. Our team of
                  professional writers can help you create a tailored.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-item bg-white rounded shadow flex flex-col justify-between">
              <div className="position-relative overflow-hidden">
                <img
                  className="rounded-top"
                  src="https://images.unsplash.com/photo-1483095348487-53dbf97d8d5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="overlay absolute top-0 start-0 w-full h-full"></div>
              </div>
              <div className="p-4">
                <div style={{backgroundColor:"slateblue", borderRadius:"4px"}} className="text-dark rounded-pill inline-block px-3 py-1 mb-3">
                  <span>17 Feb 2023</span>
                </div>
                <h5 className="text-uppercase mb-3 font-Franklin_Gothic font-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    WEB DEVELOPMENT
                  </a>
                </h5>
                <p className="text-muted">
                  Your CV is often the first impression you make on potential
                  employers, so it's essential that it stands out. Our team of
                  professional writers can help you create a tailored.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-item bg-white rounded shadow flex flex-col justify-between">
              <div className="position-relative overflow-hidden">
                <img
                  className="rounded-top"
                  src="https://media.licdn.com/dms/image/C4D12AQHJF3jR1aHGVg/article-cover_image-shrink_600_2000/0/1611702529410?e=2147483647&v=beta&t=KpsFka7eqb5_iPp00jWW0aG0V4tYHS7Nnjo64NEGc9g"
                  alt=""
                />
                <div className="overlay absolute top-0 start-0 w-full h-full"></div>
              </div>
              <div className="p-4">
                <div style={{backgroundColor:"slateblue", borderRadius:"4px"}}  className="bg-primary text-dark rounded-pill inline-block px-3 py-1 mb-3">
                  <span>23 May 2023</span>
                </div>
                <h5 className="text-uppercase mb-3 font-Franklin_Gothic font-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    LINKEDIN OPTIMIZATION
                  </a>
                </h5>
                <p className="text-muted">
                  LinkedIn is a powerful tool for networking and job searching,
                  but many professionals don't know how to use it to their
                  advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurBlog;
