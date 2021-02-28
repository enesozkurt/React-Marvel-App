import { LIST_RESPONSE } from '../action-types/index';

const initialState = {
    data: [],
    info: {},
    episodes: [],
    page: 1
};

function getList(state = initialState, action) {
    switch (action.type) {
        case LIST_RESPONSE:
            if (action.payload['results']) {
                return {
                    ...state,
                    info: {},
                    page: state.page + 1,
                    data: [...state.data, ...action.payload.results]
                };
            } else {
                return { ...state, page: state.page, info: action.payload };
            }
        default:
            return state;
    }
}

export default getList;
