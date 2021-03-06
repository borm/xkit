var ref = require('../url');
var join = ref.join;
var assert = require('assert');

it('should join url', function () {
  assert.equal(join('/abc/b', 'c/d'), '/abc/b/c/d');
  assert.equal(join('/abc/b/', 'c/d'), '/abc/b/c/d');
  assert.equal(join('/abc/b/', '/c/d'), '/abc/b/c/d');
});
