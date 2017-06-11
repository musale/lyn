const { Transform } = require('stream');

const upperCaseTr = new Transform({
    // we don’t have to implement the read or write methods,
    // we only need to implement a transform method,
    // which combines both of them
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);