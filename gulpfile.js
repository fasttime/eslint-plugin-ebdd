'use strict';

const { task } = require('gulp');

function lint()
{
    const lint = require('gulp-fasttime-lint');

    const stream =
    lint
    (
        {
            src: '*.js',
            envs: 'node',
            parserOptions: { ecmaVersion: 9 },
        },
    );
    return stream;
}

task('lint', lint);
task('default', lint);
