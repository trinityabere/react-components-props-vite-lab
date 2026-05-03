function About({ about, image }) {
  return (
    <aside>
      <img
        src={image || "https://via.placeholder.com/215"}
        alt="blog logo"
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;