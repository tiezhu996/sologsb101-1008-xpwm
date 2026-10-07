/** 实测：某阀门某日的一组流量与三温读数 */
export interface Measure {
  id: string
  valveId: string
  /** 实测日期 YYYY-MM-DD */
  date: string
  /** 实测流量（m³/h） */
  flowM3h: number
  supplyTempC: number
  returnTempC: number
  roomTempC: number
  operator: string
  createdAt: number
  updatedAt: number
}

export interface MeasureDraft {
  valveId: string
  date: string
  flowM3h: number
  supplyTempC: number
  returnTempC: number
  roomTempC: number
  operator: string
}

export const EMPTY_MEASURE_DRAFT: MeasureDraft = {
  valveId: '',
  date: '',
  flowM3h: 0,
  supplyTempC: 50,
  returnTempC: 40,
  roomTempC: 20,
  operator: ''
}

/** 默认室温基准（℃）：楼栋未登记供热方式时的兜底值；已登记楼栋按供热方式取 20℃（地暖）/ 18℃（散热器），见 building.ts */
export const ROOM_TARGET_C = 20

export interface MeasureBatchRow {
  valveId: string
  date: string
  flowM3h: number
  supplyTempC: number
  returnTempC: number
  roomTempC: number
  operator: string
}
