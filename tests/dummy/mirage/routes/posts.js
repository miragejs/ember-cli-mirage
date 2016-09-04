export default function () {

  this.post('/', function ({posts}) {
    let postJSON = this.normalizedRequestAttrs();
    let post = posts.create(postJSON);
    let serialized = this.serialize(post);
    return {
      data: serialized
    };
  });

}
