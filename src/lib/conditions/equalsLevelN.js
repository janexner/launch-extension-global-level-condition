'use strict';

module.exports = function(settings) {
  var targetLevel = turbine.getExtensionSettings().level;
  if (targetLevel == settings.level) {
    return true;
  }
  return false;
};
