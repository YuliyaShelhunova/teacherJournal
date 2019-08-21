import { RecordsAction } from "../actions/record.actions";

export const initialRecordsState = {};

const recordReducer = (
  state = initialRecordsState,
  action: RecordsAction
) => {
  switch (action.type) {
    case "GET_RECORDS_SUCCESS": {
      return { ...state, records: action.payload.records, info: action.payload.info };
    }
    case "UPDATE_RECORDS_SUCCESS": {
      return { ...state, record: action.payload };
    }
    case "SAVE_RECORDS_SUCCESS": {
      return { ...state, message: action.payload };
    }

    default:
      return state;
  }
};

export { recordReducer };
