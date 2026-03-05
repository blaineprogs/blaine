export default function Card({ title, children }) {
  return (
      <section className="card">
      <h2>About Me</h2>
      <p>A nineteen year-old who's still navigating the world.</p>
      <img src="images/profile.jpg" alt="Profile photo" width="300" height="300"/>

      <p>
        Email:
        <a href="mailto:tura.dorothy@gmail.com">tura.dorothy@gmail.com</a><br />
        GitHub:
        <a href="https://github.com/blaineprogs" target="_blank" rel="noreferrer">github.com</a>
      </p>
    </section>
  );
}