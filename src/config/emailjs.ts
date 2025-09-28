// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (found in EmailJS dashboard)
  SERVICE_ID: 'service_vjbmh2f', // Replace with your actual service ID
  
  // Your EmailJS Template ID (found in EmailJS dashboard)
  TEMPLATE_ID: 'template_q6em8hn', // Your actual template ID
  
  // Your EmailJS Public Key (found in EmailJS dashboard)
  PUBLIC_KEY: 'O3pCfoAyuXRf5sFLR', // Replace with your actual public key
  
  // Your business email where contact form submissions will be sent
  BUSINESS_EMAIL: 'marketing.alifviewmedia@gmail.com'
}

// Template parameters mapping
export const TEMPLATE_PARAMS = {
  from_name: 'from_name',
  from_email: 'from_email', 
  phone: 'phone',
  company: 'company',
  event_type: 'event_type',
  message: 'message',
  to_email: 'to_email'
}
