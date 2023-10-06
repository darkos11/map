import './App.css';

function App() {
  return (

<div className="contact-container">
  <div className="left-col">
 
  </div>
  <div className="right-col">
       <h1>Contactez-nous</h1>
    <p>
      Vous envisagez de visiter l'Indonésie, nos experts sont à votre dispotions pour vous guider pendant toute le voayage l 
    </p>
    <form id="contact-form" method="post">
      <label htmlFor="name">Full name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Full Name"
             />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email Address"
       
      />
      <label htmlFor="message">Message</label>
      <textarea
        rows={6}
        placeholder="Your Message"
        id="message"
        name="message"
            />
       <button type="submit" id="submit" name="submit">
        Send
      </button>
     </form>
     <div className="map" ><iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16328182.874958554!2d107.21965835380387!3d-2.3813404558340796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndon%C3%A9sie!5e0!3m2!1sfr!2stn!4v1696583688504!5m2!1sfr!2stn"
  width={1000}
  height={600}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
     </div>
</div>


  );
}

export default App;
