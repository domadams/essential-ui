delete process.env.BROWSER;
require('babel-core/register');
if (process.env.NODE_ENV === 'production') {
    require('react/dist/react.min'); // prime cache
    require.cache[require.resolve('react')] = require.cache[require.resolve('react/dist/react.min')];

    require('react-dom/dist/react-dom.min'); // prime cache
    require.cache[require.resolve('react-dom')] = require.cache[require.resolve('react-dom/dist/react-dom.min')];
}
require('./server');
