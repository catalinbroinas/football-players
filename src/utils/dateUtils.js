
export function getAge(dob) {
  const birthDate = new Date(dob);
  const diff = Date.now() - birthDate.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
