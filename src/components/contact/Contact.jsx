import "./contact.scss";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Thank you for your message, we will be in touch in no time! ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
      console.log(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_USER_ID,
        process.env.REACT_APP_TEMPLATE_ID
      );
    }
  };
  return (
    <div
      className="contact"
      style={{ backgroundImage: "url(/images/backgrounds/call.jpg)" }}
    >
      <h1>CONTACT</h1>
      <div className="container">
        <div className="left">
          <h2>Reach out to me !</h2>
          <p>
            Interested in working together? Please, fill out the form this form
            to start a conversation and I will get back to you as soon as I can
            &#128521;.
          </p>
        </div>
        <div className="right">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Row 1 of form */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="form-control formInput"
                placeholder="Name"
              />
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="form-control formInput"
                placeholder="Email address"
              ></input>
              {errors.email && (
                <span className="errorMessage">
                  Please enter a valid email address
                </span>
              )}
            </div>
            {/* Row 2 of form */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Please enter a subject",
                  },
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 75 characters",
                  },
                })}
                className="form-control formInput"
                placeholder="Subject"
              ></input>
              {errors.subject && (
                <span className="errorMessage">{errors.subject.message}</span>
              )}
            </div>
            {/* Row 3 of form */}
            <div className="form-group">
              <textarea
                rows={3}
                name="message"
                {...register("message", {
                  required: true,
                })}
                className="form-control formInput"
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <span className="errorMessage">Please enter a message</span>
              )}
            </div>
            <button className="submit-btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
        <div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
