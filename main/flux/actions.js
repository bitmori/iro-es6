import AppDispatcher from './dispatcher';
import IroConstants from './constants';

export default {
    /**
     * @param  {string} name Name of the color
     * @param  {number} value
     */
    updatePageNav(name, kana, value) {
        AppDispatcher.dispatch({
            actionType: IroConstants.IRO_COLOR_SELECTED,
            name, kana, value
        });
    }
};