/// <reference types="./AudioContext.d.ts" />
/// <reference lib="dom" />
let _context;

const AudioContext = {
  getContext: function () {
    if (_context === undefined) {
      _context = new (window.AudioContext || window.webkitAudioContext)();
    }

    return _context;
  },

  setContext: function (value) {
    _context = value;
  },
};

export { AudioContext };
