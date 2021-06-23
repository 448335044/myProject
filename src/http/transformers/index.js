import {addH5Params, addWxParams, addPcParams} from "./addParams";
import cloneConfig from "@/utils/clone";
import  baseURL from "../../config/host"

export default {
  h5,
  wx,
  pc,
};

function h5(config) {
  const input = cloneConfig(config);
  if (!input.baseURL) {
    input.baseURL = baseURL;
  }
  return addH5Params(input);
}

function wx(config) {
  const input = cloneConfig(config);
  if (!input.baseURL) {
    input.baseURL = baseURL;
  }
  return addWxParams(input);
}

function pc(config) {
  const input = cloneConfig(config);
  if (!input.baseURL) {
    input.baseURL = baseURL;
  }
  return addPcParams(input);
}


