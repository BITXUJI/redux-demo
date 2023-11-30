import { Map } from 'immutable';
import { increment, decrement, reset } from './counter.actions';

// Define the initial state as an Immutable Map
const initialState = Map({ count: 0 });

export function counterReducer(state = initialState, action: any) {
    switch (action.type) {
        case increment.type:
            // Increment count using Immutable's update method
            return state.update('count', count => count + 1);
        case decrement.type:
            // Decrement count using Immutable's update method
            return state.update('count', count => count - 1);
        case reset.type:
            // Reset count to 0
            return state.set('count', 0);
        default:
            return state;
    }
}
