'use strict';

module.exports = function(settings) {
  var targetLevel = turbine.getExtensionSEttings().level;
  if (targetLevel > 1) {
    return true;
  }
  return false;
};
