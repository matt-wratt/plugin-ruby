const { ruby } = require("../utils");

describe("tag", () => {
  test("class", () => {
    expect("%p.foo").toMatchHamlFormat();
  });

  test("class multiple", () => {
    expect("%p.foo.bar").toMatchHamlFormat();
  });

  test("id", () => {
    expect("%p#foo").toMatchHamlFormat();
  });

  test("classes and id", () => {
    expect("%p.foo.bar#baz").toMatchHamlFormat();
  });

  test("self closing", () => {
    expect("%br/").toMatchHamlFormat();
  });

  test("whitespace removal right single line", () => {
    expect('%p<= "Foo\\nBar"').toMatchHamlFormat();
  });

  test("whitespace removal right multi line", () => {
    const content = ruby(`
      %blockquote<
        %div
          Foo!
    `);

    expect(content).toMatchHamlFormat();
  });

  test("object reference", () => {
    const content = ruby(`
      %div[@user, :greeting]
        %bar[290]/
        Hello!
    `);

    expect(content).toMatchHamlFormat();
  });
});
