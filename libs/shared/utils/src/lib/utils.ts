import { AppointmentStatus } from '@hospital/types';

// ─── Date helpers ─────────────────────────────────────────────────────────────

export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatTimeSlot(startTime: string, endTime: string): string {
  return `${startTime} – ${endTime}`;
}

export function isSlotInFuture(date: string, startTime: string): boolean {
  const slotDateTime = new Date(`${date}T${startTime}:00`);
  return slotDateTime > new Date();
}

// ─── Name helpers ─────────────────────────────────────────────────────────────

export function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

// ─── Status helpers ───────────────────────────────────────────────────────────

export function getStatusLabel(status: AppointmentStatus): string {
  const labels: Record<AppointmentStatus, string> = {
    [AppointmentStatus.Pending]: 'Pending',
    [AppointmentStatus.Confirmed]: 'Confirmed',
    [AppointmentStatus.Cancelled]: 'Cancelled',
    [AppointmentStatus.Completed]: 'Completed',
  };
  return labels[status];
}

export function isAppointmentEditable(status: AppointmentStatus): boolean {
  return status === AppointmentStatus.Pending || status === AppointmentStatus.Confirmed;
}

// ─── Validators ───────────────────────────────────────────────────────────────

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
  return /^\+?[\d\s\-().]{7,15}$/.test(phone);
}
