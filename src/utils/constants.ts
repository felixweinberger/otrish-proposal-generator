import { DeliveryCost } from "./deliveryCost";

const DELIVERY_COST_SCHEDULE_A = [
  { maxKg: 350, cost: 56 },
  { maxKg: 700, cost: 76 },
  { maxKg: 1050, cost: 100 },
  { maxKg: 1400, cost: 126 },
  { maxKg: 1750, cost: 143 },
  { maxKg: 2100, cost: 162 },
  { maxKg: 2450, cost: 166 },
  { maxKg: 2800, cost: 169 },
  { maxKg: 3500, cost: 173 },
  { maxKg: 3850, cost: 176 },
  { maxKg: 4200, cost: 180 },
  { maxKg: 4550, cost: 182 },
  { maxKg: 4900, cost: 184 },
  { maxKg: 5250, cost: 187 },
  { maxKg: 5600, cost: 189 },
  { maxKg: 5950, cost: 192 },
  { maxKg: 6300, cost: 194 },
  { maxKg: 6750, cost: 198 },
  { maxKg: 7000, cost: 203 },
  { maxKg: 7350, cost: 205 },
  { maxKg: 7700, cost: 208 },
  { maxKg: 8050, cost: 209 },
  { maxKg: 8400, cost: 211 },
  { maxKg: 8750, cost: 212 },
  { maxKg: 9100, cost: 215 },
  { maxKg: 9550, cost: 216 },
  { maxKg: 9800, cost: 219 },
  { maxKg: 10150, cost: 221 },
  { maxKg: 10500, cost: 222 },
  { maxKg: 10850, cost: 223 },
  { maxKg: 11200, cost: 224 },
  { maxKg: 11550, cost: 224 },
  { maxKg: 11900, cost: 226 },
  { maxKg: 12250, cost: 231 },
  { maxKg: 12600, cost: 235 },
  { maxKg: 13300, cost: 249 },
  { maxKg: 14000, cost: 258 },
  { maxKg: 14700, cost: 269 },
  { maxKg: 15400, cost: 280 },
  { maxKg: 16100, cost: 290 },
  { maxKg: 16700, cost: 298 },
  { maxKg: 17500, cost: 308 },
  { maxKg: 18200, cost: 318 },
  { maxKg: 18900, cost: 327 },
  { maxKg: 19600, cost: 338 },
  { maxKg: 23800, cost: 362 },
];

const DELIVERY_COST_SCHEDULE_B = [
  { maxKg: 350, cost: 58 },
  { maxKg: 700, cost: 85 },
  { maxKg: 1050, cost: 110 },
  { maxKg: 1400, cost: 140 },
  { maxKg: 1750, cost: 162 },
  { maxKg: 2100, cost: 183 },
  { maxKg: 2450, cost: 188 },
  { maxKg: 2800, cost: 193 },
  { maxKg: 3500, cost: 193 },
  { maxKg: 3850, cost: 211 },
  { maxKg: 4200, cost: 216 },
  { maxKg: 4550, cost: 222 },
  { maxKg: 4900, cost: 227 },
  { maxKg: 5250, cost: 232 },
  { maxKg: 5600, cost: 239 },
  { maxKg: 5950, cost: 244 },
  { maxKg: 6300, cost: 250 },
  { maxKg: 6750, cost: 254 },
  { maxKg: 7000, cost: 260 },
  { maxKg: 7350, cost: 265 },
  { maxKg: 7700, cost: 270 },
  { maxKg: 8050, cost: 276 },
  { maxKg: 8400, cost: 281 },
  { maxKg: 8750, cost: 287 },
  { maxKg: 9100, cost: 292 },
  { maxKg: 9550, cost: 297 },
  { maxKg: 9800, cost: 302 },
  { maxKg: 10150, cost: 308 },
  { maxKg: 10500, cost: 313 },
  { maxKg: 10850, cost: 318 },
  { maxKg: 11200, cost: 322 },
  { maxKg: 11550, cost: 324 },
  { maxKg: 11900, cost: 327 },
  { maxKg: 12250, cost: 335 },
  { maxKg: 12600, cost: 343 },
  { maxKg: 13300, cost: 358 },
  { maxKg: 14000, cost: 373 },
  { maxKg: 14700, cost: 389 },
  { maxKg: 15400, cost: 403 },
  { maxKg: 16100, cost: 417 },
  { maxKg: 16700, cost: 432 },
  { maxKg: 17500, cost: 447 },
  { maxKg: 18200, cost: 463 },
  { maxKg: 18900, cost: 478 },
  { maxKg: 19600, cost: 494 },
  { maxKg: 23800, cost: 519 },
];

