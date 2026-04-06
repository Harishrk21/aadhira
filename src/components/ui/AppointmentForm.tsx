import { useState, FormEvent } from 'react';

const services = [
  { id: 'occupational-therapy', name: 'Occupational Therapy' },
  { id: 'speech-therapy', name: 'Speech Therapy' },
  { id: 'special-education', name: 'Special Education' },
  { id: 'aba-therapy', name: 'ABA Therapy' },
  { id: 'early-intervention', name: 'Early Intervention' },
  { id: 'brain-gym', name: 'Brain Gym Activities' },
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    concerns: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Appointment request:', formData);
      setSubmitStatus('success');
      setFormData({
        parentName: '',
        childName: '',
        childAge: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        concerns: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md">
          Thank you for your appointment request! We'll contact you shortly to confirm your appointment.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-md">
          Something went wrong. Please try again later or contact us directly.
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="parentName" className="block text-neutral-700 mb-2">Parent/Guardian Name *</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="childName" className="block text-neutral-700 mb-2">Child's Name *</label>
          <input
            type="text"
            id="childName"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="childAge" className="block text-neutral-700 mb-2">Child's Age *</label>
          <input
            type="text"
            id="childAge"
            name="childAge"
            value={formData.childAge}
            onChange={handleChange}
            placeholder="e.g., 4 years"
            className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-neutral-700 mb-2">Service Required *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className="block text-neutral-700 mb-2">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-neutral-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="preferredDate" className="block text-neutral-700 mb-2">Preferred Date *</label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="preferredTime" className="block text-neutral-700 mb-2">Preferred Time *</label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          >
            <option value="">Select a time</option>
            <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
            <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
            <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
            <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="concerns" className="block text-neutral-700 mb-2">Concerns or Special Requirements</label>
        <textarea
          id="concerns"
          name="concerns"
          value={formData.concerns}
          onChange={handleChange}
          rows={4}
          placeholder="Please share any specific concerns or requirements for your child"
          className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Request Appointment'}
      </button>
      
      <p className="text-sm text-neutral-600 mt-4">
        * Our team will contact you within 24 hours to confirm your appointment.
      </p>
    </form>
  );
};

export default AppointmentForm;