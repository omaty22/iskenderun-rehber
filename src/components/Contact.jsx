import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fc826fb9-8570-48b4-ac6f-8b874e76bcc1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Error");
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mt-20 text-center p-6 py-2 lg:px-32 w-full
    overflow-hidden"
      id="Contact"
    >
      <h1
        className=" text-2xl sm:text-4xl font-bold mb-5
      text-center"
      >
        Contact Us
      </h1>
      <p className="text-center text-black mb-12 max-w-80 mx-auto">
        Want to add your buisness ? or hire us to build your website ? feel free
        to contact us via email
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto to-black">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="Name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="Email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          className="bg-black text-white py-2 px-12 mb-10 rounded hover:bg-gray-800"
          type="submit"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
