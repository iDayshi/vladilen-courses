import { presentValue } from './globalvalue'

export const totalDonat = () => {
   let totalSumDonat = Number(presentValue.slice(0, presentValue.length-1))
   Object.values(localStorage).forEach((value) => {
      totalSumDonat += Number(value)
  })
  return totalSumDonat
}