const DELIVERY_COST_SCHEDULE_C = [
  { maxKg: 350, cost: 60 },
  { maxKg: 700, cost: 89 },
  { maxKg: 1050, cost: 122 },
  { maxKg: 1400, cost: 182 },
  { maxKg: 1750, cost: 180 },
  { maxKg: 2100, cost: 205 },
  { maxKg: 2450, cost: 210 },
  { maxKg: 2800, cost: 216 },
  { maxKg: 3500, cost: 229 },
  { maxKg: 3850, cost: 234 },
  { maxKg: 4200, cost: 242 },
  { maxKg: 4550, cost: 246 },
  { maxKg: 4900, cost: 253 },
  { maxKg: 5250, cost: 258 },
  { maxKg: 5600, cost: 265 },
  { maxKg: 5950, cost: 272 },
  { maxKg: 6300, cost: 277 },
  { maxKg: 6750, cost: 285 },
  { maxKg: 7000, cost: 290 },
  { maxKg: 7350, cost: 296 },
  { maxKg: 7700, cost: 301 },
  { maxKg: 8050, cost: 308 },
  { maxKg: 8400, cost: 314 },
  { maxKg: 8750, cost: 321 },
  { maxKg: 9100, cost: 326 },
  { maxKg: 9550, cost: 333 },
  { maxKg: 9800, cost: 338 },
  { maxKg: 10150, cost: 347 },
  { maxKg: 10500, cost: 355 },
  { maxKg: 10850, cost: 360 },
  { maxKg: 11200, cost: 369 },
  { maxKg: 11550, cost: 376 },
  { maxKg: 11900, cost: 383 },
  { maxKg: 12250, cost: 391 },
  { maxKg: 12600, cost: 400 },
  { maxKg: 13300, cost: 417 },
  { maxKg: 14000, cost: 437 },
  { maxKg: 14700, cost: 452 },
  { maxKg: 15400, cost: 471 },
  { maxKg: 16100, cost: 488 },
  { maxKg: 16700, cost: 507 },
  { maxKg: 17500, cost: 523 },
  { maxKg: 18200, cost: 542 },
  { maxKg: 18900, cost: 559 },
  { maxKg: 19600, cost: 576 },
  { maxKg: 23800, cost: 608 },
];

