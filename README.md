discourse-reftagger
======================

Alkotob reftagger plugin for [Discourse](http://discourse.org).

Installation
============

* Run `bundle exec rake plugin:install repo=https://github.com/alkotob/discourse-reftagger` in your discourse directory
* In development mode, run `bundle exec rake assets:clean`
* In production, recompile your assets: `bundle exec rake assets:precompile`
* Restart Discourse
* In discourse go to: "Admin -> Settings -> Reftagger plugin" and check "enable reftagger plugin."

## Installation on top of Docker image

If you have install Discourse on Digital Ocean using a Docker image as described using the
[Basic Docker Installation Guide](https://github.com/discourse/discourse/blob/master/docs/INSTALL-cloud.md)
then try this:

open "/var/discourse/containers/app.yml" using vim or nano.

add 'git clone https://github.com/alkotob/discourse-reftagger' in the after_code hook as follows:

    hooks:
      after_code:
        - exec:
            cd: $home/plugins
            cmd:
              - git clone https://github.com/alkotob/discourse-reftagger

Change directory to `/var/docker` and run `./launcher rebuild app`

If you edited a different yaml file such as '/var/discourse/containers/image.yml' then
the command would be
`./launcher rebuild image`.

The app will be down for a minute or so then come back on after the rebuild.
