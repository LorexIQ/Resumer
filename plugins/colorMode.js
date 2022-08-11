import Vue from "vue";

const cM = {
  install(Vue) {
    const prefix = '-mode';
    let modeSelected = '';
    let bodyElement = document.documentElement.classList;

    Vue.prototype.$colorMode = function () {}
    Vue.prototype.$colorMode.setMode = function (mode) {
      if (modeSelected) bodyElement.remove(modeSelected);
      bodyElement.add(mode + prefix);
      modeSelected = mode + prefix;
    }
    Vue.prototype.$colorMode.clear = function () {
      if (modeSelected) bodyElement.remove(modeSelected);
    }
  }
}

cM.install(Vue);
