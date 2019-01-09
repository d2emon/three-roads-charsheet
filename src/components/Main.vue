<template>
  <v-container grid-list-md>
    <InputBox
        input-box-id="player"
        title="Player Name"
        label="Enter Player Name"
        :default="playerName"
        @input="createPlayer"
    />

    <TestResult title="Результат" />
    <RollBox />

    <v-layout wrap>
      <v-flex xs12>
        <v-card>
          <v-toolbar>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-menu offset-y>
                <v-btn slot="activator" flat>Игрок</v-btn>
                <v-list>
                  <v-list-tile @click="reset">
                    <v-list-tile-title>Сброс</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="savePlayer">
                    <v-list-tile-title>Save</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="loadPlayer">
                    <v-list-tile-title>Load</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile to="/edit">
                    <v-list-tile-title>Edit</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-menu offset-y>
                <v-btn slot="activator" flat>Время</v-btn>
                <v-list>
                  <v-list-tile @click="modifyTime(1)">
                    <v-list-tile-title><v-icon>fast_forward</v-icon>Вперед</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="modifyTime(-1)">
                    <v-list-tile-title><v-icon>fast_rewind</v-icon>Назад</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="resetTime">
                    <v-list-tile-title><v-icon>replay</v-icon>Сброс</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-menu offset-y>
                <v-btn slot="activator" flat>Бросок</v-btn>
                <v-list>
                  <v-list-tile @click="showRollBox">
                    <v-list-tile-title><v-icon>casino</v-icon>Кость</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="coin">
                    <v-list-tile-title><v-icon>casino</v-icon>Монета</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-menu offset-y>
                <v-btn slot="activator" flat>Проверка</v-btn>
                <v-list>
                  <v-list-tile
                    v-for="(a, index) in attrib"
                    :key="index"
                    @click="doTest(index)"
                  >
                    <v-list-tile-title><v-icon>casino</v-icon>{{attrNames[index]}}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-btn flat to="/battle">Битва</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-layout row wrap>
            <v-flex xs12><h1 @click="showInput('player')">{{playerName}}</h1></v-flex>

            <v-flex xs12>
              <GameAttributes
                  :names="attrNames"
              />
            </v-flex>

            <v-flex xs6>
              <GameTime />
            </v-flex>
            <v-flex xs6>
              <GameItems />
            </v-flex>

            <v-flex xs6>
              <GamePoints />
            </v-flex>
            <v-flex xs6>
              <GameSpells />
            </v-flex>

            <v-flex xs12>
              <GameMemo />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import dice from '../dice'
  import InputBox from './InputBox'
  import TestResult from './TestResult'
  import GameTime from './GameTime'
  import GameItems from './GameItems'
  import GamePoints from "./GamePoints";
  import GameSpells from "./GameSpells";
  import GameMemo from "./GameMemo";
  import GameAttributes from "./GameAttributes";
  import RollBox from "./RollBox";

  export default {
    name: "Main",
    components: {
        RollBox,
        GameAttributes,
        GameMemo,
        GameSpells,
        GamePoints,
        InputBox,
        TestResult,
        GameTime,
        GameItems,
    },
    computed: {
      ...mapState([
        'playerName',
        'spells',
        'attrib',
        'points',
      ]),
    },
    data: () =>({
      attrNames: [
        'Мастерство',
        'Выносливость',
        'Удача',
      ],
    }),
    methods: {
      editPlayer() {
        /*
        fmEdit.leName.Text := Player.PlayerName;

        fmEdit.seSkill.Value := Player.getAttrib(0);
        fmEdit.seLife.Value  := Player.getAttrib(1);
        fmEdit.seLuck.Value  := Player.getAttrib(2);

        fmEdit.seSkillMax.Value := Player.getAttribMax(0);
        fmEdit.seLifeMax.Value  := Player.getAttribMax(1);
        fmEdit.seLuckMax.Value  := Player.getAttribMax(2);

        fmEdit.seMoney.Value := Player.Money;

        if fmEdit.ShowModal = mrOk then
        begin
          Player.PlayerName := fmEdit.leName.Text;

          Player.setAttribMax(0, fmEdit.seSkill.Value);
          Player.setAttribMax(1, fmEdit.seLife.Value);
          Player.setAttribMax(2, fmEdit.seLuck.Value);

          Player.setAttrib(0, fmEdit.seSkillMax.Value);
          Player.setAttrib(1, fmEdit.seLifeMax.Value);
          Player.setAttrib(2, fmEdit.seLuckMax.Value);

          Player.Money := fmEdit.seMoney.Value;
        end;
        */
      },

      coin() { this.setResult((dice(1, 2) === 1) ? 'Орел' : 'Решка') },
      doTest(index) {
        this.testAttrib(index)
          .then(result => {
            this.setResult(result ? 'Успех!' : 'Провал!')
            this.modifyAttrib({ index, value: -1 })
          });
      },

      ...mapActions([
          'testAttrib',
          'createPlayer',
          'reset',
          'savePlayer',
          'loadPlayer',
      ]),
      ...mapMutations([
          'modifyAttrib',
          'modifyTime',
          'resetTime',
      ]),
      ...mapMutations(
          'roll',
          [
              'setResult',
              'showRollBox',
          ]
      ),
      ...mapMutations( 'input', [ 'showInput', ] ),
    },
    mounted() {
        this.createPlayer('Игрок')
    }
  }
</script>

<style scoped>
</style>