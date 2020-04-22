Vue.component('app-calculator',{
    data: function(){
       return {
        calcInput: 0,
        num:0,
        lastOperation:"",
        results: [],
        isHistoryClicked: false
    }
},
template:`<div>
<div class="outerLayer">
<div class="calculator m-auto mt-5">
    <form>
        <div>
            <span style="background-color:rgb(29, 91, 143);"></span>
            <span style="background-color:rgb(72, 50, 197);"></span>
            <span style="background-color:rgb(57, 206, 94); margin-right:20px;"></span>

            <i v-if="results.length>0" @click="isHistoryClicked = !isHistoryClicked" class="fas fa-history open-history">
                <div v-if="isHistoryClicked" class="popup-arrow"></div>
                <ul v-if="isHistoryClicked" class="history-popup"> 
                    <li v-for="(result, index) in results" :key="index">{{result}}</li>
                </ul>
            </i>
        </div>
        <p class="text-muted">{{lastOperation}}</p>
        <input type="text" v-model="calcInput" class="calc-screen form-control" id="disableTyping">
    </form>
    <table>
            <tr>
                <td style="width:100%; background-color:rgb(134, 44, 218)">
                    <input type="button" class=" calc-btns" value="C" @click="clear">
                </td>

                <td >
                <input type="button" class=" calc-btns" value="CE" >
                </td>

                <td >
                    <button class=" calc-btns" @click="back"><i class="fas fa-long-arrow-alt-left fa-lg"></i></button>
                </td>
                
                <td  style="background-color:rgb(45, 116, 230)">
                    <input type="button" class=" calc-btns" value="√" @click="sqrt">
                </td>
                
                <td>
                        <input type="button" class="calc-btns" value="x²" @click="square">
                </td>
                
            </tr>
            <tr>

                <tr>
                        <td>
                            <input type="button" class="calc-btns " value="7"@click="insert(7)">
                        </td>
        
                        <td>
                            <input type="button" class=" calc-btns" value="8"@click="insert(8)">
                        </td>
        
                        <td>
                            <input type="button" class=" calc-btns" value="9"@click="insert(9)">
                        </td>
        
                        <td  class="colorRightRow">
                            <input type="button" class=" calc-btns" value="/" @click="insert('/')"> 
                        </td>

                        <td>
                                <input type="button" class=" calc-btns " value="sin" @click="sin">
                        </td>
                        
                    </tr>

                    <tr>
                        <td>
                                <input type="button" class="calc-btns " value="4"@click="insert(4)">
                        </td>
            
                        <td>
                            <input type="button" class="calc-btns " value="5"@click="insert(5)">
                        </td>
            
                        <td>
                            <input type="button" class="calc-btns " value="6"@click="insert(6)"> 
                        </td>
            
                        <td  class="colorRightRow">
                            <input type="button" class="calc-btns " value="*"@click="insert('*')"> 
                        </td>

                        <td>
                            <input type="button" class=" calc-btns" value="cos" @click="cos"> 
                        </td>
                        
                    </tr>

                    <tr>
                        <td>
                            <input type="button" class=" calc-btns "  value="1" @click="insert(1)">
                        </td>
                
                        <td>
                            <input type="button" class=" calc-btns " value="2"@click="insert(2)">
                        </td>
        
                        <td>
                            <input type="button" class=" calc-btns " value="3"@click="insert(3)">
                        </td>
                
                        <td  class="colorRightRow">
                            <input type="button" class=" calc-btns "value="-"@click="insert('-')">
                        </td>

                        <td>
                            <input type="button" class=" calc-btns " value="tan"@click="tan"> 
                        </td>

                    </tr>
                    <tr>
                            <td>
                                <input type="button" class="calc-btns" value="0" @click="insert(0)"> 
                            </td>
                    
                            <td>
                                <input type="button" class="calc-btns" value="."@click="insert('.')"> 
                            </td>
                    
                            <td>
                                <input type="button" class="calc-btns" value="+"@click="insert('+')"> 
                            </td>
                    
                            <td class="equalsBtn">
                                <input type="button" class="calc-btns" value="=" @click="run()"> 
                            </td>
                            <td>
                                <input type="button" class="calc-btns" value="log" @click="log">
                            </td> 
                    </tr>                                 
    </table>

</div>
<footer >
<div class="container m-auto">
<button class="btn btn-dark mb-4" @click="changeToQuiz">Test your mathematical knowledge</button>
<p class="text-center text-white">&copy; 2020 Created & designed by Mahmoud Farargy <br>A.K.A Mazen</p>
</div>
</footer>
</div>

</div>`
,
    methods:{
            disableTextField: function(){
                document.getElementById("disableTyping").disabled= true;
            },
            insert: function(num){
                this.disableTextField();
                this.num = num;
                console.log(num);
                if(/^[0]/.test(this.calcInput)){
                    this.calcInput = `${""}${num}`;
                }else{
                    this.calcInput = `${this.calcInput}${num}`;
                }
                
            },
            run: function(){
                console.log("working");
                
                var exp = this.calcInput;
                if(exp){
                    if(/[-|+|*|/]/.test(exp)){
                        this.lastOperation= (`${this.calcInput}`);
                    }
                   this.results.unshift(`${this.calcInput} = ${eval(exp)}`);
                   this.calcInput = eval(exp);
                   
                }
                
            },
            clear: function(){
                this.calcInput= 0;
                this.lastOperation= ""
            },
            back: function(){
                var exp = this.calcInput 
                this.calcInput = exp.substring(0, exp.length-1);
            },
            square: function(){
                this.calcInput = this.calcInput * this.calcInput;
            },
            sqrt: function(){
                this.calcInput = Math.sqrt(this.calcInput);
            },
            sin: function(){
                this.calcInput = Math.sin(this.calcInput);
            },
            cos:function(){
                this.calcInput = Math.cos(this.calcInput);
            },
            log: function(){
                this.calcInput = Math.log(this.calcInput);
            },
            tan: function(){
                this.calcInput = Math.tan(this.calcInput);
            },
            changeToQuiz(){
                mainApp.switchComp = 'app-math-quiz'
            }
            // calcHistory: function(){
            //     this.results.push(`${this.calcInput}${this.num}`);
            // }
    }
    // ,
    // created(){
    //     this.disableTextField();
    // }
});
Vue.component('app-math-quiz',{
    data: function(){
        return{
            mode:'app-questions'

        }
    },
    template:`
        <div class="main-quiz">
            <h2 class="text-center py-4 text-white">The Super Quiz</h2>
            <hr>
            <div class="row m-auto mb-5">
            <div class="col-md-7 col-sm-12 m-auto ">
                <transition name= "flip" mode="out-in">
                    <component :is="mode" @answered="answered($event)" @confirmed="mode='app-questions'" key=""></component>
                </transition>
            </div>
            </div>
        <footer class="quiz-footer">
            <button class="btn btn-dark calc-switch-btn mb-3" @click="changeToCalc">Return back to calculator</button>
           <p class="text-center text-white">&copy; 2020 Created & designed by Mahmoud Farargy <br>A.K.A Mazen</p>
        </footer> 
</div>


    `,
    methods:{
            answered(isCorrect){
                if(isCorrect){
                    this.mode= "app-answer";
                }else if(!isCorrect){
                    this.mode = "app-questions";
                    alert("Wrong answer, try again!");
                }
            },
            changeToCalc(){
                mainApp.switchComp='app-calculator';
            }
    }
});
const MODE_ADDITION = 1;
const MODE_SUBTRACTION = 2;
const MODE_MULTIPLICATION = 3;

