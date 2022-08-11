import Vue from "vue";

const cM = {
  install(Vue) {
    const prefix = '-mode';
    let modeSelected = '';
    let bodyElement = document.documentElement.classList;

    function selectMode(newMode) {
      if (modeSelected) bodyElement.remove(modeSelected);
      bodyElement.add(newMode + prefix);
      modeSelected = newMode + prefix;
    }

    Vue.prototype.$colorMode = function () {}
    Vue.prototype.$colorMode.auto = function (lightTag, darkTag) {
      const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
      if (isLightMode === 'true' && lightTag) {
        selectMode(lightTag);
      } else if (darkTag) {
        selectMode(darkTag);
      }
    }
    Vue.prototype.$colorMode.setMode = function (mode) {
      selectMode(mode);
    }
    Vue.prototype.$colorMode.clear = function () {
      if (modeSelected) bodyElement.remove(modeSelected);
    }
  }
}

cM.install(Vue);
