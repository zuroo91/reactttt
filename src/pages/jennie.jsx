import jennie from "../assets/jennie.jpg";

function AboutJennie() {
  return (
    <section className="card">
      <h2>Jennie Blackpink</h2>
      <img src={jennie} alt="Jennie" className="card-img" />
      <p>
        She is pretty, gorgeous <br />
        and the reason I like her is because she never cared about her haters.
      </p>
    </section>
  );
}

export default AboutJennie;
