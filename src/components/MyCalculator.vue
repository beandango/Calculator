<template>
  <div class="container">
    <div class="calculator">
      <div class="display">
        <h4>{{current || 0}}</h4>
      </div>
      <div @click="clear" class="btn-light"><p>C</p></div>
      <div @click="sign" class="btn-light"><p>+/-</p></div>
      <div @click="percent" class="btn-light"><p>%</p></div>
      <div @click="divide" class="operators"><p>/</p></div>

      <div @click="append('7')" class="btn"><p>7</p></div>
      <div @click="append('8')" class="btn"><p>8</p></div>
      <div @click="append('9')" class="btn"><p>9</p></div>
      <div @click="mult" class="operators"><p>x</p></div>
      
      <div @click="append('4')" class="btn"><p>4</p></div>
      <div @click="append('5')" class="btn"><p>5</p></div>
      <div @click="append('6')" class="btn"><p>6</p></div>
      <div @click="minus" class="operators">-</div>

      <div @click="append('1')" class="btn"><p>1</p></div>
      <div @click="append('2')" class="btn"><p>2</p></div>
      <div @click="append('3')" class="btn"><p>3</p></div>
      <div @click="add" class="operators"><p>+</p></div>

      <div @click="append('0')" class="zero"><p>0</p></div>
      <div @click="dot" class="btn"><p>.</p></div>
      <div @click="equals" class="operators"><p>=</p></div>
    </div>
    <div class="footer">&copy; 2023 beanDango </div>
  </div>
  
</template>

<script>
/* eslint-disable */
import { sign } from 'crypto';

export default {
  data() {
    return {
      current: '',
      previous: null,
      operator: null,
      operatorClicked: false
    }
  },
  methods: {
    clear() {
      this.current = '';
      this.operatorClicked = false;
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ?
        this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(num) {
      if(this.current.length < 8) {
        if(this.operatorClicked)
        {
          this.current = '';
          this.operatorClicked = false;
        }
        this.current = `${this.current}${num}`;
      }
    },
    setPrevious() {
      this.operatorClicked = true;
      this.previous = this.current;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    mult() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();

    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();

    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    equals() {
      this.current = `${this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      )}`;
      this.previous = null;
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  margin: 0;
  padding: 0;
  color: #fff;
}
.calculator{
  background-color: #131212;
  margin: 0 auto;
  width: 350px;
  height: 590px;
  font-size: 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  border-radius: 30px;
  padding: 20px;
}
.display{
  grid-column: 1 / 5;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-top: 20px;
  padding-bottom: 5px;
  text-align: right;
  border-radius: 30px;
  width: 350px;
}

.display h4{
  padding-right: 20px;
  font-weight: 100;
  font-size: 70px;
  padding-top: 10px;
}

.btn, .zero{
  background-color: #3d3d3d;
}

.zero{
  grid-column: 1 / 3;
}

.operators{
  background-color: #ffb451;
}

.btn-light{
  background-color: #757575;
}

.btn, .zero, .operators, .btn-light{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 35px;
  margin: 7px;
}

.btn:hover, .zero:hover, .operators:hover, .btn-light:hover {
  cursor: pointer;
}

.btn:hover, .zero:hover{
  background-color: #757575;
}

.btn-light:hover{
  background-color: #b8b8b8;
}

.operators:hover{
  background-color: #ffc27c;
}

p{
  justify-content: center;
}

.footer{
  position: fixed;
  bottom: 5px;
  color: #131212;
}

</style>
