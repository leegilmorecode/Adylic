const axios = require("axios");
const retrieveData = require("../retrieve-data");

jest.mock("axios");

describe("retrieve-data", () => {
  it("should return correct data on success", async () => {
    const data = { to: "USD", value: 1000.45 };
    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
    expect(await retrieveData("url")).toEqual(data);
  });

  it("should throw an error unable to retrieve data", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error("error")));
    await expect(retrieveData("url")).rejects.toThrow(
      /Unable to retrieve data/
    );
  });
});
