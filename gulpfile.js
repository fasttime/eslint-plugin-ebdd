'use strict';

const { src, task } = require('gulp');
const syncReadable  = require('sync-readable');

const lint =
syncReadable
(
    async () =>
    {
        const { createConfig, noParserConfig }  = require('@origin-1/eslint-config');
        const globals                           = require('globals');
        const gulpESLintNew                     = require('gulp-eslint-new');

        const overrideConfig =
        await createConfig
        (
            noParserConfig,
            { languageOptions: { globals: globals.node, sourceType: 'commonjs' } },
            {
                files:      ['gulpfile.js'],
                jsVersion:  2022,
            },
            {
                files:      ['index.js'],
                jsVersion:  5,
            },
        );
        const stream =
        src('*.js')
        .pipe
        (
            gulpESLintNew
            (
                {
                    configType:         'flat',
                    overrideConfig,
                    overrideConfigFile: true,
                    warnIgnored:        true,
                },
            ),
        )
        .pipe(gulpESLintNew.format('compact'))
        .pipe(gulpESLintNew.failAfterError());
        return stream;
    },
);

task('lint', lint);
task('default', lint);
