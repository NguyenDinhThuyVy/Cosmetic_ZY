export const purchasesStatus = {
  inCart: 1,
  outCart: 0
} as const
export const orderStatus = {
  all: 0,
  waitForConfirmation: 1,
  waitForGetting: 2,
  inProgress: 3,
  delivered: 4,
  cancelled: 5
} as const
