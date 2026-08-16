type ClassValue = string | false | null | undefined;

export default function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
