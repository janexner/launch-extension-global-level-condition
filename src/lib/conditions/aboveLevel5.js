'use strict';

module.exports = function(settings) {
  var targetLevel = turbine.getExtensionSEttings().level;
  if (targetLevel > 5) {
    return true;
  }
  return false;
};
