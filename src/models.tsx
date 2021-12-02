export interface SnackbarModel {
  open: boolean,
  severity: 'error' | 'info' | 'success' | 'warning',
  message: string,
}