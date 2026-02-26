interface StatusCardProps {
  label: string;
  value: string;
  color: string;
}

export default function StatusCard({ label, value, color }: StatusCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-4">
      <p className="text-xs text-foreground/50 mb-1">{label}</p>
      <p className={`text-2xl font-bold font-mono ${color}`}>{value}</p>
    </div>
  );
}
