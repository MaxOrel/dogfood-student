export const TABS_ID = {
    CHEAP: "cheap",
    LOW: "low",
    DISCOUNT: "discount",
}
export type Tab = {
    id: string,
    title: string,
}
export const TABS: Tab[] = [
    {
        id: TABS_ID.CHEAP,
        title: "Сначала дешевые",
    },
    {
        id: TABS_ID.LOW,
        title: "Сначала дорогие",
    },
    {
        id: TABS_ID.DISCOUNT,
        title: "По скидке"
    }
]