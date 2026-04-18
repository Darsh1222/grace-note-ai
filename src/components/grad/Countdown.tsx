import { useEffect, useState } from "react";

interface CountdownProps {
  target: Date;
}

const calc = (target: Date) => {
  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Countdown = ({ target }: CountdownProps) => {
  const [t, setT] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setT(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-xl mx-auto">
      {items.map((it) => (
        <div key={it.label} className="text-center">
          <div className="font-display text-3xl sm:text-5xl md:text-6xl text-gradient-gold tabular-nums">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs tracking-luxe uppercase text-muted-foreground mt-1">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
