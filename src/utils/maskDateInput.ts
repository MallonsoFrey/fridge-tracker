export type MaskDateInputResult = {
  masked: string;
  isComplete: boolean;
};

export function maskDateInput(raw: string): MaskDateInputResult {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  const dd = digits.slice(0, 2);
  const mm = digits.slice(2, 4);
  const yyyy = digits.slice(4, 8);

  let out = dd;
  if (mm.length) out += `/${mm}`;
  if (yyyy.length) out += `/${yyyy}`;

  return { masked: out, isComplete: digits.length === 8 };
}

