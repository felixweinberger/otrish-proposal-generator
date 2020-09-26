import {
  DELIVERY_COST_SCHEDULES,
  SCHEDULE_BY_POSTCODE_PREFIX,
} from "./constants";

export interface DeliveryCost {
  maxKg: number;
  cost: number;
}

export const getDeliveryCostScheduleForPostCode = (postCode: string) => {
  const schedules = DELIVERY_COST_SCHEDULES;
  const postCodeScheduleMap = SCHEDULE_BY_POSTCODE_PREFIX;

  let prefixLength = postCode.length;
  let relevantScheduleKey = postCodeScheduleMap[postCode];
  while (prefixLength > 0 && !relevantScheduleKey) {
    const prefix = postCode.substr(0, prefixLength);

    relevantScheduleKey = postCodeScheduleMap[prefix];

    // Try again with a wider prefix
    prefixLength -= 1;
  }

  if (!relevantScheduleKey) return null;
  const relevantSchedule = schedules[relevantScheduleKey];
  return relevantSchedule.sort((a, b) => a.maxKg - b.maxKg);
};

export const getDeliveryCostForWeightAndSchedule = (
  weightKg: number,
  schedule: DeliveryCost[]
) => {
  let i = 0;
  while (i < schedule.length && schedule[i].maxKg < weightKg) {
    i++;
  }
  if (i >= schedule.length) return null;
  return schedule[i].cost;
};

export const getDeliveryCost = (
  totalWeightKg: number,
  postCode: string,
  shouldDeliver: boolean
) => {
  if (!shouldDeliver) return 0;
  const schedule = getDeliveryCostScheduleForPostCode(postCode);
  if (!schedule) return null;
  return getDeliveryCostForWeightAndSchedule(totalWeightKg, schedule);
};
