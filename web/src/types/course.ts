export interface Course {
  department: string,
  code: number,
  instructor?: string,
  startTime: number,
  endTime: number,
  days: boolean[]
}