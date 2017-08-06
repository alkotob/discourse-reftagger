# name: discourse-reftagger
# version: 0.1
# authors: Alkotob <alkotob.org>

enabled_site_setting :reftagger_language

register_javascript <<JS
  Discourse.addInitializer(function () {
    console.log(this.siteSettings);
    $LAB.script('https://cdn.alkotob.org/lib/reftagger.min.js').wait(function() {
      function refresh() {
        try {
          Reftagger.tag();
        } catch(e) {
          console.error(e);
        }
      }

      var applyPreview = _.debounce(refresh, 500);
      var applyBody = refresh;

      Discourse.PostView.prototype.on('postViewInserted', applyBody);
      Discourse.ComposerView.prototype.on('previewRefreshed', applyPreview);
    });
  });
JS
