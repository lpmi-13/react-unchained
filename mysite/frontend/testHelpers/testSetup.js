
// ------------------
// Enzyme
// ------------------
const { shallow, mount, render, configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });
global.shallow = shallow;
global.mount = mount;
global.render = render;

// -----------------
// Chai
// -----------------
const { expect } = require('chai');
global.expect = expect;

// -----------------
// Mocha
// -----------------
import { describe, it } from 'mocha';
global.describe = describe;
global.it = it;

// -----------------
// JSDom
// -----------------
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = document;
global.window = document.defaultView;
global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
};

global.window.matchMedia =
    window.matchMedia ||
    (() => {
        return { matches: false, addListener: () => {}, removeListener: () => {} };
    });

global.navigator = {
    userAgent: 'node.js',
    platform: 'Win32'
};