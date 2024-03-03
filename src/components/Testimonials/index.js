import { testimonials } from "./testimonialsData";
import "./index.css";

function Testimonials() {
  return (
    <div className="testimonial-container">
      <h1 className="section-title">Testimonials</h1>

      <ul className="testimonials-list">
        {testimonials.map((item, index) => (
          <li key={index} className="testimonial-item">
            <p>
              <strong>Demo:</strong> {item.name}
            </p>
            <p>
              <strong>Position:</strong> {item.position}
            </p>
            <p>
              <strong>Company:</strong> {item.company}
            </p>
            <p>{item.testimonial}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Testimonials;
