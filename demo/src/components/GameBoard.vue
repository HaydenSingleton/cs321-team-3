<template>
  <div class="content">
    <div class="columns">
      <div class="column">
        <p id="score" class="button">{{ score }}/5</p>
        <button class="button" @click="checkWin">Check</button>
      </div>
      <div class="columns">
        <LaneItem
          v-for="(item, index) in lanes"
          :key="index"
          :tile-list="item.getTiles()"
        ></LaneItem>
      </div>
      <div class="column">
        <div class="message is-info">
          <div class="message-body is-dark">Lives: {{ lives }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LaneItem from "@/components/LaneItem.vue";
import { Board } from "@/board.js";
import { Lane } from "@/lane";
import { Tile } from "@/tile";

const score = ref(0);
const lives = ref(3);

const board = new Board(
  new Lane(
    new Tile(false, 1, 3, "deathtouch"),
    new Tile(false, 1, 2, "sharp"),
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

const lanes = board.getLanes();

function checkWin() {
  score.value = board.check();
  lives.value = board.getLives();
}

/*
const preGeneratedBoards = [
  new Board(
    new Lane(
      new Tile(false, 1, 3, "tristrike"),
      new Tile(false, 1, 3, "tristrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "tristrike"),
      new Tile(false, 1, 3, "tristrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "tristrike"),
      new Tile(false, 1, 3, "tristrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "tristrike"),
      new Tile(false, 1, 3, "tristrike")
    )
  ),
  new Board(
    new Lane(
      new Tile(false, 1, 3, "splitstrike"),
      new Tile(false, 1, 3, "splitstrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "splitstrike"),
      new Tile(false, 1, 3, "splitstrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "splitstrike"),
      new Tile(false, 1, 3, "splitstrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "splitstrike"),
      new Tile(false, 1, 3, "splitstrike")
    )
  ),
  new Board(
    new Lane(
      new Tile(false, 1, 3, "buffneighbors"),
      new Tile(false, 1, 3, "buffneighbors")
    ),
    new Lane(
      new Tile(false, 1, 3, "buffneighbors"),
      new Tile(false, 1, 3, "buffneighbors")
    ),
    new Lane(
      new Tile(false, 1, 3, "buffneighbors"),
      new Tile(false, 1, 3, "buffneighbors")
    ),
    new Lane(
      new Tile(false, 1, 3, "buffneighbors"),
      new Tile(false, 1, 3, "buffneighbors")
    )
  ),
  new Board(
    new Lane(
      new Tile(false, 1, 3, "deathtouch"),
      new Tile(false, 1, 3, "sharp"),
      new Tile(false, 1, 3, "deathtouch")
    ),
    new Lane(
      new Tile(false, 1, 3, "preventattack"),
      new Tile(false, 1, 3, "sharp"),
      new Tile(false, 1, 3, "splitstrike")
    ),
    new Lane(
      new Tile(false, 1, 3, "flying"),
      new Tile(false, 1, 3, "preventattack"),
      new Tile(),
      new Tile(false, 1, 3, "preventattack")
    ),
    new Lane(
      new Tile(false, 1, 3, "buffneighbors"),
      new Tile(false, 1, 3, "empty")
    )
  ),
];
*/
</script>
