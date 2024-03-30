import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";
import withTM from "next-transpile-modules";

export default withTM(["monaco-editor"])({
  webpack: (config) => {
    const rule = config.module.rules
      .find(rule => rule.oneOf)
      .oneOf.find(
        r =>
          r.issuer && r.issuer.include && r.issuer.include.includes("_app")
      );
    if (rule) {
      rule.issuer.include = [
        rule.issuer.include,
        /[\\/]node_modules[\\/]monaco-editor[\\/]/
      ];
    }

    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: [
          
          // "typescript",
          "javascript",
          
        ],
        filename: "static/[name].worker.js"
      })
    );
    return config;
  }
});
