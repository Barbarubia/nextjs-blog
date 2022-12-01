import Notification from "../ui/notification";
import { useState, useEffect } from "react";
import classes from "./contact-form.module.css";

async function sendMessageData(messageDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(messageDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Si è verificato un problema!");
  }
}

function ContactForm() {
  // uso l'hook useState per settare i dati immessi nel form
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  // uso l'hook useState per settare lo status del messaggio
  const [requestStatus, setRequestStatus] = useState(); // "pending", "success", "error"
  // uso l'hook useState per definire il tipo di errore
  const [requestError, setRequestError] = useState();

  // uso l'hook useEffect per cancellare le notifiche "success" e "error" dopo 3 secondi
  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessage(event) {
    // impedisco al browser di ricaricare la pagina quando effettuo il submit del form
    event.preventDefault();

    // TODO: effettuo la validazione client-side dei dati immessi nel form

    // imposto lo status della request su "pending"
    setRequestStatus("pending");

    // effettuo il fetch dei dati immessi tramite il form all'API dei contatti
    try {
      await sendMessageData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      // imposto lo status della request su "success"
      setRequestStatus("success");
      // Svuoto i campi del form
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    } catch (error) {
      // imposto lo status della request su "error"
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  // imposto gli stati della notifica
  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Attendi",
      message: "Invio messaggio in corso!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Inviato!",
      message: "Il tuo messaggio è stato inviato con successo!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Oh, no!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>Contattami</h1>
      <form className={classes.form} onSubmit={sendMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">La tua e-mail</label>
            <input
              type="email"
              id="email"
              placeholder="esempio@email.com"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Il tuo nome</label>
            <input
              type="text"
              id="name"
              placeholder="Mario Rossi"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Il tuo messaggio</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Scrivi qui il tuo messaggio"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Invia il messaggio</button>
        </div>
      </form>
      {/* Se la variabile notification non è undefined visualizzo il componente Notification */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
