import { Board } from "@/board.js";
import { Lane } from "@/lane";
import { Tile } from "@/tile";

describe("Board Javascript", () => {
  it("Create Board from Board", () => {
    var nt = new Board(
      new Lane(
        new Tile(false, 1, 3, "deathtouch"),
        new Tile(false, 1, 2, "sharp"),
        new Tile(),
        new Tile(false, 3, 1, "flying")
      ),
      new Lane(
        new Tile(false, 1, 1, "preventattack"),
        new Tile(false, 1, 1, "reach"),
        new Tile(false, 1, 1, "flying")
      ),
      new Lane(
        new Tile(),
        new Tile(false, 1, 1, "submerge"),
        new Tile(false, 2, 1, "debuffenemy")
      ),
      new Lane(new Tile(), new Tile(false, 1, 1, "buffneighbors"))
    );
    expect(nt.getLanes()).toBe(nt.lanes);
  }),
    it("Able to load new board + decrement lives", () => {
      var nt = new Board(
        new Lane(
          new Tile(false, 1, 3, "deathtouch"),
          new Tile(false, 1, 2, "sharp"),
          new Tile(),
          new Tile(false, 3, 1, "flying")
        ),
        new Lane(
          new Tile(false, 1, 1, "preventattack"),
          new Tile(false, 1, 1, "reach"),
          new Tile(false, 1, 1, "flying")
        ),
        new Lane(
          new Tile(),
          new Tile(false, 1, 1, "submerge"),
          new Tile(false, 2, 1, "debuffenemy")
        ),
        new Lane(new Tile(), new Tile(false, 1, 1, "buffneighbors"))
      );
      nt.loadBoard(nt.getLanes(), 2);
      expect(nt.getLives()).toBe(2);
    }),
    it("EffectsOfBuffNeighbors", () => {
      var nt = new Board(
        new Lane(
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors")
        ),
        new Lane(
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors")
        ),
        new Lane(
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors")
        ),
        new Lane(
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors")
        )
      );
      expect(nt.check()).toBe(0);
    }),
    it("EffectsOfBuffNeighborsWithAnEmptyLane", () => {
      var nt = new Board(
        new Lane(
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors")
        ),
        new Lane(
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors")
        ),
        new Lane(
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors")
        ),
        new Lane(
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors"),
          new Tile(false, 1, 3, "buffneighbors")
        )
      );
      expect(nt.check()).toBe(3);
    }),
    it("EffectsOfTriStrike", () => {
      var nt = new Board(
        new Lane(
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike")
        ),
        new Lane(
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike")
        ),
        new Lane(
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike")
        ),
        new Lane(
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike"),
          new Tile(false, 1, 3, "tristrike")
        )
      );
      expect(nt.check()).toBe(0);
    }),
    it("EffectsOfSplitStrike", () => {
        var nt = new Board(
          new Lane(
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike")
          ),
          new Lane(
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike")
          ),
          new Lane(
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike")
          ),
          new Lane(
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike"),
            new Tile(false, 1, 3, "splitstrike")
          )
        );
        expect(nt.check()).toBe(0);
      });
});
