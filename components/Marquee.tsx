const WORDS = ["Conception", "Construction", "Rénovation", "Aménagement", "Piscines", "Jacuzzis"];

/** One slow perpetual loop — aria-hidden, paused under reduced motion. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {[0, 1].map((half) => (
          <div key={half} style={{ display: "contents" }}>
            {WORDS.map((w) => (
              <span key={`${half}-${w}`}>
                {w} <i>·</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
