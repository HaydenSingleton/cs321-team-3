//import { mount } from "@vue/test-utils";
import { Tile } from "@/tile.js";

describe("Tile Javascript", () => {
  it("defaultValuesOfTile", () => {
    var nt = new Tile();
    expect(nt.isEmpty).toBe(true);
    expect(nt.attack).toBe(0);
    expect(nt.health).toBe(0);
    expect(nt.sigil).toBe("empty");
  }),
  it("resetTile", () => {
    var nt = new Tile(false, 1, 3, "deathtouch");
    nt.reset();
    expect(nt.isEmpty).toBe(true);
    expect(nt.attack).toBe(0);
    expect(nt.health).toBe(0);
    expect(nt.sigil).toBe("empty");
  }),
  it("AssignTile", () => {
    var nt = new Tile()
    nt.Assign(false, 1, 3, "deathtouch");
    expect(nt.isEmpty).toBe(false);
    expect(nt.attack).toBe(1);
    expect(nt.health).toBe(3);
    expect(nt.sigil).toBe("deathtouch");
  }),
  it("killTileButSurvives", () => {
    var nt = new Tile(false, 1, 10, "deathtouch");
    nt.death();
    expect(nt.isEmpty).toBe(false);
    expect(nt.attack).toBe(1);
    expect(nt.health).toBe(10);
    expect(nt.sigil).toBe("deathtouch");
  }),
  it("killTile", () => {
    var nt = new Tile(false, 1, 0, "deathtouch");
    nt.death();
    expect(nt.isEmpty).toBe(true);
    expect(nt.attack).toBe(0);
    expect(nt.health).toBe(0);
    expect(nt.sigil).toBe("empty");
  });

  
});
