export interface PasswordStrengthUtils {
  score: number;
  level: 'weak' | 'fair' | 'good' | 'strong';
  color: string;
  checks: {
    minLength: boolean;
    hasUpperCase: boolean;
    hasNumber: boolean;
    hasSpecialChar: boolean;
  };
}

export const calculatePasswordStrength = (password: string): PasswordStrengthUtils => {
  let score = 0;

  const checks = {
    minLength: password.length >= 6,
    hasUpperCase: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  if (checks.minLength) score += 2;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;

  if (checks.hasUpperCase) score += 2;
  if (checks.hasNumber) score += 2;
  if (checks.hasSpecialChar) score += 2;

  const uniqueChars = new Set(password).size;
  if (uniqueChars >= 8) score += 1;

  let level: PasswordStrengthUtils['level'];
  let color: string;

  if (score <= 2) {
    level = 'weak';
    color = 'red.500';
  } else if (score <= 4) {
    level = 'fair';
    color = 'orange.500';
  } else if (score <= 7) {
    level = 'good';
    color = 'yellow.500';
  } else {
    level = 'strong';
    color = 'green.500';
  }

  return { score, level, color, checks };
};
