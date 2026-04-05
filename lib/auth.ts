type ClerkFieldErrorLike = {
  message?: string;
};

type ClerkErrorsLike = {
  fields?: object;
  errors?: Array<ClerkFieldErrorLike | undefined>;
};

export function getClerkFieldError(
  errors: ClerkErrorsLike | undefined,
  ...keys: string[]
) {
  if (!errors) return null;

  for (const key of keys) {
    const message = (
      errors.fields as
        | Record<string, ClerkFieldErrorLike | undefined>
        | undefined
    )?.[key]?.message;
    if (message) return message;
  }

  return errors.errors?.find((error) => error?.message)?.message ?? null;
}

export function isEmailValid(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function getPasswordValidationMessage(value: string) {
  if (!value.trim()) return "Enter your password.";
  if (value.length < 8) return "Use at least 8 characters.";
  return null;
}

export function getEmailValidationMessage(value: string) {
  if (!value.trim()) return "Enter your email address.";
  if (!isEmailValid(value)) return "Enter a valid email address.";
  return null;
}

export function getVerificationCodeValidationMessage(value: string) {
  if (!value.trim()) return "Enter the verification code.";
  if (!/^\d{6}$/.test(value.trim())) return "Enter the 6-digit code.";
  return null;
}

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}
