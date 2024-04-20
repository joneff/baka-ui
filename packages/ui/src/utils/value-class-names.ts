export const valueClassNames = (value: any): string | string[] | null =>
  Array.isArray(value)
    ? value.map((v, index) => `value-${index}--${v}`)
    : value
    ? `value--${value}`
    : null;