const DELIVERY_COST_SCHEDULE_D = [
  { maxKg: 350, cost: 64 },
  { maxKg: 700, cost: 97 },
  { maxKg: 1050, cost: 133 },
  { maxKg: 1400, cost: 170 },
  { maxKg: 1750, cost: 197 },
  { maxKg: 2100, cost: 224 },
  { maxKg: 2450, cost: 233 },
  { maxKg: 2800, cost: 244 },
  { maxKg: 3500, cost: 263 },
  { maxKg: 3850, cost: 273 },
  { maxKg: 4200, cost: 281 },
  { maxKg: 4550, cost: 291 },
  { maxKg: 4900, cost: 300 },
  { maxKg: 5250, cost: 311 },
  { maxKg: 5600, cost: 319 },
  { maxKg: 5950, cost: 330 },
  { maxKg: 6300, cost: 338 },
  { maxKg: 6750, cost: 348 },
  { maxKg: 7000, cost: 358 },
  { maxKg: 7350, cost: 368 },
  { maxKg: 7700, cost: 377 },
  { maxKg: 8050, cost: 385 },
  { maxKg: 8400, cost: 396 },
  { maxKg: 8750, cost: 404 },
  { maxKg: 9100, cost: 412 },
  { maxKg: 9550, cost: 424 },
  { maxKg: 9800, cost: 436 },
  { maxKg: 10150, cost: 447 },
  { maxKg: 10500, cost: 458 },
  { maxKg: 10850, cost: 471 },
  { maxKg: 11200, cost: 486 },
  { maxKg: 11550, cost: 492 },
  { maxKg: 11900, cost: 499 },
  { maxKg: 12250, cost: 508 },
  { maxKg: 12600, cost: 519 },
  { maxKg: 13300, cost: 540 },
  { maxKg: 14000, cost: 559 },
  { maxKg: 14700, cost: 580 },
  { maxKg: 15400, cost: 602 },
  { maxKg: 16100, cost: 622 },
  { maxKg: 16700, cost: 643 },
  { maxKg: 17500, cost: 662 },
  { maxKg: 18200, cost: 683 },
  { maxKg: 18900, cost: 702 },
  { maxKg: 19600, cost: 725 },
  { maxKg: 23800, cost: 764 },
];

const DELIVERY_COST_SCHEDULE_E = [
  { maxKg: 350, cost: 68 },
  { maxKg: 700, cost: 103 },
  { maxKg: 1050, cost: 142 },
  { maxKg: 1400, cost: 181 },
  { maxKg: 1750, cost: 209 },
  { maxKg: 2100, cost: 237 },
  { maxKg: 2450, cost: 249 },
  { maxKg: 2800, cost: 257 },
  { maxKg: 3500, cost: 277 },
  { maxKg: 3850, cost: 289 },
  { maxKg: 4200, cost: 298 },
  { maxKg: 4550, cost: 309 },
  { maxKg: 4900, cost: 318 },
  { maxKg: 5250, cost: 328 },
  { maxKg: 5600, cost: 339 },
  { maxKg: 5950, cost: 349 },
  { maxKg: 6300, cost: 358 },
  { maxKg: 6750, cost: 369 },
  { maxKg: 7000, cost: 380 },
  { maxKg: 7350, cost: 390 },
  { maxKg: 7700, cost: 399 },
  { maxKg: 8050, cost: 408 },
  { maxKg: 8400, cost: 420 },
  { maxKg: 8750, cost: 428 },
  { maxKg: 9100, cost: 437 },
  { maxKg: 9550, cost: 448 },
  { maxKg: 9800, cost: 462 },
  { maxKg: 10150, cost: 473 },
  { maxKg: 10500, cost: 484 },
  { maxKg: 10850, cost: 499 },
  { maxKg: 11200, cost: 515 },
  { maxKg: 11550, cost: 521 },
  { maxKg: 11900, cost: 528 },
  { maxKg: 12250, cost: 539 },
  { maxKg: 12600, cost: 549 },
  { maxKg: 13300, cost: 570 },
  { maxKg: 14000, cost: 592 },
  { maxKg: 14700, cost: 614 },
  { maxKg: 15400, cost: 636 },
  { maxKg: 16100, cost: 658 },
  { maxKg: 16700, cost: 679 },
  { maxKg: 17500, cost: 701 },
  { maxKg: 18200, cost: 722 },
  { maxKg: 18900, cost: 743 },
  { maxKg: 19600, cost: 765 },
  { maxKg: 23800, cost: 807 },
];

