import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Best Shoe Store Of The Year!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
        Step into style and let your shoes tell your story. Every step is a statement, every shoe a journey. Find your perfect pair at Yogi Collection.
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Shop Now</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero