/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export interface LottieViewState {}

export interface colorFiltersItem {
  keypath: string;
  color: string
}

export interface layersItem {
  "ddd"?: number;
  "ind"?: number;
  "ty"?: number;
  "nm"?: string;
  "sr"?: number;
  "ks": object;
  "ao"?: number;
  "shapes": Array<{ [key: string]: string | number }>
  "ip"?: number;
  "op"?: number;
  "st"?: number;
  "bm"?: number;
  [key: string]: string | number | object | [];
}

export type AnimationObject = {
  v: string
  fr: number
  ip: number
  op: number
  w: number
  h: number
  nm?: string
  ddd?: number
  assets: AnimationAssets[]
  layers: layersItem[]
  markers?: Object[]
}

export type AnimationAssets = {
  id: string
  w: number
  h: number
  u: string
  p: string
  e: number
}

export interface LottieViewProps {
  resizeMode: string
  renderMode: string
  sourceName: string
  sourceJson: string
  sourceURL: string
  imageAssetsFolder: string
  progress: number
  speed: number
  loop: boolean
  autoPlay: boolean
  enableMergePathsAndroidForKitKatAndAbove: boolean
  hardwareAccelerationAndroid: boolean
  cacheComposition: boolean
  colorFilters: Array<colorFiltersItem>
}
export enum LOTTLE_STRING{
  onStateChanged='onStateChanged',
  progress='progress',
  speed='speed',
  loop='loop',
  autoPlay='autoPlay',
  onAnimationFinish='onAnimationFinish',
  http='http',
  contentType='Content-Type',
  json='application/json',
  canvas='canvas',
  DOMLoaded='DOMLoaded',
  colorFilters='colorFilters',
  complete='complete',
  play='play',
  reset='reset',
  pause='pause',
  resume='resume'

}