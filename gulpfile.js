'use strict';

const { task } = require('gulp');

function lint()
{
    const lint = require('gulp-fasttime-lint');

    const stream =
    lint
    (
        {
            src: 'index.js',
            envs: 'node',
        },
        {
            src: 'gulpfile.js',
            envs: 'node',
            parserOptions: { ecmaVersion: 11 },
        },
    );
    return stream;
}

task('lint', lint);
task('default', lint);
