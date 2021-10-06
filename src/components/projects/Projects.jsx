import "./projects.scss";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="images/mobile.png" alt="phone" />
                </div>
                <h2>Title</h2>
                <p>
                  lorem1 I have emeric fokouong touolac . A wonderful full stCK
                  DEVELOPER THAT fell in love with coding and problem solving. I
                  really want to know this wonderful company can drive me
                </p>
                <span>Project</span>
              </div>
            </div>
            <div className="right">
              <img
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img src="images/arrow.png" alt="" className="arrow left" />
      <img src="images/arrow.png" alt="" className="arrow right" />
    </div>
  );
}

export default Projects;
