"use client";

import { useCertificationsStore } from "@/store/certificationsStore";
import { useAwardsStore } from "@/store/awardsStore";

export default function CertificationsAwards() {
  const { certifications } = useCertificationsStore();
  const { awards } = useAwardsStore();

  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Certifications & Awards
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Certifications</h3>
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <li key={index} className="list-disc ml-4">
                {cert.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Awards</h3>
          <div className="space-y-4">
            {awards.map((award) => (
              <div
                key={award.id}
                className="border rounded-lg p-4 transition-colors duration-300"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                  color: "var(--card-text)",
                }}
              >
                <p className="font-semibold mb-1">{award.title}</p>
                <p className="text-sm text-muted">
                  {award.issuer} · {award.date}
                </p>
                <p className="text-sm mt-2">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
