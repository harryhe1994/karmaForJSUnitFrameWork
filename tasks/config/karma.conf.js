var webpackTestConfig = require('./webpack.test.config');
var pathUtil = require('../utils/path.util');
var puppeteer = require('puppeteer');
process.env.CHROMIUM_BIN = puppeteer.executablePath();


module.exports = function (config) {
    config.set({
        customLaunchers: {
            ChromiumHeadlessNoSandbox: {
                base: 'ChromiumHeadless',
                flags: ['--no-sandbox']
            }
        },
        browsers: [
            'ChromiumHeadlessNoSandbox'
        ],
        files: [
            pathUtil.resolve('test/unit/specs') + '/**/*.spec.js'
        ],
        logLevel: config.LOG_DEBUG,
        preprocessors: {
            '/**/*.spec.js': ['webpack', 'sourcemap']
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-spec-reporter',
            'karma-coverage',
            'karma-coverage-istanbul-reporter',
            'karma-sourcemap-loader',
            'karma-sinon',
            'karma-webpack'
        ],
        frameworks: [
            'mocha',
            'sinon',
            'chai'
        ],
        reporters: [
            'spec',
            'progress',
            'coverage',
            'coverage-istanbul'
        ],
        coverageReporter: {
            dir: pathUtil.resolve('test/unit') + '/coverage',
            reporters: [
                {type: 'html', subdir: 'report-html'},
                {type: 'lcov', subdir: 'report-lcov'},
                {type: 'lcovonly', subdir: '.', file: 'text-summary.txt'}
            ]
        },
        specReporter: {
            maxLogLines: 5,             // limit number of lines logged per test
            suppressErrorSummary: true, // do not print error summary
            suppressFailed: false,      // do not print information about failed tests
            suppressPassed: false,      // do not print information about passed tests
            suppressSkipped: true,      // do not print information about skipped tests
            showSpecTiming: true,      // print the time elapsed for each spec
            failFast: true
        },
        webpack: webpackTestConfig,
        webpackMiddleware: {
            stats: 'errors-only',
            noInfo: true
        },
        coverageIstanbulReporter: {
            // dir: pathUtil.resolve('test/unit') + '/coverage',
            reports: ['text-summary'], //'html', 'lcovonly',
            fixWebpackSourcePaths: true,
            skipFilesWithNoCoverage: true,
            combineBrowserReports: true,
            // 'report-config': {
            //
            //     // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
            //     html: {
            //         // outputs the report in ./coverage/html
            //         subdir: 'html'
            //     }
            //
            // },
            thresholds: {
                emitWarning: false,
                global: {
                    statements: 1,
                    lines: 1,
                    branches: 1,
                    functions: 1
                }
            }
        }
    })
    ;
};