const DELIVERY_COST_SCHEDULE_F = [
  { maxKg: 350, cost: 68 },
  { maxKg: 700, cost: 125 },
  { maxKg: 1050, cost: 166 },
  { maxKg: 1400, cost: 209 },
  { maxKg: 1750, cost: 243 },
  { maxKg: 2100, cost: 277 },
  { maxKg: 2450, cost: 290 },
  { maxKg: 2800, cost: 300 },
  { maxKg: 3500, cost: 323 },
  { maxKg: 3850, cost: 336 },
  { maxKg: 4200, cost: 348 },
  { maxKg: 4550, cost: 358 },
  { maxKg: 4900, cost: 370 },
  { maxKg: 5250, cost: 382 },
  { maxKg: 5600, cost: 394 },
  { maxKg: 5950, cost: 405 },
  { maxKg: 6300, cost: 416 },
  { maxKg: 6750, cost: 427 },
  { maxKg: 7000, cost: 439 },
  { maxKg: 7350, cost: 450 },
  { maxKg: 7700, cost: 463 },
  { maxKg: 8050, cost: 474 },
  { maxKg: 8400, cost: 486 },
  { maxKg: 8750, cost: 498 },
  { maxKg: 9100, cost: 509 },
  { maxKg: 9550, cost: 521 },
  { maxKg: 9800, cost: 532 },
  { maxKg: 10150, cost: 544 },
  { maxKg: 10500, cost: 554 },
  { maxKg: 10850, cost: 566 },
  { maxKg: 11200, cost: 576 },
  { maxKg: 11550, cost: 589 },
  { maxKg: 11900, cost: 602 },
  { maxKg: 12250, cost: 613 },
  { maxKg: 12600, cost: 625 },
  { maxKg: 13300, cost: 650 },
  { maxKg: 14000, cost: 674 },
  { maxKg: 14700, cost: 697 },
  { maxKg: 15400, cost: 725 },
  { maxKg: 16100, cost: 735 },
  { maxKg: 16700, cost: 759 },
  { maxKg: 17500, cost: 770 },
  { maxKg: 18200, cost: 807 },
  { maxKg: 18900, cost: 832 },
  { maxKg: 19600, cost: 864 },
  { maxKg: 23800, cost: 940 },
];

export const DELIVERY_COST_SCHEDULES: {
  [key: string]: Array<DeliveryCost>;
} = {
  a: DELIVERY_COST_SCHEDULE_A,
  b: DELIVERY_COST_SCHEDULE_B,
  c: DELIVERY_COST_SCHEDULE_C,
  d: DELIVERY_COST_SCHEDULE_D,
  e: DELIVERY_COST_SCHEDULE_E,
  f: DELIVERY_COST_SCHEDULE_F,
};

export const SCHEDULE_BY_POSTCODE_PREFIX: {
  [key: string]: string;
} = {
  "40": "a",
  "46": "a",
  "47": "a",
  "48": "a",
  "49": "a",
  "50": "a",
  "51": "a",
  "52": "a",
  "53": "a",
  "31": "b",
  "32": "b",
  "33": "b",
  "38": "b",
  "39": "b",
  "41": "b",
  "42": "b",
  "43": "b",
  "44": "b",
  "45": "b",
  "54": "b",
  "55": "b",
  "56": "b",
  "57": "b",
  "89": "b",
  "10": "c",
  "11": "c",
  "12": "c",
  "13": "c",
  "14": "c",
  "15": "c",
  "20": "c",
  "21": "c",
  "22": "c",
  "23": "c",
  "24": "c",
  "25": "c",
  "26": "c",
  "27": "c",
  "28": "c",
  "30": "c",
  "34": "c",
  "35": "c",
  "36": "c",
  "37": "c",
  "80": "c",
  "81": "c",
  "82": "c",
  "83": "c",
  "84": "c",
  "85": "c",
  "86": "c",
  "87": "c",
  "88": "c",
  "90": "c",
  "91": "c",
  "92": "c",
  "93": "c",
  "94": "c",
  "95": "c",
  "98": "c",
  "70": "d",
  "71": "d",
  "72": "d",
  "73": "d",
  "74": "d",
  "75": "d",
  "96": "d",
  "97": "d",
  "99": "d",
  "60": "e",
  "61": "e",
  "62": "e",
  "63": "e",
  "64": "e",
  "65": "e",
  "66": "e",
  "67": "f",
  "68": "f",
  "69": "f",
};
