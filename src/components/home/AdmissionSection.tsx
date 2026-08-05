const eligibility = [
  { age: "만 3세", birth: "2023년생", icon: "🐣" },
  { age: "만 4세", birth: "2022년생", icon: "🐥" },
  { age: "만 5세", birth: "2021년생", icon: "🐤" },
];

export default function AdmissionSection() {
  return (
    <section className="py-16 px-4 bg-[#FAFBFF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#FFF5F2] text-[#F47B5A] text-sm font-medium px-3 py-1 rounded-full mb-4">
            입학안내
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-4">
            소중한 아이의 행복한 첫걸음을 함께합니다
          </h2>
          <div className="max-w-2xl mx-auto space-y-2">
            <p className="text-[#64748B] leading-relaxed">
              동산유치원은 아이들이 새로운 환경에 안정적으로 적응하고 즐겁게
              생활할 수 있도록 사랑과 정성으로 맞이합니다.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              입학 모집 일정과 방법, 준비사항을 확인하시고 궁금한 점은
              유치원으로 문의해 주시기 바랍니다.
            </p>
          </div>
        </div>

        <h3 className="font-display text-xl font-bold text-[#1E293B] text-center mb-6">
          모집 대상
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {eligibility.map((item) => (
            <div
              key={item.age}
              className="bg-white border-2 border-[#F47B5A]/20 rounded-2xl p-6 text-center"
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <div className="font-display text-xl font-bold text-[#F47B5A] mb-1">
                {item.age}
              </div>
              <div className="text-sm text-[#64748B]">{item.birth}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#94A3B8] text-sm mt-5">
          ※ 해당 학년도 모집 요강에 따라 변경될 수 있습니다.
        </p>
      </div>
    </section>
  );
}
