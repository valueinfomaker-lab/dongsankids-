interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  center = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <h2
        className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3 ${
          light ? "text-white" : "text-[#1E293B]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg ${
            light ? "text-white/80" : "text-[#64748B]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
