import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  error?: string;
  required?: boolean;
};

type InputFieldProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };

export function InputField({ label, error, required, id, ...props }: InputFieldProps) {
  const fieldId = id ?? props.name;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={fieldId} className="font-body text-sm text-charcoal">
        {label} {required && <span className="text-gold-deep">*</span>}
      </label>
      <input
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className="rounded-lg border border-sand bg-white px-4 py-3 font-body text-charcoal outline-none transition-colors focus:border-sage focus-visible:ring-2 focus-visible:ring-sage/50"
        {...props}
      />
      {error && (
        <p id={`${fieldId}-error`} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

type TextareaFieldProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { rows?: number };

export function TextareaField({ label, error, required, id, ...props }: TextareaFieldProps) {
  const fieldId = id ?? props.name;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={fieldId} className="font-body text-sm text-charcoal">
        {label} {required && <span className="text-gold-deep">*</span>}
      </label>
      <textarea
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className="rounded-lg border border-sand bg-white px-4 py-3 font-body text-charcoal outline-none transition-colors focus:border-sage focus-visible:ring-2 focus-visible:ring-sage/50"
        {...props}
      />
      {error && (
        <p id={`${fieldId}-error`} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
