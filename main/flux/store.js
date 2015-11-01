import AppDispatcher from './dispatcher';
import {EventEmitter} from 'events';
import IroConstants from './constants';
import _ from 'lodash';

let CHANGE_EVENT = 'change';
let iro_data_storage = {};

let updateSelectedColor = (name, kana, value) => {
    iro_data_storage['selectedColor'] = {name, kana, value};
};

let IroStore = _.assign({}, EventEmitter.prototype, {
    getSelectedColor() {
        return iro_data_storage['selectedColor'];
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case IroConstants.IRO_COLOR_SELECTED:
            updateSelectedColor(action.name, action.kana, action.value);
            IroStore.emitChange();
            break;
    }
});

export default IroStore;