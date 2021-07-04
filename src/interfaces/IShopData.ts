import { IShopItem } from './IShopItem'

export interface IShopData {
    id: number
    title: string
    routeName: string
    items: IShopItem[]
}
