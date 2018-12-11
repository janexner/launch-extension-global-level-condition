'use strict';

module.exports = function(settings) {
  var targetLevel = turbine.getExtensionSettings().level;
  if (targetLevel < 4) {
    return true;
  }
  return false;
};
