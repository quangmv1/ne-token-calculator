declare module "*.json" {
    const value: Record<string, unknown>;
    export default value;
  }

  declare module '*.png' {
    const value: string;
    export default value;
  }