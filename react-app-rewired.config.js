module.exports = {
    webpack: function(config, env) {
        // Find the @svgr/webpack rule
        const svgRule = config.module.rules.find(rule =>
            rule.test && rule.test.toString().includes("svg")
        );

        // Exclude namespace tags warning
        svgRule.oneOf.forEach(rule => {
            if (rule.test) {
                rule.test = new RegExp(rule.test.source.replace("\\|svg\\|", ""));
            }
            if (rule.issuer) {
                rule.issuer.not = [/\.svg$/];
            }
        });

        return config;
    }
};
