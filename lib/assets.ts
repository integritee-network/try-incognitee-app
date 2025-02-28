export const isAssetEqual = (a: string | null | undefined, b: string | null | undefined) =>
  (!a && !b) || a === b; // Treat null, "", and undefined as equivalent
