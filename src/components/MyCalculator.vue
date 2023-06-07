<template>
  <div class="calculator">
    <div class="display">
      <h4>weeee numbers</h4>
    </div>
    <div class="btn-light"><p>C</p></div>
    <div class="btn-light"><p>+/-</p></div>
    <div class="btn-light"><p>%</p></div>
    <div class="operators"><p>/</p></div>

    <div class="btn"><p>7</p></div>
    <div class="btn"><p>8</p></div>
    <div class="btn"><p>9</p></div>
    <div class="operators"><p>x</p></div>
    
    <div class="btn"><p>4</p></div>
    <div class="btn"><p>5</p></div>
    <div class="btn"><p>6</p></div>
    <div class="operators">-</div>

    <div class="btn"><p>1</p></div>
    <div class="btn"><p>2</p></div>
    <div class="btn"><p>3</p></div>
    <div class="operators"><p>+</p></div>

    <div class="zero"><p>0</p></div>
    <div class="btn"><p>.</p></div>
    <div class="operators"><p>=</p></div>

  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  margin: 0;
  padding: 0;
  color: #fff;
}
.calculator{
  background-color: #1312124d;
  border: solid rgba(255, 255, 255, 0.699) 2px;
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.521);
  backdrop-filter: 10px;
  margin: 0 auto;
  width: 350px;
  height: 550px;
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
  margin-bottom: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: right;
  border-radius: 30px;
}

.display h4{
  padding-right: 10px;
  font-weight: 100;
  font-size: 30px;
}

.btn, .zero{
  background-color: #3d3d3dab;
}

.zero{
  grid-column: 1 / 3;
}

.operators{
  background-color: #acacacb0;
}

.btn-light{
  background-color: #757575b2;
}

.btn, .zero, .operators, .btn-light{
  border: 1px solid rgba(255, 255, 255, 0.74);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 35px;
  margin: 7px;
}

.btn:hover, .zero:hover{
  background-color: #757575;
}

.btn-light:hover{
  background-color: #b8b8b8;
}

.operators:hover{
  background-color: #666666b0;
}

p{
  justify-content: center;
}

</style>
