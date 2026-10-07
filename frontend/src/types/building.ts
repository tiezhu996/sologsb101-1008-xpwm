/** 楼栋：换热站下的用热单体 */
export type HeatMode = '地暖' | '散热器'

export interface Building {
  id: string
  stationId: string
  name: string
  /** 建筑面积（m²） */
  areaM2: number
  floors: number
  /** 单元数 */
  units: number
  /** 供热方式；空串表示未登记（室温基准按 20℃ 计并提示补登） */
  heatMode: HeatMode | ''
  createdAt: number
  updatedAt: number
}

export const HEAT_MODES: HeatMode[] = ['地暖', '散热器']

export interface BuildingDraft {
  stationId: string
  name: string
  areaM2: number
  floors: number
  units: number
  heatMode: HeatMode | ''
}

export const EMPTY_BUILDING_DRAFT: BuildingDraft = {
  stationId: '',
  name: '',
  areaM2: 0,
  floors: 0,
  units: 0,
  heatMode: ''
}
