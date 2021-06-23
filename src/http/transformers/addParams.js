// export default {
//     addH5Params,
//     addWxParams,
//     addPcParams
// };

export function addH5Params(opt) {
    opt.data.platform = 'h5';
  return opt;
}
export function addWxParams(opt) {
    opt.data.platform = 'wx';
  return opt;
}
export function addPcParams(opt) {
    opt.data.platform = 'pc';
  return opt;
}