import Image from "next/image"; // componente incluso in nextjs che consente di ottimizzare le immagini
import classes from "./hero.module.css"; // importo lo stile dedicato al componente Hero

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/tv.jpg"
          alt="Cosa guardiamo in TV stasera?"
          width={300}
          height={300}
        />
      </div>
      <h1>Cosa guardiamo stasera?</h1>
      <p>
        Uno sguardo ai film e alle serie TV più in voga del momento per evitare
        mezz'ora di zapping per decidere cosa guardare.
      </p>
    </section>
  );
}

export default Hero;
