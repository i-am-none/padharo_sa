"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { FeedbackFormData } from "../reviews.types";

export function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: "",
    email: "",
    visitDate: "",
    rating: 5,
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    // This will connect to backend API in future implementation
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="feedback-form-success"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="feedback-form-success-title">Thank You!</h3>
        <p className="feedback-form-success-message">
          Your feedback has been submitted. We appreciate you taking the time to share your experience.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      className="feedback-form"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <div className="feedback-form-header">
        <h3 className="feedback-form-title">Share Your Experience</h3>
        <p className="feedback-form-description">
          We'd love to hear about your visit. Your feedback helps us improve and serve you better.
        </p>
      </div>

      <div className="feedback-form-fields">
        <div className="feedback-form-field">
          <label htmlFor="name" className="feedback-form-label">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="feedback-form-input"
            placeholder="Your name"
          />
        </div>

        <div className="feedback-form-field">
          <label htmlFor="email" className="feedback-form-label">
            Email (optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="feedback-form-input"
            placeholder="your@email.com"
          />
        </div>

        <div className="feedback-form-field">
          <label htmlFor="visitDate" className="feedback-form-label">
            Visit Date (optional)
          </label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleInputChange}
            className="feedback-form-input"
          />
        </div>

        <div className="feedback-form-field">
          <label className="feedback-form-label">Rating *</label>
          <div className="feedback-form-rating">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => handleRatingChange(rating)}
                className={`feedback-form-star ${rating <= formData.rating ? "feedback-form-star-filled" : "feedback-form-star-empty"}`}
                aria-label={`Rate ${rating} stars`}
              >
                <Star size={24} fill={rating <= formData.rating ? "currentColor" : "none"} />
              </button>
            ))}
          </div>
        </div>

        <div className="feedback-form-field">
          <label htmlFor="message" className="feedback-form-label">
            Your Experience *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="feedback-form-textarea"
            placeholder="Tell us about your dining experience..."
          />
        </div>
      </div>

      <button type="submit" className="feedback-form-submit">
        Share Your Experience
      </button>
    </motion.form>
  );
}
