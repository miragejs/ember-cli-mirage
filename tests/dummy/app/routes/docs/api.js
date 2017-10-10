import Ember from 'ember';

export default Ember.Route.extend({

  // projectVersion: Ember.inject.service(),
  //
  // model() {
  //   return this.store.findRecord('project', 'ember-cli-mirage')
  //     .then(project => {
  //       let projectVersion = project.get('projectVersions.firstObject.id');
  //       let version = projectVersion.split('ember-cli-mirage-')[1];
  //
  //       this.set('projectVersion.version', version);
  //
  //       return this.store.findRecord('project-version', projectVersion);
  //     });
  // }

});
