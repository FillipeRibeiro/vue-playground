<template>
  <div class="calculator">
    <span class="display">{{ current || "0" }}</span>
    <button @click="clear" class="btn">AC</button>
    <button class="btn">+/-</button>
    <button class="btn">%</button>
    <button @click="divided()" class="btn operator">/</button>
    <button @click="append('7')" class="btn">7</button>
    <button @click="append('8')" class="btn">8</button>
    <button @click="append('9')" class="btn">9</button>
    <button @click="times()" class="btn operator">x</button>
    <button @click="append('4')" class="btn">4</button>
    <button @click="append('5')" class="btn">5</button>
    <button @click="append('6')" class="btn">6</button>
    <button @click="minus()" class="btn operator">-</button>
    <button @click="append('1')" class="btn">1</button>
    <button @click="append('2')" class="btn">2</button>
    <button @click="append('3')" class="btn">3</button>
    <button @click="plus()" class="btn operator">+</button>
    <button @click="append('0')" class="btn zero">0</button>
    <button @click="dot" class="btn">.</button>
    <button @click="calculate" class="btn operator">=</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "",
      previus: "",
      operator: "",
    };
  },
  methods: {
    clear() {
      this.current = "";
      this.operator = "";
      this.previus = "";
    },
    append(value) {
      this.current = `${this.current}${value}`;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    calculate() {
      this.current = `${this.operator(
        parseFloat(this.previus || 0),
        parseFloat(this.current || 0)
      )}`;

      this.previus = "";
      this.operator = "";
    },
    setPrevius() {
      this.previus = this.current;
      this.current = "";
    },
    plus() {
      this.operator = (a, b) => a + b;
      this.setPrevius();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevius();
    },
    divided() {
      this.operator = (a, b) => a / b;
      this.setPrevius();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevius();
    },
  },
};
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);

  width: 400px;
  margin: 0 auto;
  font-size: 40px;
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.zero {
  grid-column: 1 / 3;
}
.btn {
  border: 1px solid #999;
  background-color: #eee;
}
.operator {
  background-color: orange;
  color: white;
}
</style>
