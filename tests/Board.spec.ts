import Board from "@/board";

describe("Board class tests", () => {
  const board = new Board();
  it("default constructor", () => {
    expect(board).toBeDefined();
    expect(board.items.length).toEqual(4);
  }),
    it("parameterized  constructor", () => {
      const new_board = new Board([]);
      expect(new_board.items.length).toEqual(0);
      expect(new_board.toString()).toEqual("");
    }),
    it("string repr", () => {
      const repr =
        "[id=0 (1 3 death_touch)],[id=1 (1 2 sharp)],[id=2 (3 1 flying)],[id=3 ()],[id=4 (1 1 prevent_attack)],[id=5 (1 1 submerge)],[id=6 (1 1 flying)],[id=7 ()],[id=8 ()],[id=9 (1 1 submerge)],[id=10 (1 1 split_strike)],[id=11 ()],[id=12 ()],[id=13 (1 1 buff_neighbors)],[id=14 ()],[id=15 ()]";
      expect(board.toString()).toEqual(repr);
    }),
    it("move functions", () => {
      board.moveUp(1, 0);
      let repr =
        "[id=1 (1 2 sharp)],[id=0 (1 3 death_touch)],[id=2 (3 1 flying)],[id=3 ()],[id=4 (1 1 prevent_attack)],[id=5 (1 1 submerge)],[id=6 (1 1 flying)],[id=7 ()],[id=8 ()],[id=9 (1 1 submerge)],[id=10 (1 1 split_strike)],[id=11 ()],[id=12 ()],[id=13 (1 1 buff_neighbors)],[id=14 ()],[id=15 ()]";
      expect(board.toString()).toEqual(repr);
      board.moveDown(0, 0);
      repr =
        "[id=0 (1 3 death_touch)],[id=1 (1 2 sharp)],[id=2 (3 1 flying)],[id=3 ()],[id=4 (1 1 prevent_attack)],[id=5 (1 1 submerge)],[id=6 (1 1 flying)],[id=7 ()],[id=8 ()],[id=9 (1 1 submerge)],[id=10 (1 1 split_strike)],[id=11 ()],[id=12 ()],[id=13 (1 1 buff_neighbors)],[id=14 ()],[id=15 ()]";
      expect(board.toString()).toEqual(repr);
    });
});
