export function nowToHHMM() {
  const d = new Date();
  return `${d.getHours()} : ${d.getMinutes().toString().padStart(2, '0')}`;
}

export function dateToDDMM(date: Date) {
  // Create a new Date object if no date is provided
  if (!date) {
    date = new Date();
  }

  // Extract the day and month
  const day = date.getDate();
  const month = date.getMonth() + 1; // Add 1 because getMonth() is zero-based

  // Return the formatted date string
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2,'0')}`;
}
export const DAYS = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];
