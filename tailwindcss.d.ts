declare module 'tailwindcss/lib/util/flattenColorPalette' {
  const flattenColorPalette: (colors: Record<string, string | number>) => Record<string, string | number>;
  export default flattenColorPalette;
}
