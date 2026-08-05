import {
  DoodleSun,
  DoodleCloud,
  DoodleFlower,
  CrayonUnderline,
} from "@/components/ui/Doodles";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  /** tailwind gradient 클래스 (예: "from-[#EBF5FF] to-[#F0FFF4]") */
  gradient: string;
};

export default function PageHeader({ title, subtitle, gradient }: PageHeaderProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} py-16 px-4 text-center`}
    >
      <DoodleCloud className="absolute left-[4%] top-6 w-20 md:w-24 opacity-80 animate-float-slow" />
      <DoodleSun className="absolute right-[5%] top-5 w-14 md:w-16 animate-float" />
      <DoodleFlower className="absolute left-[12%] bottom-2 w-10 md:w-12 opacity-90 hidden sm:block" />

      <div className="relative">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] mb-1">
          {title}
        </h1>
        <CrayonUnderline className="w-32 h-2.5 mx-auto mb-4" />
        {subtitle && (
          <p className="text-[#64748B] text-lg max-w-md mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
