import { EMAIL } from '../config/brand';

/** mailto href — assembled at runtime to avoid plain-text email in static markup. */
export function getMailtoHref(): string {
  const [user, domain] = EMAIL.split('@');
  return `mailto:${user}@${domain}`;
}

export const EMAIL_CONTACT_LABEL = 'Email our team';

export function openContactEmail(): void {
  window.location.href = getMailtoHref();
}
