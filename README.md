# Setup

1) Install dependencies `yarn install`

2) Execute Webpack:

```bash
yarn webpack
diff -u -r dist1 dist2/
```

This will result in a difference in `entry2.js`:

```diff
diff -u -r dist1/entry2.js dist2/entry2.js
--- dist1/entry2.js	2018-11-28 12:24:40.000000000 -0500
+++ dist2/entry2.js	2018-11-28 12:24:40.000000000 -0500
@@ -1 +1 @@
-(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(n,o){console.log("entry2")}],[[1,0]]]);
\ No newline at end of file
+(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{2:function(n,o){console.log("entry2")}},[[2,0]]]);
\ No newline at end of file
```

The critical parts of repeating are:

1) `optimization.runtimeChunk` must be set to `single`
2) `mode` must be `production`
3) A new entry must be placed *between* two other entries
