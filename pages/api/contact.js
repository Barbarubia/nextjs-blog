import { MongoClient } from "mongodb";

async function handler(req, res) {
  // Per la pagina dei contatti l'unica request a cui sono interessato è il metodo POST
  if (req.method === "POST") {
    // estraggo i dati dal body della request
    const { email, name, message } = req.body;

    // effettuo la validazione server-side dei dati
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      // i dati non sono validi quindi restituisco una response di errore
      res.status(422).json({ message: "Dati non validi!" });
      return;
    }

    // se i dati sono ok vado avanti connettendomi al database MongoDB
    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.gcpvcae.mongodb.net/?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      // Errore se non riesco a connettermi al database
      res.status(500).json({ message: "Impossibile connettersi al database." });
      return;
    }

    // se la connessione al database avviene con successo proseguo
    const db = client.db(`${process.env.mongodb_database}`);

    // creo nel database una collection con il nome di "messages" e inserisco all'interno della stessa i dati del messaggio (salvati in un oggetto "newMessage")
    const newMessage = {
      email,
      name,
      message,
    };

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      // imposto l'id del messaggio con quello generato automaticamente dal database
      newMessage.id = result.insertedId;
    } catch (error) {
      // se ho un errore:
      // chiudo la connessione al database
      client.close();
      // imposto la response con un messaggio di errore
      res.status(500).json({ message: "Salvataggio messaggio fallito!" });
      return;
    }

    // dopo aver salvato con successo il messaggio, chiudo la connessione al database
    client.close();

    // restituisco una response di successo
    res.status(201).json({ message: "Messaggio inviato con successo!" });
  }
}

export default handler;
