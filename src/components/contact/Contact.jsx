import "./contact.scss";

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div
      className="contact"
      style={{ backgroundImage: "url(/images/backgrounds/contact_blue.jpg)" }}
      id="contact"
    >
      <div className="card section-lg bg-gradient-info shadow-lg border-0">
        <div className="container">
          <div className="p-2">
            <div className="row">
              <div className="col order-lg-2" lg="4">
                <img
                  src={"/images/man.png"}
                  style={{ width: "200px" }}
                  alt=""
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                />
              </div>
              <div className="col col-8 order-lg-1">
                <h2 className="text-white">Reach Out to me!</h2>
                <p className="lead text-white mt-3">
                  DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                  ALL
                </p>
                <p className="text-white mt-3">hello</p>
                <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                  <i className="ni ni-pin-3 text-info mr-2" />
                  {}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left">
        <img src="images/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
