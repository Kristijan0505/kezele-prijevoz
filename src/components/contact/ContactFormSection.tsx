import React, { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Ime je obavezno';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email je obavezan';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email nije valjan';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Poruka je obavezna';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact-form-section" className="bg-neutral-gray py-16 relative overflow-hidden">
      {/* Background pattern with waves */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3385608/pexels-photo-3385608.jpeg?auto=compress&cs=tinysrgb&w=1400')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-background-white tracking-tight animate-[fadeIn_0.7s_ease-in-out_both]">
            Pošaljite Nam Upit
          </h2>
          
          <div className="w-24 h-1 bg-secondary-gold mx-auto mt-4 mb-6 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-base md:text-lg text-background-white max-w-3xl mx-auto animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
            Ispunite obrazac ispod i javite nam svoje želje za putovanje. Odgovorit ćemo vam u najkraćem roku!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto animate-[fadeInUp_0.7s_ease-in-out_0.3s_both]">
          <form 
            onSubmit={handleSubmit}
            className={`bg-background-white rounded-lg shadow-xl p-8 relative overflow-hidden ${isSubmitting ? 'opacity-60 pointer-events-none' : ''}`}
            aria-label="Kontakt obrazac"
            noValidate
          >
            {/* Subtle wave pattern in background */}
            <div className="absolute inset-0 bg-gradient-to-b from-light-gray/30 to-transparent z-0"></div>
            
            <div className="relative z-10">
              {/* Success message */}
              {isSubmitted && (
                <div className="bg-success-green text-background-white p-4 rounded-lg mb-6 flex items-center animate-[slideInUp_0.5s_ease-in-out]">
                  <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0" />
                  <p>Hvala na upitu! Uskoro ćemo vam se javiti.</p>
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-primary-red font-medium mb-2">
                  Ime i Prezime <span className="text-primary-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vaše ime"
                  className={`w-full px-4 py-3 bg-background-white border ${errors.name ? 'border-primary-red' : 'border-neutral-gray/30'} rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-gold transition-all`}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-primary-red text-sm animate-[fadeIn_0.3s_ease-in-out]">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-primary-red font-medium mb-2">
                  Email <span className="text-primary-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Vaš email"
                  className={`w-full px-4 py-3 bg-background-white border ${errors.email ? 'border-primary-red' : 'border-neutral-gray/30'} rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-gold transition-all`}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-primary-red text-sm animate-[fadeIn_0.3s_ease-in-out]">
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-primary-red font-medium mb-2">
                  Telefon <span className="text-neutral-gray text-sm">(opcionalno)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Vaš broj"
                  className="w-full px-4 py-3 bg-background-white border border-neutral-gray/30 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-gold transition-all"
                  aria-required="false"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-primary-red font-medium mb-2">
                  Poruka <span className="text-primary-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Koji izlet vas zanima?"
                  rows={4}
                  className={`w-full px-4 py-3 bg-background-white border ${errors.message ? 'border-primary-red' : 'border-neutral-gray/30'} rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-gold transition-all`}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-primary-red text-sm animate-[fadeIn_0.3s_ease-in-out]">
                    {errors.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-primary-red text-background-white font-bold rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-primary-red/90 flex items-center justify-center gap-2 group"
                disabled={isSubmitting}
              >
                <span>Pošalji</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                {isSubmitting && (
                  <svg className="animate-spin ml-2 h-5 w-5 text-background-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;