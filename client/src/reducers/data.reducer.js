import types from '../types/types';

const initialState = {
  skillCategories: [],
  projectCategories: [],
  skills: [],
  projects: [],
  profile: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.data.loadSkillCategories:
      return {
        ...state,
        skillCategories: action.payload,
      };
    case types.data.loadProjectCategories:
      return {
        ...state,
        projectCategories: action.payload,
      };
    case types.data.loadSkills:
      return {
        ...state,
        skills: action.payload,
      };
    case types.data.loadProjects:
      return {
        ...state,
        projects: action.payload,
      };
    case types.data.loadProfile:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
