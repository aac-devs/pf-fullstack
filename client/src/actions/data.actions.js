import fetchingData from '../helpers/fetch-data';
import types from '../types/types';

const loadSkillCategories = (payload) => ({
  type: types.data.loadSkillCategories,
  payload,
});

const loadProjectCategories = (payload) => ({
  type: types.data.loadProjectCategories,
  payload,
});

const loadSkills = (payload) => ({
  type: types.data.loadSkills,
  payload,
});

const loadProjects = (payload) => ({
  type: types.data.loadProjects,
  payload,
});

const loadProfile = (payload) => ({
  type: types.data.loadProfile,
  payload,
});

const startReadingData = () => {
  return async (dispatch) => {
    let resp;
    let data;
    resp = await fetchingData('skill/category');
    data = await resp.json();
    dispatch(loadSkillCategories(data));
    resp = await fetchingData('project/category');
    data = await resp.json();
    dispatch(loadProjectCategories(data));
    resp = await fetchingData('skill');
    data = await resp.json();
    dispatch(loadSkills(data));
    resp = await fetchingData('project');
    data = await resp.json();
    dispatch(loadProjects(data));
    resp = await fetchingData('profile');
    data = await resp.json();
    dispatch(loadProfile(data));
  };
};

export default startReadingData;
