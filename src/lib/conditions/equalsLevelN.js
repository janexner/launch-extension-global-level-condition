'use strict';

module.exports = function(settings) {
  var targetLevel = turbine.getExtensionSEttings().level;
  if (targetLevel == settings.level) {
    return true;
  }
  return false;
};
