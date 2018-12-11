'use strict';

module.exports = function(settings) {
  var targetLevel = turbine.getExtensionSEttings().level;
  if (targetLevel > 3) {
    return true;
  }
  return false;
};
