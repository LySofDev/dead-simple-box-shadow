const getBoxShadow = require("./");

const shallowShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
const secondShallowShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
const intermediateShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
const secondDeepShadow = '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)';
const deepShadow = '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)';

describe("getBoxShadow", () => {
  it("is a function", () => {
    expect(typeof getBoxShadow).toBe('function');
  });

  describe("when given 1", () => {
    it("returns the shallowest shadow", () => {
      expect(getBoxShadow(1)).toBe(shallowShadow);
    });
  });

  describe("when given 2", () => {
    it("returns the second shallowest shadow", () => {
      expect(getBoxShadow(2)).toBe(secondShallowShadow);
    });
  });

  describe("when given 3", () => {
    it("returns an intermediate shadow", () => {
      expect(getBoxShadow(3)).toBe(intermediateShadow);
    });
  });

  describe("when given 4", () => {
    it("returns the second deepest shadow", () => {
      expect(getBoxShadow(4)).toBe(secondDeepShadow);
    });
  });

  describe("when given 5", () => {
    it("returns the deepest shadow", () => {
      expect(getBoxShadow(5)).toBe(deepShadow);
    });
  });

  describe("when given nothing", () => {
    it("returns the shallowest shadow", () => {
      expect(getBoxShadow()).toBe(shallowShadow);
    });
  });

  describe("when given anything else", () => {
    it("returns the shallowest shadow", () => {
      expect(getBoxShadow("foo")).toBe(shallowShadow);
    });
  });
});
