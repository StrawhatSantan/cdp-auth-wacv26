export type SummaryRow = {
  method: string;
  pErr: number;
  pMiss: number;
  pFa: number;
  highlight?: boolean;
};

export const summaryRows: SummaryRow[] = [
  { method: "NCC", pErr: 0.286, pMiss: 0.301, pFa: 0.273 },
  { method: "SSIM", pErr: 0.275, pMiss: 0.281, pFa: 0.269 },
  { method: "[4]", pErr: 0.091, pMiss: 0.118, pFa: 0.064 },
  { method: "Ours", pErr: 0.023, pMiss: 0.005, pFa: 0.005, highlight: true },
];

export type MethodComparisonRow = {
  method: string;
  pErr: number;
  pMissHp55: number;
  pMissHp76: number;
  pMissMean: number;
  pFaHp55_55: number;
  pFaHp55_76: number;
  pFaHp76_76: number;
  pFaHp76_55: number;
  pFaMean: number;
  highlight?: boolean;
};

export const methodComparisonRows: MethodComparisonRow[] = [
  {
    method: "NCC",
    pErr: 0.286,
    pMissHp55: 0.292,
    pMissHp76: 0.31,
    pMissMean: 0.301,
    pFaHp55_55: 0.3,
    pFaHp55_76: 0.361,
    pFaHp76_76: 0.264,
    pFaHp76_55: 0.201,
    pFaMean: 0.273,
  },
  {
    method: "SSIM",
    pErr: 0.275,
    pMissHp55: 0.264,
    pMissHp76: 0.3,
    pMissMean: 0.281,
    pFaHp55_55: 0.292,
    pFaHp55_76: 0.285,
    pFaHp76_76: 0.292,
    pFaHp76_55: 0.21,
    pFaMean: 0.269,
  },
  {
    method: "Chaban et al. (retrained)",
    pErr: 0.091,
    pMissHp55: 0.125,
    pMissHp76: 0.111,
    pMissMean: 0.118,
    pFaHp55_55: 0.097,
    pFaHp55_76: 0.16,
    pFaHp76_76: 0,
    pFaHp76_55: 0,
    pFaMean: 0.064,
  },
  {
    method: "Ours",
    pErr: 0.023,
    pMissHp55: 0.049,
    pMissHp76: 0.035,
    pMissMean: 0.005,
    pFaHp55_55: 0,
    pFaHp55_76: 0.014,
    pFaHp76_76: 0.007,
    pFaHp76_55: 0,
    pFaMean: 0.042,
    highlight: true,
  },
];

export const confusionLabels = [
  "HP55",
  "HP76",
  "HP55_55",
  "HP55_76",
  "HP76_76",
  "HP76_55",
];

export const confusionMatrix = [
  [95, 5, 0, 0, 0, 0],
  [3, 97, 0, 0, 0, 0],
  [0, 0, 83, 15, 1, 1],
  [1, 0, 14, 83, 1, 1],
  [0, 1, 1, 1, 89, 8],
  [0, 0, 2, 2, 19, 77],
];

export const unseenCounterfeitRows = [
  { type: "Known counterfeit", pErr: 0.012, pMiss: 0.024, pFa: 0 },
  { type: "Unknown counterfeit", pErr: 0.012, pMiss: 0.024, pFa: 0 },
];

export const reconstructionRows = [
  { configuration: "Pretrained VAE", mse: 0.581 },
  { configuration: "Fine-tuned VAE", mse: 0.075, highlight: true },
];

export const templateAblationRows = [
  { configuration: "No template input", pErr: 0.66, pMiss: 0.43, pFa: 0.2 },
  {
    configuration: "With template input",
    pErr: 0.023,
    pMiss: 0.042,
    pFa: 0.005,
    highlight: true,
  },
];

export const identityAblationRows = [
  { representation: "Printer index-based", pErr: 0.521, pMiss: 0.962, pFa: 0.082 },
  { representation: "Appearance-based text", pErr: 0.035, pMiss: 0.063, pFa: 0.001 },
  {
    representation: "Printer information text",
    pErr: 0.023,
    pMiss: 0.042,
    pFa: 0.005,
    highlight: true,
  },
];
