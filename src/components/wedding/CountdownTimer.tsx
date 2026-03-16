import { useState, useEffect } from "react";

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

const getTimeLeft = (targetDate: string): TimeLeft => {
  const diff = new Date(targetDate).getTime() - new Date().getTime();
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / 1000 / 60) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
};

export const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.dias, label: "Dias" },
    { value: timeLeft.horas, label: "Horas" },
    { value: timeLeft.minutos, label: "Min" },
    { value: timeLeft.segundos, label: "Seg" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="countdown-number text-4xl md:text-6xl font-display font-semibold leading-none">
              {String(unit.value).padStart(2, "0")}
            </div>
            <p className="text-card/60 text-xs uppercase tracking-widest mt-2 font-light">
              {unit.label}
            </p>
          </div>
          {i < units.length - 1 && (
            <span className="text-gold/60 text-3xl font-light mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
};
