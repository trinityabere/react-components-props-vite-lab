function Article({ title, date, preview, minutes }) {
  const displayDate = date || "January 1, 1970";

  function getReadTime(minutes) {
    if (!minutes) return null;

    if (minutes < 30) {
      return "☕️".repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`;
    } else {
      return "🍱".repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>

      {/* 👇 add this line */}
      <p>{getReadTime(minutes)}</p>
    </article>
  );
}

export default Article;