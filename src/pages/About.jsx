function About() {
  return (
    <main className="section about-page">
      <h1>About Tasty Bites</h1>

      <p>
        Tasty Bites is a fictional family restaurant located in Bchamoun,
        Lebanon. It was created as a university web programming project to show
        how a small restaurant can present its food, story, and services online.
      </p>

      <p>
        The restaurant focuses on fresh ingredients, simple meals, and a warm
        family atmosphere. The design uses cream, brown, and gold colors to give
        the website a cozy and welcoming feeling.
      </p>

      <div className="about-grid">
        <div>
          <h2>Our Mission</h2>
          <p>
            To serve fresh and tasty food in a comfortable place where families
            and friends can enjoy their time together.
          </p>
        </div>

        <div>
          <h2>Why Choose Us?</h2>
          <p>
            We offer simple dishes, friendly service, affordable prices, and a
            clean restaurant experience.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;