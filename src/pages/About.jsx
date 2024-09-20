import img from "../assets/contact.png";

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-lg mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6 text-gray-700">
            We are committed to providing the best service to our customers. Our
            mission is to create value and make a positive impact on the
            community. Learn more about how we can serve you.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <img
            className="w-full h-auto object-cover"
            src={img}
            alt="Home page Image"
          />
        </div>
      </div>
    </section>
  );
}
