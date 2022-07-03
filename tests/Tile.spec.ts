//import { mount } from "@vue/test-utils";
import Tile from "@/tile";

describe("Tile class tests", () => {
  it("defaultValuesOfTile", () => {
    const nt = new Tile();
    expect(nt.isEmpty).toBe(true);
    expect(nt.attack).toBe(0);
    expect(nt.health).toBe(0);
    expect(nt.sigill).toBe("empty");
    expect(nt.toString()).toBe("[id=0 ()]");
  }),
    it("fromValues", () => {
      const nt = Tile.fromValues(1, 3, "empty");
      expect(nt.isEmpty).toBe(false);
      expect(nt.attack).toBe(1);
      expect(nt.health).toBe(3);
      expect(nt.sigill).toBe("empty");
      expect(nt.toString()).toBe("[id=1 (1 3 empty)]");
    }),
    it("fromList", () => {
      const nt = Tile.fromList([3, 1, "tri_strike"]);
      expect(nt.isEmpty).toBe(false);
      expect(nt.attack).toBe(3);
      expect(nt.health).toBe(1);
      expect(nt.sigill).toBe("tri_strike");
    }),
    it("testIDs", () => {
      const nt = Tile.fromValues(1, 10, "deathtouch");
      expect(nt.isEmpty).toBe(false);
      expect(nt.attack).toBe(1);
      expect(nt.health).toBe(10);
      expect(nt.sigill).toBe("deathtouch");
      expect(nt.id).toBe(3);
    }),
    it("reset", () => {
      const nt = Tile.fromValues(1, 0, "deathtouch");
      expect(nt.isEmpty).toBe(false);
      expect(nt.attack).toBe(1);
      expect(nt.health).toBe(0);
      expect(nt.sigill).toBe("deathtouch");
      nt.reset();
      expect(nt.isEmpty).toBe(true);
      expect(nt.attack).toBe(0);
      expect(nt.health).toBe(0);
      expect(nt.sigill).toBe("empty");
    });
});
