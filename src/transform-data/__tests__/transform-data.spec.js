const xml2js = require("xml2js");
const transformData = require("../transform-data");

describe("transform-data", () => {
  it("should return correct data on success", async () => {
    const data = { root: "property" };
    expect(await transformData("<root>property</root>")).toEqual(data);
  });

  it("should throw an error if unable to transform data", async () => {
    xml2js.parseStringPromise = jest.fn(() =>
      Promise.reject(new Error("error"))
    );
    await expect(transformData("url")).rejects.toThrow(
      /Unable to transform data/
    );
  });
});
