const os = require('os');
const _ = require('../utils');

module.exports = {

  source        : { type: 'string', isPath: true, name: 'Source Directory' },

  recursive     : { type: 'boolean', default: true, name: 'Locate files recursively' },
  caseSensitive : { type: 'boolean', default: false, name: 'Match extension' },
  count         : { type: 'boolean', default: false, name: 'Return count with list' },

  allowBlank    : { type: 'boolean', default: true, name: 'Include files without an extension' },

  limit         : { type: 'number', default: -1, name: 'Number of files to process' }
};
