let app = new Vue({
    el: '#app',
    created(){
        this.cards.forEach((card) => {
            Vue.set(card,'isFlipped',false);
            Vue.set(card,'isMatched',false);
        });

        this.memoryCards = _.shuffle(this.memoryCards.concat(_.cloneDeep(this.cards), _.cloneDeep(this.cards)));
    },


    methods:{
        flipCard(card){

            if(card.isMatched || card.isFlipped || this.flippedCards.length === 2)
                return;

            card.isFlipped = true;

            if(this.flippedCards.length < 2)
                this.flippedCards.push(card);
            if(this.flippedCards.length === 2)
                this._match(card);
        },

        _match(card){
            if(this.flippedCards[0].name === this.flippedCards[1].name){
                setTimeout(() => {
                    this.flippedCards.forEach(card => card.isMatched = true);
                    this.flippedCards = [];
                }, 400);
            }
            else{
                setTimeout(() => {
                    this.flippedCards.forEach((card) => {card.isFlipped = false});
                    this.flippedCards = [];
                }, 800);
            }
        },
    },

    data:{

        flippedCards: [],
        memoryCards: [],

        cards: [
            {
                name: 'Gris',
                img: 'gris.png',

            },
            {
                name: 'Gris1',
                img: 'gris1.png',

            },
            {
                name: 'Gris2',
                img: 'gris2.png',

            },
            {
                name: 'Gris3',
                img: 'gris3.png',

            },
        ],


    },
});