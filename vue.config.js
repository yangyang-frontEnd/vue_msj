module.exports = {
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        // http://localhost:8081/api/banner
        target: "http://127.0.0.1:7001", // http://127.0.0.1:7001/banner
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
