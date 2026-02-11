// ─── Enums ────────────────────────────────────────────────────────────────────

export enum AppointmentStatus {
  Pending = 'PENDING',
  Confirmed = 'CONFIRMED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
}

export enum Specialty {
  GeneralPractice = 'GENERAL_PRACTICE',
  Cardiology = 'CARDIOLOGY',
  Dermatology = 'DERMATOLOGY',
  Neurology = 'NEUROLOGY',
  Orthopedics = 'ORTHOPEDICS',
  Pediatrics = 'PEDIATRICS',
}

// ─── Core domain models ───────────────────────────────────────────────────────

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string; // ISO 8601 date string
  createdAt: string;
}

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  specialty: Specialty;
  availableSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  doctorId: string;
  date: string;       // ISO 8601 date string e.g. "2025-06-15"
  startTime: string;  // "09:00"
  endTime: string;    // "09:30"
  isBooked: boolean;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  slotId: string;
  status: AppointmentStatus;
  reason: string;
  notes?: string;
  createdAt: string;
}

// ─── API response wrappers ────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
