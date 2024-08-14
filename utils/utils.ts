export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isPhone(phone: string): boolean {
  const phoneRegex = /^\+77\d{8,12}$/;
  return phoneRegex.test(phone);
}

export function goTo(url: string) {
  const a = document.createElement('a')
  a.href = url;
  a.target = '_blank';
  a.click()
}