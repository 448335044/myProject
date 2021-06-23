import auth from './auth';

export default function addAuthorization(opt) {
  const setting = opt.auth;

  if (!opt.headers) {
    opt.headers = {};
  }

  if (setting === 'no') {
    return Promise.resolve(opt);
  } else if (setting === 'yes') {
    return auth.getAuth().then(({ Authorization }) => {
      opt.headers.Authorization = Authorization;
      return opt;
    });
  } else {
    return auth.getAuthOnce().then(({ Authorization }) => {
      opt.headers.Authorization = Authorization;
      return opt;
    }, () => {
      return opt;
    });
  }
}
