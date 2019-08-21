import { SubjectAction } from "../actions/subject.actions";
const initialSubjectState = {};
const subjectReducer = (
    state = initialSubjectState,
    action: SubjectAction) => {
    switch (action.type) {
        case "GET_SUBJECTS_SUCCESS": {
            return { ...state, subjects: action.payload }
        }
        case "GET_SUBJECTS": {
            return { ...state };
        }
        case "ADD_SUBJECT": {
            return { ...state };
        }
        case "ADD_SUBJECT_SUCCESS": {
            state["subjects"].push(action.payload);
            return { ...state };
        }
        case "GET_STATISTICS_SUBJECT": {
            return { ...state };
        }
        case "GET_STATISTICS_SUBJECT_SUCCESS": {
            state["subjects"].push(action.payload);
            return { ...state, statistics: action.payload.statistics, info: action.payload.info };
        }

        default:
            return state;
    }
};

export { subjectReducer };
