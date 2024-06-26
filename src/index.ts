import ExpoPropertiesModule from './ExpoPropertiesModule';

export function setString(key: string, value: string): void {
  return ExpoPropertiesModule.setString(key, value);
}

export function getString(key: string): string | undefined {
  return ExpoPropertiesModule.getString(key);
}

export function setNumber(key: string, value: number): void {
  return ExpoPropertiesModule.setNumber(key, value);
}

export function getNumber(key: string): number {
  return ExpoPropertiesModule.getNumber(key);
}

export function setBoolean(key: string, value: boolean): void {
  return ExpoPropertiesModule.setBoolean(key, value);
}

export function getBoolean(key: string): boolean {
  return ExpoPropertiesModule.getBoolean(key);
}