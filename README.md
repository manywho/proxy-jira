JIRA API Proxy
==============

[![Build Status](https://travis-ci.org/manywho/proxy-jira.svg)](https://travis-ci.org/manywho/proxy-jira)

This service is a proxy for the JIRA Server API, allowing applications to access a whitelisted set of JIRA API endpoints,
without the application having access to a highly-privileged API account.

It currently allows access to:

* `/rest/api/*`

## Running

You'll need to have the following environment variables set:

* `JIRA_HOSTNAME`: The full base URL of a JIRA instance
* `JIRA_USERNAME`: A valid JIRA username
* `JIRA_PASSWORD`: A valid JIRA password

1. `yarn install`
2. `yarn start`

Now the proxy should be running on `0.0.0.0:5050`.

## Contributing

Contributions are welcome to the project - whether they are feature requests, improvements or bug fixes! Refer to 
[CONTRIBUTING.md](CONTRIBUTING.md) for our contribution requirements.

## License

This service is released under the [MIT License](http://opensource.org/licenses/mit-license.php).
