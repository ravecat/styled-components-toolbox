import responsive from "./index";

describe("Media responsive", () => {
  // Use trim space because of specific templated string handling
  const trim = str => str.replace(/[\s]/gi, "");

  const properties = [
    "height:100px;",
    "height:200px;",
    "height:300px;",
    "height:400px;"
  ];
  const resolutions = [1000, 2000, 3000];

  it("handle properties >= resolutions + 1", () => {
    const expected = trim(`
      @media (max-width: 1000px) {
        height: 100px;
      }
      @media (min-width:1000px) and (max-width: 2000px) {
        height: 200px;
      }
      @media (min-width:2000px) and (max-width: 3000px) {
        height: 300px;
      }
      @media (min-width: 3000px) {
        height: 400px;
      }
    `);

    expect(trim(responsive(properties, resolutions))).toEqual(expected);
  });

  it("handle properties < resolutions + 1", () => {
    const expected = trim(`
      @media (max-width: 1000px) {
        height:100px;
      }
      @media (min-width:1000px) and (max-width: 2000px) {
        height:200px;
      }
      @media (min-width:2000px) and (max-width: 3000px) {
        height:300px;
      }
      @media (min-width: 3000px) {
        height:300px;
      }
    `);

    expect(trim(responsive(properties.slice(0, 3), resolutions))).toEqual(
      expected
    );
  });
});
