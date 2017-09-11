require("angular");
require("angular-route");

// First, bootstrap the Angular app module with required components, so other
// required components have access to it after being bundled.
angular
	.module("app", [
		/* jshint ignore:start */
		<% if (useBackendless) { %>
		"ngMockE2E",
		<% } %>
		/* jshint ignore:end */
	]);

// Core modules of the app.
require("./app")
require("./components")

// Pass through the template files when running in backendless mode.
/* jshint ignore:start */
// Angular-mocks is included in local builds for testing purposes.
<% if (!isProd) { %>
require("angular-mocks")
<% } %>
/* jshint ignore:end */
