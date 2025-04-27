// components/CustomSelect.tsx
interface CustomSelectProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | undefined)[];
  className?: string;
}

export function CustomSelect({
  label,
  id,
  value,
  onChange,
  options,
  className = "",
}: CustomSelectProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-sm mb-1 font-medium">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 rounded text-sm border w-full"
        style={{
          backgroundColor: "var(--card-bg)",
          color: "var(--foreground)",
          borderColor: "var(--card-border)",
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
