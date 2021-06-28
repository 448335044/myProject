import {addH5Params, addWxParams, addPcParams} from "./addParams";
import cloneConfig from "@/utils/clone";
import  baseURL from "../../config/host"
import {addSign} from "./addSign"

export default {
  h5,
  wx,
  pc,
};

function h5(config) {
  let input = cloneConfig(config);
  if (!input.baseURL) {
    input.baseURL = baseURL;
  }
  // 增加签名
  input = addSign(input)
  return addH5Params(input);
}

function wx(config) {
  let input = cloneConfig(config);
  if (!input.baseURL) {
    input.baseURL = baseURL;
  }
  input = addSign(input)
  return addWxParams(input);
}

function pc(config) {
  let input = cloneConfig(config);
  if (!input.baseURL) {
    input.baseURL = baseURL;
  }
  input = addSign(input)
  return addPcParams(input);
}


