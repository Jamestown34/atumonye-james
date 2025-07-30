import Header from "@/components/Header"; // Adjust path if needed

const About = () => {
  return (
    <>
      <Header />

      <section
        className="py-20 px-6 min-h-screen text-white"
        style={{
          background: "linear-gradient(90deg, #001288, #0257a6, #93cbff)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg">
          <h2 className="text-4xl font-bold mb-6">About Atumonye James</h2>

          <p className="text-lg mb-4">
            I'm Atumonye James, a data scientist and strategic problem-solver with a background in Pharmaceutical Technology. I specialize in helping teams and organizations make better decisions through data.
          </p>

          <p className="text-lg mb-4">
            My journey began in the classroom, but it quickly grew into a mission: to understand how data drives business, healthcare, finance, and innovation. Today, I apply that knowledge to solve real-world challenges with clarity and precision.
          </p>

          <p className="text-lg mb-4">
            I bring a hands-on, results-oriented approach to every engagement, combining predictive analytics, machine learning, and business intelligence to turn complexity into clarity. Whether you're dealing with messy data or unclear goals, I help you uncover the signal and act with confidence.
          </p>

          <p className="text-lg mb-4">
            I’ve worked with teams across Nigeria, North America, and Europe, delivering insights that drive growth, efficiency, and smarter decision-making. I’m not just here to analyze data. I’m here to help you move forward.
          </p>

          <p className="text-lg mb-6">
            If you're looking for a data expert who understands both the numbers and the business behind them, let's connect. I’d love to help you build something impactful.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdak1Vfy-xvWgpxl30InSwV4TT4FOh_3rYcmDnKHWSe8zmmRw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-[#001288] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              Let's talk
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
