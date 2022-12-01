// Questa è la pagina con il form per contattare il proprietario del blog
import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contattami</title>
        <meta name="description" content="Mandami un messaggio" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
