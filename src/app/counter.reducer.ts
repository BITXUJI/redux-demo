import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
export interface IAppState {
    count: number;
}
export const initialState: IAppState = { count: 0 };

// export const counterReducer = createReducer(
//     initialState,
//     on(increment, (state) => ({ ...state, count: state.count + 1 })),
//     on(decrement, (state) => ({ ...state, count: state.count - 1 })),
//     on(reset, (state) => ({ ...state, count: 0 }))
// );

// export function counterReducer(state = initialState, action: any) {
//     switch (action.type) {
//         case increment.type:
//             // case increment:
//             return { ...state, count: state.count + 1 };
//         case decrement.type:
//             return { ...state, count: state.count - 1 };
//         case reset.type:
//             return { ...state, count: 0 };
//         default:
//             return state;
//     }

// }
export function counterReducer(state = initialState, action: any) {
    switch (action.type) {
        case increment.type:
            return Object.assign({}, state, { count: state.count + 1 });
        case decrement.type:
            return Object.assign({}, state, { count: state.count - 1 });
        case reset.type:
            return Object.assign({}, state, { count: 0 });
        default:
            return state;
    }
}
