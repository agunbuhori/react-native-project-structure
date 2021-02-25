import { TYPES } from "@store/actions/GlobalActions";

export interface Props {
    payload: any,
    type: string,
}

const errorReducer = (state = {}, { payload, type }: Props) => {
    if (type === TYPES.GLOBAL_RESET) {
      return {};
    }
  
    const matches = /(.*)_(REQUEST|ERROR)/.exec(type);
  
    if (matches) {
      const [, requestName, requestState] = matches;
      return {
        ...state,
        [requestName]: requestState === 'ERROR' ? payload.error : null,
      };
    }
  
    const matchesReset = /(.*)_RESET/.exec(type);
  
    if (matchesReset) {
      const [, requestName] = matchesReset;
      const newState: {[requestName: string]: any} = { ...state };
      delete newState[requestName];
      return newState;
    }
  
    return state;
  };
  
  export default errorReducer;