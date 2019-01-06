<template>
  <v-container grid-list-md>
    <v-dialog
      v-model="inputPlayer"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Player Name
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="name"
            label="Enter Player Name"
            required
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="setPlayerName"
            >
              Ok
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="inputItem"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Item Name
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="itemName"
            label="Enter Item"
            required
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="addItem"
            >
              Ok
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="inputSpell"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Spell Name
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="spellName"
            label="Enter Spell"
            required
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="addSpell"
            >
              Ok
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="inputPoints"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Add Points
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="pointsCount"
            label="How Many"
            required
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="addPoints"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="showTest"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Результат
        </v-card-title>
        <v-card-text>
          {{testResult}}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="showTest = false"
            >
              Ok
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
                  <v-list-tile
                    @click=""
                  >
                    <v-list-tile-title>Save</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile
                    @click=""
                  >
                    <v-list-tile-title>Load</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile
                    @click=""
                  >
                    <v-list-tile-title>Edit</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-menu offset-y>
                <v-btn
                  slot="activator"
                  flat
                >
                  Время
                </v-btn>
                <v-list>
                  <v-list-tile @click="timeForward">
                    <v-list-tile-title><v-icon>fast_forward</v-icon>Вперед</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="timeBackward">
                    <v-list-tile-title><v-icon>fast_rewind</v-icon>Назад</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="timeReset">
                    <v-list-tile-title><v-icon>replay</v-icon>Сброс</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-menu offset-y>
                <v-btn
                  slot="activator"
                  flat
                >
                  Dice
                </v-btn>
                <v-list>
                  <v-list-tile
                    @click="roll"
                  >
                    <v-list-tile-title><v-icon>casino</v-icon>Roll</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile
                    @click="coin"
                  >
                    <v-list-tile-title><v-icon>casino</v-icon>Coin</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-menu offset-y>
                <v-btn
                  slot="activator"
                  flat
                >
                  Проверка
                </v-btn>
                <v-list>
                  <v-list-tile
                    v-for="(a, index) in attrib"
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

                  Add1: TMenuItem;
                  Delete1: TMenuItem;
                  Clear1: TMenuItem;

                  Add2: TMenuItem;
                  Delete2: TMenuItem;
                  Clear2: TMenuItem;

                  Add3: TMenuItem;
                  Delete3: TMenuItem;
                  Clear3: TMenuItem;

                  DeselectAll1: TMenuItem;
                  AddMany1: TMenuItem;
                  Edit2: TMenuItem;
                  Eat1: TMenuItem;

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
              <v-card>
                <v-toolbar>
                  <v-toolbar-title>Время</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn icon flat @click="timeBackward"><v-icon>fast_rewind</v-icon></v-btn>
                    <v-btn icon flat @click="timeForward"><v-icon>fast_forward</v-icon></v-btn>
                    <v-btn icon flat @click="timeReset"><v-icon>replay</v-icon></v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                  <v-progress-circular
                    :value="(time / 24) * 100"
                    :size="100"
                    :width="15"
                  >
                    {{time}}
                  </v-progress-circular>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card>
                <v-toolbar>
                  <v-toolbar-title>Предметы</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn icon flat @click="inputItem = true"><v-icon>add</v-icon></v-btn>
                    <v-btn icon flat @click="clearItems"><v-icon>clear</v-icon></v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                  <v-list>
                    <v-list-tile
                      v-for="(item, index) in items"
                      :key="index"
                    >
                      <v-list-tile-content>
                        <v-list-tile-title v-html="item"></v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn icon flat @click="deleteItem(index)"><v-icon>remove</v-icon></v-btn>
                        <v-btn icon flat @click="eatItem(index)"><v-icon>restaurant</v-icon></v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs6>
              <v-card>
                <v-toolbar>
                  <v-toolbar-title>Метки</v-toolbar-title>
                  <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                      <v-btn icon flat @click="addPoint"><v-icon>done</v-icon></v-btn>
                      <v-btn icon flat @click="inputPoints = true"><v-icon>done_all</v-icon></v-btn>
                      <v-btn icon flat @click="deletePoint"><v-icon>remove</v-icon></v-btn>
                      <v-btn icon flat @click="clearPoints"><v-icon>clear</v-icon></v-btn>
                      <v-btn icon flat @click="resetPoints"><v-icon>replay</v-icon></v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                  <v-checkbox
                    v-for="(point, index) in points"
                    :label="'' + (index + 1)
"
                    v-model="points[index]"
                  />
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card>
                <v-toolbar>
                  <v-toolbar-title>Заклинания</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn icon flat @click="inputSpell = true"><v-icon>add</v-icon></v-btn>
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
  import { mapState } from 'vuex'
  import dice from '../dice'

  export default {
    name: "Main",
    computed: {
      ...mapState([
        'playerName',
        'time',
        'items',
        'spells',
        'attrib',
          'points',
      ]),
    },
    data: () =>({
      inputPlayer: true,
      inputItem: false,
      inputSpell: false,
      inputPoints: false,
      name: 'Unnamed',
      itemName: 'Unnamed',
      spellName: 'Unnamed',
      pointsCount: 0,
      memo: '',
      testResult: null,
      showTest: false,
      attrNames: [
        'Мастерство',
        'Выносливость',
        'Удача',
      ],

      checkbox: false,
    }),
    methods: {
      timeForward() { this.$store.commit('modifyTime', 1) },
      timeBackward() { this.$store.commit('modifyTime', -1) },
      timeReset() { this.$store.commit('resetTime') },

      addItem() {
        this.$store.commit('addItem', this.itemName)
        this.inputItem = false
      },
      deleteItem(index) { this.$store.commit('deleteItem', index) },
      eatItem(index) {
        this.$store.commit('deleteItem', index)
        this.$store.commit('modifyAttrib', { index: 1, value: 1 })
      },
      clearItems() { this.$store.commit('resetItems') },

      addSpell() {
        this.$store.commit('addSpell', this.spellName)
        this.inputSpell = false
      },
      deleteSpell(index) { this.$store.commit('deleteSpell', index) },
      clearSpells() { this.$store.commit('resetSpells') },

      addPoint() { this.$store.commit('addPoints', 1) },
      addPoints() {
        this.$store.commit('addPoints', this.pointsCount)
        this.inputPoints = false
      },
      deletePoint() { this.$store.commit('deletePoint') },
      clearPoints() { this.$store.commit('clearPoints') },
      resetPoints() { this.$store.commit('resetPoints') },

      resetPlayer() { this.$store.dispatch('reset') },
      /*
      procedure Save1Click(Sender: TObject);
      procedure Load1Click(Sender: TObject);
      */
      roll() {
        // fmRoller.Show;
      },
      coin() {
        this.testResult = (dice(1, 2) == 1)
          ? 'Орел'
          : 'Решка'
        this.showTest = true
      },
      /*
      procedure Edit2Click(Sender: TObject);
      */
      testAttrib(index) {
        this.$store.dispatch('testAttrib', index)
          .then(result => {
            this.testResult = result ? 'Успех!' : 'Провал!'
            this.$store.commit('modifyAttrib', { index, value: -1 })
            this.showTest = true
          });
      },

      setPlayer() {},

      setPlayerName() {
        this.$store.dispatch('createPlayer', { name: this.name })
        this.$store.dispatch('reset')
        this.inputPlayer = false
      }
    }
  }
</script>

<style scoped>
</style>