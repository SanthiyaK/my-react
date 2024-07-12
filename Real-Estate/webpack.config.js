module.exports ={
    resolve:{
        fallback: {"url": require.resolve("url/") },
      },
      resolve:{
        fallback: {"assert": require.resolve("assert/") },
      },
      resolve:{
        fallback: {"stream": require.resolve("stream-browserify") },
      },
};