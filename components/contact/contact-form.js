import classes from "./contact-form.module.css";

function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>Contattami</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">La tua e-mail</label>
            <input type="email" id="email" placeholder="esempio@email.com" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Il tuo nome</label>
            <input type="text" id="name" placeholder="Mario Rossi" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Il tuo messaggio</label>
          <textarea id="message" rows="5" placeholder="Scrivi qui il tuo messaggio" required></textarea>
        </div>
        <div className={classes.actions}>
            <button>Invia il messaggio</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
