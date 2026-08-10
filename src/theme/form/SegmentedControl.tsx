"use client";

import { useId, type ReactNode } from "react";

import cn from "@/utils/classnames";

export interface SegmentedControlOption<Value extends string = string> {
  value: Value;
  label: ReactNode;
  title?: string;
  disabled?: boolean;
}

interface SegmentedControlProps<Value extends string = string> {
  label: string;
  options: SegmentedControlOption<Value>[];
  value: Value;
  setValue: (value: Value) => void;
  name?: string;
  className?: string;
  compact?: boolean;
}

export default function SegmentedControl<Value extends string = string>({
  label,
  options,
  value,
  setValue,
  name,
  className,
  compact = false,
}: SegmentedControlProps<Value>) {
  const generatedName = useId();

  return (
    <fieldset className={cn("min-w-0 border-0 p-0", className)}>
      <legend className="sr-only">{label}</legend>
      <div
        className={cn(
          "grid bg-surface-muted",
          compact ? "rounded-md p-0.5" : "rounded-lg p-1",
        )}
        style={{
          gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
        }}
      >
        {options.map((option) => (
          <label
            key={option.value}
            title={option.title}
            className={cn(
              "min-w-0",
              option.disabled
                ? "cursor-not-allowed opacity-45"
                : "cursor-pointer",
            )}
          >
            <input
              type="radio"
              name={name ?? generatedName}
              value={option.value}
              checked={option.value === value}
              disabled={option.disabled}
              onChange={() => setValue(option.value)}
              className="peer sr-only"
            />
            <span
              className={cn(
                "flex min-w-0 items-center justify-center text-center font-heading font-bold text-muted transition peer-checked:bg-white peer-checked:text-ink peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-ink/10 peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40",
                compact
                  ? "min-h-7 rounded-sm px-1.5 text-[0.68rem]"
                  : "min-h-9 rounded-md px-2 text-xs",
              )}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
