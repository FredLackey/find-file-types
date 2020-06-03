# Find File Types for NodeJS

>  The following document applies to the programaticc usage of `find-file-types`.  For use from the command line, please see the [main README located here](README.md).

## Purpose  
Find (and optionally count) all unique file extensions within a folder or folder structure.

> More info on _why_ I created this is on my blog: [https://fredlackey.com](https://www.fredlackey.com)

## Installation

```
npm i find-file-types
```

## Usage

```
const fft = require('find-file-types');

const results = fft.processOptions({
  source : /Users/Volumes/MPHD01/Multimedia
});
```

### Options

| Name            | Description                        | Type            | Default |
|-----------------|------------------------------------|-----------------|---------|
| `source`        | Source Directory                   | `string (path)` |         |
| `recursive`     | Locate files recursively           | `boolean`       | `true`  |
| `caseSensitive` | Match extension                    | `boolean`       | `false` |
| `count`         | Return count with list             | `boolean`       | `false` |
| `allowBlank`    | Include files without an extension | `boolean`       | `true`  |
| `limit`         | Number of files to process         | `number`        |         |

### Contact  
Please feel free to contact me directly with any questions, comments, or enhancement requests:

**Fred Lackey**  
**[fred.lackey@gmail.com](mailto://fred.lackey@gmail.com)**  
**[http://fredlackey.com](http://www.fredlackey.com)**  
