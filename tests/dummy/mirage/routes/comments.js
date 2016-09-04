export default function() {

  this.post('/', function({ comments }) {
    let commentJSON = this.normalizedRequestAttrs();
    let comment = comments.create(commentJSON);
    let serialized = this.serialize(comment);
    return {
      data: serialized
    };
  });

}
