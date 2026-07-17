export default function Marquee() {
  const text = "START FROM NOTHING — BECOME EVERYTHING — ";
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{text.repeat(5)}</span>
        <span>{text.repeat(5)}</span>
      </div>
    </div>
  );
}
