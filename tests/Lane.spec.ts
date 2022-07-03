// import { Lane } from "@/lane.js";
// import { Tile } from "@/tile.ts";
//
// describe("Lane Javascript", () => {
//   it("condition if empty attack", () => {
//     var nt = new Lane(
//       new Tile(false, 1, 1, "preventattack"),
//       new Tile(false, 1, 1, "reach"),
//       new Tile(false, 1, 1, "flying"),
//       new Tile(false, 1, 1, "flying")
//     );
//     expect(nt.interact()).toBe(0);
//   }),
//     it("condition if empty attack", () => {
//       var nt = new Lane();
//       expect(nt.interact()).toBe(-1);
//     }),
//     it("deathtouch empty", () => {
//       var nt = new Lane(
//         new Tile(),
//         new Tile(false, 1, 1, "reach"),
//         new Tile(false, 1, 1, "deathtouch"),
//         new Tile()
//       );
//       expect(nt.interact()).toBe(0);
//     }),
//     it("deathtouch enemy", () => {
//       var nt = new Lane(
//         new Tile(),
//         new Tile(),
//         new Tile(false, 1, 1, "deathtouch"),
//         new Tile()
//       );
//       expect(nt.interact()).toBe(1);
//     }),
//     it("reach blocks flying", () => {
//       var nt = new Lane(
//         new Tile(false, 1, 1, "preventattack"),
//         new Tile(false, 1, 1, "reach"),
//         new Tile(false, 1, 1, "flying"),
//         new Tile(false, 1, 1, "preventattack")
//       );
//       expect(nt.interact()).toBe(0);
//     }),
//     it("flying attacks directly", () => {
//       var nt = new Lane(
//         new Tile(false, 1, 1, "preventattack"),
//         new Tile(false, 1, 1, "sharp"),
//         new Tile(false, 1, 1, "flying"),
//         new Tile(false, 1, 1, "preventattack")
//       );
//       expect(nt.interact()).toBe(1);
//     }),
//     it("no sigils attack directly", () => {
//       var nt = new Lane(
//         new Tile(false, 1, 1, "empty"),
//         new Tile(true, 0, 0, "empty"),
//         new Tile(false, 1, 1, "empty"),
//         new Tile(false, 1, 1, "empty")
//       );
//       expect(nt.interact()).toBe(1);
//     }),
//     it("no sigils attacking something", () => {
//       var nt = new Lane(
//         new Tile(false, 1, 1, "empty"),
//         new Tile(false, 1, 1, "sharp"),
//         new Tile(false, 1, 1, "empty"),
//         new Tile(false, 1, 1, "empty")
//       );
//       expect(nt.interact()).toBe(0);
//     }),
//     it("enemyDEBUFF", () => {
//       var nt = new Lane(
//         new Tile(false, 1, 1, "empty"),
//         new Tile(false, 1, 1, "debuffenemy"),
//         new Tile(false, 1, 1, "empty"),
//         new Tile(false, 1, 1, "empty")
//       );
//       expect(nt.interact()).toBe(0);
//     }),
//     it("getTiles", () => {
//       var nt = new Lane(
//         new Tile(false, 1, 1, "empty"),
//         new Tile(false, 1, 1, "debuffenemy"),
//         new Tile(false, 1, 1, "empty"),
//         new Tile(false, 1, 1, "empty")
//       );
//       expect(nt.getTiles()).toBe(nt.tiles);
//     }),
//     it("enemyPREVENTATTACK", () => {
//       var nt = new Lane(
//         new Tile(false, 1, 1, "empty"),
//         new Tile(false, 1, 1, "preventattack"),
//         new Tile(false, 1, 1, "empty"),
//         new Tile(false, 1, 1, "empty")
//       );
//       expect(nt.interact()).toBe(0);
//     });
// });
