export const Contact = () => {
  return (
    <div className='page'>
      <h1>Contact Us</h1>
      <p>Get in touch with our team.</p>
      <div className='content'>
        <h2>Contact Information</h2>
        <div className='contact-info'>
          <p>
            <strong>Email:</strong> contact@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, City, State 12345
          </p>
        </div>
        <h2>Send us a message</h2>
        <form className='contact-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' rows={5} required></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};
