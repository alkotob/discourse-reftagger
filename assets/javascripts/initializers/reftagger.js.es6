import { withPluginApi, decorateCooked } from 'discourse/lib/plugin-api';
import loadScript from 'discourse/lib/load-script';

function initializePlugin(api) {
  const container    = api.container;
  const siteSettings = container.lookup('site-settings:main');
  if (!siteSettings.enable_reftagger_plugin) { return; }

  // TODO: add additional settings
  window.refTagger = {};
  loadScript('https://cdn.alkotob.org/lib/reftagger.min.js', { scriptTag: true }).then(function () {
    api.decorateCooked($html => $.each($html, (i, domNode) => window.refTagger.tag(domNode)));
  });
}

export default {
  name: 'discourse-reftagger',
  after: 'inject-objects',

  initialize(container) {
     withPluginApi('0.1', api => initializePlugin(api));
  }
};
