import { StudentAction } from "../actions/students.actions";
const initialStudentState: any[] = [] = [];
const studentReducer = (
    state = initialStudentState,
    action: StudentAction) => {
    switch (action.type) {
        case "GET_STUDENTS_SUCCESS": {
            return { ...state, students: action.payload }
        }
        case "GET_STUDENTS": {
            return { ...state };
        }
        case "ADD_STUDENT": {
            return { ...state };
        }
        case "ADD_STUDENT_SUCCESS": {
            state["students"].push(action.payload);
            return { ...state };
        }
        case "GET_STATISTICS_STUDENT": {
            return { ...state };
        }
        case "GET_STATISTICS_STUDENT_SUCCESS": {
            state["students"].push(action.payload);
            return { ...state, statistics: action.payload.statistics, info: action.payload.info };
        }

        default:
            return state;
    }
};

export { studentReducer };