Vue.component('app-questions',{
    
    data: function(){
        return {
            question: 'Sorry, an error occured',
            btnData: [
                {correct: true, answer:0},
                {correct: false, answer:0},
                {correct: false, answer:0},
                {correct: false, answer:0}
            ]
        }
        
    },
    template:`
    <div>
        <div class="card my-3">
            <div class="card-header text-center bg-light py-2">
                <h4>{{question}}</h4>
            </div>
            <div class="card-body" >
                <div class="row pt-3">
                        <div class="col-md-6 mb-3">
                    <button class="btn btn-primary btn-lg" @click="onAnswer(btnData[0].correct)">{{btnData[0].answer}}</button>
                        </div>
                        <div class="col-md-6 mb-3">
                    <button class="btn btn-primary btn-lg" @click="onAnswer(btnData[1].correct)">{{btnData[1].answer}}</button>
                        </div>
                        <div class="col-md-6 mb-3">
                    <button class="btn btn-primary btn-lg" @click="onAnswer(btnData[2].correct)">{{btnData[2].answer}}</button>
                        </div>
                        <div class="col-md-6 mb-3">
                    <button class="btn btn-primary btn-lg" @click="onAnswer(btnData[3].correct)">{{btnData[3].answer}}</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods:{
        generateQuestion(){
            const firstNumber = this.generateRandomNumber(1,100);
            const secondNumber = this.generateRandomNumber(1,100);
            const operationMode = this.generateRandomNumber(1,3);
            console.log(operationMode);
            let correctAnswer =0;
            switch(operationMode){
                case MODE_ADDITION:
                    correctAnswer = firstNumber + secondNumber;
                    this.question = `What's ${firstNumber} + ${secondNumber}?`
                break;
                case MODE_SUBTRACTION:
                    var largestNum = Math.max(firstNumber, secondNumber);
                    var lowestNum = Math.min(firstNumber,secondNumber);
                    correctAnswer =  largestNum - lowestNum;
                    this.question = `What's ${largestNum} - ${lowestNum}?`
                 break;
                 case MODE_MULTIPLICATION:
                     correctAnswer= firstNumber * secondNumber;
                     this.question =  `What's ${firstNumber} x ${secondNumber}?`
                break;
                default:
                    correctAnswer= 0;
                    this.question = 'Oops, an error occurred';
            }
            this.btnData[0].answer= this.generateRandomNumber(correctAnswer - 10, correctAnswer +10, correctAnswer);
            this.btnData[0].correct =false;
            this.btnData[1].answer= this.generateRandomNumber(correctAnswer - 10, correctAnswer +10, correctAnswer);
            this.btnData[1].correct =false;
            this.btnData[2].answer= this.generateRandomNumber(correctAnswer - 10, correctAnswer +10, correctAnswer);
            this.btnData[2].correct =false;
            this.btnData[3].answer= this.generateRandomNumber(correctAnswer - 10, correctAnswer +10, correctAnswer);
            this.btnData[3].correct =false;

            const correctButton = this.generateRandomNumber(0,3);
            this.btnData[correctButton].correct=  true;
            this.btnData[correctButton].answer = correctAnswer; 
        },
        generateRandomNumber(min,max, except){
            const rndNumber = Math.round(Math.random() * (max-min)) + min;
            if(rndNumber == except){
                return this.generateRandomNumber(min, max, except);
            }
            return rndNumber;
        },
        onAnswer(isCorrect){
                this.$emit('answered', isCorrect);
        }
    },
    created: function(){
        this.generateQuestion();
    }
});

Vue.component('app-answer',{
        template:`
    <div class="alert alert-success text-center">
            <h1>That's Correct!</h1>
            <hr>
            <button class="btn btn-primary my-5" @click="onNextQuestion">Next Question</button>
    </div>
        `,
        methods:{
            onNextQuestion: function(){    
                this.$emit('confirmed');

            }
        }
});

var mainApp = new Vue({
    el: "#app",
    data: function(){
        return{
            switchComp:'app-calculator'
        }
    }
    
});