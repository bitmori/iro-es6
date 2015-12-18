import {Enum, Factory} from "reduxette";

export const Constants = Enum("IRO_COLOR_SELECTED");

let updater = (state, action) => {
    state = state || {};
    state['actionType'] = action.actionType;
    switch (action.actionType) {
        case Constants.IRO_COLOR_SELECTED:
            state[Constants.IRO_COLOR_SELECTED] = action.payload;
            break;
        default:
            break;
    }
    return state;
};

export const Reduxette = Factory(updater);

export const Actions = {
    updatePageNav(name, kana, value) {
        Reduxette.dispatch({
            actionType: Constants.IRO_COLOR_SELECTED,
            payload: {name, kana, value}
        });
    }
};
