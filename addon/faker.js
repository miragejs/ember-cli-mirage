var list = {
  random: function () {
    var items = arguments.length > 0 ? arguments : [];

    return function () {
      return faker.random.array_element(items);
    };
  },

  cycle: function () {
    var items = arguments.length > 0 ? arguments : [];

    return function (i) {
      return items[i % items.length];
    };
  }
};

faker.list = list;

export default faker;
