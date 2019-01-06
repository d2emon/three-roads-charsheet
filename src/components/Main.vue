<template>
  <v-container grid-list-md>
    <InputBox
        input-box-id="player"
        title="Player Name"
        label="Enter Player Name"
        default="Unnamed"
        @input="setPlayerName"
    />

    <InputBox
        input-box-id="spell"
        title="Spell Name"
        label="Enter Spell"
        default="Spell"
        @input="addSpell"
    />

    <TestResult
        title="Результат"
    />

    <v-layout wrap>
      <v-flex xs12>
        <v-card>
          <v-toolbar>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-menu offset-y>
                <v-btn
                  slot="activator"
                  flat
                >
                  Player
                </v-btn>
                <v-list>
                  <v-list-tile
                    @click="resetPlayer"
                  >
                    <v-list-tile-title>Reset</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="savePlayer">
                    <v-list-tile-title>Save</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="loadPlayer">
                    <v-list-tile-title>Load</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="editPlayer">
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
                  <v-list-tile @click="roll">
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
                    @click="testAttrib(index)"
                  >
                    <v-list-tile-title><v-icon>casino</v-icon>{{attrNames[index]}}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-toolbar-items>
          </v-toolbar>
          <div class="main-menu">
                    Player1: TMenuItem;
                      Save1: TMenuItem;
                      Load1: TMenuItem;
                    Dice1: TMenuItem;
                      Roll1: TMenuItem;

                  Edit2: TMenuItem;

                  odOpen: TOpenDialog;
                  sdSave: TSaveDialog;
          </div>
          <v-layout row wrap>
            <v-flex xs12><h1>{{playerName}}</h1></v-flex>

            <v-flex xs12>
              <v-layout>
                <v-flex xs4
                  v-for="(item, index) in attrib"
                  :key="index"
                >
                  <v-card>
                    <v-card-title primary-title>
                      <h3 v-html="attrNames[index]" />
                    </v-card-title>
                    <v-card-text>
                      <h4>{{item.current}} / {{item.max}}</h4>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn @click="testAttrib(index)">Проверить</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
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
              <v-card>
                <v-toolbar>
                  <v-toolbar-title>Заклинания</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn icon flat @click="showInput('spell')"><v-icon>add</v-icon></v-btn>
                    <v-btn icon flat @click="clearSpells"><v-icon>clear</v-icon></v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                  <v-list>
                    <v-list-tile
                      v-for="(item, index) in spells"
                      :key="index"
                    >
                      <v-list-tile-content>
                        <v-list-tile-title v-html="item"></v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn icon flat @click="deleteSpell(index)"><v-icon>remove</v-icon></v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card>
                <v-textarea
                  label="Заметки"
                  v-model="memo"
                  rows="7"
                />
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import dice from '../dice'
  import InputBox from './InputBox'
  import TestResult from './TestResult'
  import GameTime from './GameTime'
  import GameItems from './GameItems'
  import GamePoints from "./GamePoints";

  export default {
    name: "Main",
    components: {
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
      memo: '',
      attrNames: [
        'Мастерство',
        'Выносливость',
        'Удача',
      ],
    }),
    methods: {
      addSpell(name) { this.$store.commit('addSpell', name) },
      deleteSpell(index) { this.$store.commit('deleteSpell', index) },
      clearSpells() { this.$store.commit('resetSpells') },

      resetPlayer() { this.$store.dispatch('reset') },

      savePlayer() { /* procedure Save1Click(Sender: TObject); */ },
      loadPlayer() { /* procedure Load1Click(Sender: TObject); */ },
      editPlayer() { /* procedure Edit2Click(Sender: TObject); */ },

      roll() { /* fmRoller.Show; */ },
      coin() { this.setResult((dice(1, 2) === 1) ? 'Орел' : 'Решка') },
      testAttrib(index) {
        this.$store.dispatch('testAttrib', index)
          .then(result => {
            this.setResult(result ? 'Успех!' : 'Провал!')
            this.$store.commit('modifyAttrib', { index, value: -1 })
          });
      },

      setPlayer() {},

      setPlayerName(name) { this.$store.dispatch('createPlayer', { name }) },
      ...mapMutations([
          'modifyTime',
          'resetTime',
      ]),
      ...mapMutations( 'roll', [ 'setResult', ] ),
      ...mapMutations( 'input', [ 'showInput', ] ),
    },
    mounted() { this.showInput('player') }
  }
</script>

<style scoped>
</style>