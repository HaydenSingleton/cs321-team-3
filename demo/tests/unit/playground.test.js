import { Tile } from "demo/tile.js";

describe("tile.js", () => {
    it("assign", () => {
        expect(new Tile.assign(false,1,1,"".attack)).toBe(new Tile.assign(false,1,1,"".attack));
    })
})