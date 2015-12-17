import {Dispatcher} from 'flux';

let Enum = (...args) => args.reduce((r, i) => (r[i] = i, r), {});

export const Constants = Enum("IRO_COLOR_SELECTED");

export const AppDispatcher = new Dispatcher();

export const Actions =  {
    /**
     * @param  {string} name Name of the color
     * @param  {number} value
     */
    updatePageNav(name, kana, value) {
        AppDispatcher.dispatch({
            actionType: Constants.IRO_COLOR_SELECTED,
            name, kana, value
        });
    }
};
