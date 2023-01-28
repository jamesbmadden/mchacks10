export interface Course {
  department: string,
  code: number,
  instructor?: string,
  location?: string,
  startTime: number,
  endTime: number,
  days: boolean[]
}