import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div
      className="about"
      style={{ backgroundImage: "url(/images/backgrounds/table.jpg)" }}
      id="about"
    >
      <h1 className="">ABOUT ME</h1>
      <div className="containerd">
        <div className="left">
          <h2 className="">Who Am I ?</h2>
          <div className="present">
            <h3>I am a software Developer living in Riverdale, Maryland</h3>
            <p>
              I use programming and imagination to solve problems and make life
              better. I love exploring new technologies &#128187; and being a
              practitioner, I like to stay on top of latest trends.
              <br />
              Going from learning linux system administrator to devops, I found
              out my incredible passion for writing codes.
              <br />
              <span className="tohide"> I'm interested in:</span>
            </p>

            <ol>
              <li>data science</li>
              <li>Mathematics</li>
              <li>personal development</li>
              <li>reading books</li>
            </ol>
            <p>
              With your permission, we can make things better, please
              <a style={{ color: "red" }} href="#contact">
                <strong> contact me!</strong>
              </a>
            </p>
          </div>
        </div>
        <div className="right">
          <div className="inside">
            <span className="">WHAT I DO?</span>
            <h2 className="">HERE ARE SOME OF MY EXPERTISE:</h2>
            <div className="slider">
              <div className="slide">
                <h3>APP Develpoment</h3>
                <p>
                  I also have knowledge of flutter development and have
                  experience in building android and IOS applications. I also
                  have live app published on Google Play Store.{" "}
                </p>
              </div>

              <div className="slide">
                <h3>Web Develpoment</h3>
                <p>
                  I am a full stack web developer(PERN) and build websites using
                  HTML, CSS, Javascript, ReactJs.
                  <br /> I have also good grasp on Node and NoSQL(MongoDb)
                </p>
              </div>

              <div className="slide">
                <h3>Other's Interest</h3>
                <p>
                  I also have decent hand in developing website with WordPress.
                  <br /> Adobe Photoshop, Adobe Illustrator, MS Office, C++,
                  Github are my other fields of interest.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
