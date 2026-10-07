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
  heatMode: HeatMode
  createdAt: number
  updatedAt: number
}

export const HEAT_MODES: HeatMode[] = ['地暖', '散热器']

/** 各供热方式的室温基准（℃）：地暖 20、散热器 18 */
export const ROOM_TARGET_BY_MODE: Record<HeatMode, number> = {
  地暖: 20,
  散热器: 18
}

/** 未登记供热方式时的兜底室温基准（℃） */
export const FALLBACK_ROOM_TARGET_C = 20

/** 按楼栋供热方式取室温基准；楼栋缺失或未登记方式时按 20℃ 兜底 */
export function roomTargetCOf(building: Pick<Building, 'heatMode'> | null | undefined): number {
  const mode = building?.heatMode
  return mode === '地暖' || mode === '散热器' ? ROOM_TARGET_BY_MODE[mode] : FALLBACK_ROOM_TARGET_C
}

/** 是否走了兜底基准（楼栋缺失或未登记供热方式），用于界面提示 */
export function isRoomTargetFallback(building: Pick<Building, 'heatMode'> | null | undefined): boolean {
  const mode = building?.heatMode
  return mode !== '地暖' && mode !== '散热器'
}

export interface BuildingDraft {
  stationId: string
  name: string
  areaM2: number
  floors: number
  units: number
  heatMode: HeatMode
}

export const EMPTY_BUILDING_DRAFT: BuildingDraft = {
  stationId: '',
  name: '',
  areaM2: 0,
  floors: 0,
  units: 0,
  heatMode: '地暖'
}
