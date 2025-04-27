// src/components/Education.tsx
export default function Education() {
  const items = [
    {
      degree: "MCA, Computer Applications (CGPA 9.3)",
      school: "Kalyani Government Engineering College",
      year: "2018–2021",
    },
    {
      degree: "B.Sc. in Computer Science",
      school: "University of Calcutta",
      year: "2015–2018",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="space-y-6">
        {items.map(({ degree, school, year }) => (
          <div key={degree} className="border-l-4 pl-4 border-blue-600">
            <h3 className="text-lg font-semibold">{degree}</h3>
            <p className="text-sm opacity-80">
              {school} &middot; {year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
