import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://shree-khatu-shyam-industry.onrender.com/api/v1/users/send-email",
        formData
      );
      console.log("Email sent successfully");
      setStatus("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Optionally clear the form fields after successful submission
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("Failed to send email.");
      // Handle error (optional)
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative py-10">
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 xl:p-6 md:w-1/2 bg-gray-300 rounded-xl overflow-hidden sm:mr-10 p-2 flex items-center justify-center relative filter: grayscale(1) contrast(1.2) opacity(0.4)">
            <iframe
              className="px-7 w-screen h-full xl:rounded-xl lg:px-4 lg:py-4 lg:rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.4499982434286!2d87.97361827441075!3d26.11686679384005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e51788084393cb%3A0x1f2369837f071b03!2sSHREE%20KHATU%20SHYAM%20INDUSTRY!5e0!3m2!1sen!2sin!4v1715455109960!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 font-['Roboto']">
            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font font-['Roboto']">
              Let's Talk
            </h2>
            <form onSubmit={handleSubmit} method="post" className="w-full">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-md"
              >
                Connect
              </button>
              {status && <p className="mt-3 text-gray-500 text-xs">{status}</p>}
            </form>
            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
