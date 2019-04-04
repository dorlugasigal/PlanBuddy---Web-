const Validation = {
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
};

const URLS = {
  //API_PATH: "/api" //prod
  API_PATH: "http://localhost:9000/api" //test
};

const ADMIN_TEST = {
  USER_NAME: "nadavavisar",
  ROLE: ""
};
const ROLES = {
  ADMIN: "admin",
  APPROVER: "approver",
  VIEWER: "viewer"
};

const DATABOXES = {
  APP_DOWNLOADS: "APP_DOWNLOADS",
  ACTIVE_USERS: "ACTIVE_USERS",
  ACTIVATIONS: "ACTIVATIONS",
  TOP_LOCATION: "TOP_LOACTION",
  APP_OPENS: "APP_OPENS",
  WEAR_FREQUENCY: "WEAR_FREQUENCY"
};
const INSIGHTS = {
  EVERYDAY_USAGE: "EVERYDAY_USAGE",
  OUTGOINGS: "OUTGOINGS",
  TRENDING_ITEM: "TRENDING_ITEM",
  UNIVERSITIES: "UNIVERSITIES",
  SCHOOLS: "SCHOOLS",
  USAGE_DROP: "USAGE_DROP"
};

export const Constants = {
  Validation,
  URLS,
  ROLES,
  ADMIN_TEST,
  DATABOXES,
  INSIGHTS
};
