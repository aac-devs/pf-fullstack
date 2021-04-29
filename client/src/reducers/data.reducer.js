const projectData = {
  title: '',
  description: '',
  image: '',
  category: '',
  links: {
    app: '',
    github: '',
  },
  tooltips: {
    app: '',
    github: '',
  },
};

const skillData = {
  image: '',
  category: '',
  tooltip: {
    title: '',
  },
};

const initialState = {
  profile: {
    image: '',
    labels: {
      name: '',
      service: '',
      phrase: '',
      location: '',
    },
    links: {
      linkedin: '',
      github: '',
      cv: '',
    },
    tooltips: {
      linkedin: '',
      github: '',
      cv: '',
    },
  },
  routes: {
    labels: {
      projects: '',
      skills: '',
      contact: '',
    },
  },
  navbar: {
    tooltips: {
      mode: '',
      language: '',
    },
  },
  contact: {
    labels: {
      name: '',
      email: '',
      message: '',
      resolve: '',
      btn: '',
    },
  },
  footer: '',
};

// projects: {
//   categories: [], // web \ electronic
//   list: [projectData],
// },
// skills: {
//   categories: [], // programming langueage | web tech
//   list: [skillData],
// },

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return initialState;

    default:
      return state;
  }
};

export default dataReducer;
