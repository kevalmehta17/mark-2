// This is the shape of one user record
export interface User {
  id: number;
  userName: string;
  cityName: string;
  ageData: number;
}

// This is the shape of the form's controlled inputs
// ageData is string here because HTML inputs always give you strings
export interface FormData {
  userName: string;
  cityName: string;
  ageData: string;
}

// Mode is a union type — it can only ever be these two values
export type Mode = 'save' | 'update';

// Active filter shape
export interface ActiveFilter {
  field: string;
  value: string;
}

// This is a generic type for the keys of User that are filterable
// Excludes 'id' because we never filter by id
export type FilterableField = keyof Omit<User, 'id'>;