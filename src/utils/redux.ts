
interface IActionType {
    type: string,
    patload: any;
}
export function isActionPending(action: IActionType) { return action.type.endsWith('pending') }
export function isActionRejected(action: IActionType) { return action.type.endsWith('rejected') }


export function getActionName(actionType: string) {
    return actionType.split('/')[1]
}