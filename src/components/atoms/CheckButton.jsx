import { Foot } from '@/assets/img/icons';

svgr({
    exportAsDefault: false,

    // svgr options: https://react-svgr.com/docs/options/
    svgrOptions: {
        // ...
    },

    // esbuild options, to transform jsx to js
    esbuildOptions: {
        // ...
    },

    //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include. By default all svg files will be included.
    include: '**/*.svg',

    exclude: '',
});
