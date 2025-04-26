"use client";

export default function AdminStepper({
  steps,
  activeStep,
}: {
  steps: string[];
  activeStep: number;
}) {
  return (
    <div className="flex overflow-x-auto no-scrollbar mb-8 items-center justify-center">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center w-24">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                index === activeStep
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`text-xs mt-2 text-center ${
                index === activeStep
                  ? "font-semibold text-blue-600"
                  : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
          {index !== steps.length - 1 && (
            <div className="h-0.5 w-8 bg-gray-300 mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
}
